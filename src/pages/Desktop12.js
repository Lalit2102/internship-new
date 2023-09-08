import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TbArrowBackUp } from "react-icons/tb";
import { handleClientScriptLoad } from "next/script";
// import License from "../api/models/License.js";

const API_BASE = "http://localhost:3002";

const Desktop12 = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  // const [timestamp, settimestamp] = useState("");

  const [description, setDescription] = useState("");
  const [encryptedData, setEncryptedData] = useState({
    timestamp: "",
    encryptedLicense: "",
    description: "",
  });
  const [clicked, setClicked] = useState(false);
  const handleDownload = async () => {
    setClicked(true);

    //first the licsnse will be encrypted
    try {
      const response = await axios.post(API_BASE + "/encrypt", {
        data: JSON.stringify(formData),
      });

      const updatedEncryptedData = {
        timestamp: new Date().toISOString(),
        description:
          "This JSON file contains an encrypted license for the software product you have applied for. It contains essential details about your license, including user information, license type, validity period, selected modules, and any additional comments. The data in this file is securely encrypted to ensure confidentiality and integrity during transmission and storage",
        encryptedLicense: response.data.encryptedData,
      };

      // Update the state with the new encrypted data
      setEncryptedData(updatedEncryptedData);

      // Convert the updated data to JSON string
      const licenseData = JSON.stringify(updatedEncryptedData);

      // Create a blob and initiate download
      const blob = new Blob([licenseData], { type: "application/json" });
      const blobURL = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobURL;
      link.download = "license.json";
      link.click();

      //to store in the database
      const toStoreLicense = {
        ...updatedEncryptedData,
        name: formData.name,
      };

      const res = await axios.post(API_BASE + "/api/licenses", toStoreLicense);

      // Clean up after download
      alert("License generated and downloaded successfully!");
      setTimeout(() => {
        URL.revokeObjectURL(blobURL);
      }, 100);
      setClicked(false);
    } catch (error) {
      console.error("Encryption error:", error);
      alert("Error generating the license.");
    }
  };

  const handlePageChange = (route) => {
    if (clicked === false) {
      // Replace 'current-page' with the current page's route
      const confirmed = window.confirm(
        "You are in the midst of completing the license details. Navigating to a different page at this point will result in the loss of your current progress. Are you sure you want to leave this page?"
      );
      if (!confirmed) {
        // User chose to stay on the page, prevent navigation and do nothing.
        return false;
      } else {
        // User chose to leave the page, clear form data.
        setFormData({
          id: "",
          name: "",
          email: "",
          phone: "",
          organization: "",
          licenseType: "",
          startDate: new Date().toISOString().substr(0, 10),
          endDate: "",
          noOfDays: 1,
          moduleSelected: [],
          licenseRestrictionsDate: "",
          licenseRestrictionsTime: "",
          comments: "",
          activeLink: "",
        });
      }
    }

    navigate(route);
  };

  return (
    <div className="desktop-9-resp">
      <div className="w-2/12 fixed">
        <div className="left-div">
          <div className=" grid h-[100vh]">
            <Button
              // sx={{ height: 100 }}
              // onClick={() => handlePageChange("/")}
              className="cursor-pointer bg-white text-tomato relative hover:bg-white"
              variant="contained"
              color="secondary"
            >
              <div className="text-5xl">Home</div>
              {/* Add a black bar before this button */}
              <div className="absolute top-0 left-[50%] translate-x-[-50%] w-[70%] h-[2px] bg-white justify-center"></div>
            </Button>
            <Button
              // sx={{ height: 100 }}
              className="cursor-pointer bg-tomato text-white border-black border-4 relative"
              variant="contained"
              color="secondary"
              onClick={() => handlePageChange("/history")}
            >
              <div className="text-5xl">History</div>
              {/* Add a black bar before this button */}
            </Button>

            <Button
              // sx={{ height: 100 }}
              onClick={() => handlePageChange("/decrypt")}
              className="cursor-pointer bg-tomato text-white relative"
              variant="contained"
              color="secondary"
            >
              <div className="text-5xl">Decrypt</div>
              {/* Add a black bar before this button */}
              <div className="absolute top-0 left-[50%] translate-x-[-50%] w-[70%] h-[2px] bg-white justify-center"></div>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-10/12 ml-[16.6%]">
        <nav className="nav-container" id="navContainer">
          <div className="nav-items flex items-center justify-around gap-2">
            {/* <div
            id="nextPageLink"
            onClick={() => navigate("/")}
            className="cursor-pointer grid items-center"
          >
            <TbArrowBackUp
              style={{ transform: "scale(1.5)", color: "tomato" }}
            />
            <div className="text-xl ml-2 text-black mt-2">Home</div>
          </div> */}
            <div className="ml-8" onClick={() => navigate("/")}>
              <div className="wizard-step">
                <div className="circle  flex items-center justify-center m-auto">
                  <div className="text-black">1</div>
                </div>
                <div className="text-center text-xl text-black mt-2 w-[9rem]">
                  Customer Info
                </div>
              </div>
            </div>
            <div className="bg-black w-[12rem] h-[2px] mb-8"></div>
            <div className="ml-8" onClick={() => navigate("/license-type")}>
              <div className="wizard-step">
                <div className="circle flex items-center justify-center m-auto">
                  <div className="text-black">2</div>
                </div>
                <div className="text-center text-xl text-black mt-2 w-[9rem]">
                  License Type
                </div>
              </div>
            </div>
            <div className="bg-black w-[12rem] h-[2px] mb-8"></div>
            <div className="ml-8" onClick={() => navigate("/license-details")}>
              <div className="wizard-step">
                <div className="circle flex items-center justify-center m-auto">
                  <div className="text-black ">3</div>
                </div>
                <div className="text-center text-xl text-black mt-2 w-[9rem]">
                  License Details
                </div>
              </div>
            </div>
            <div className="bg-black w-[12rem] h-[2px] mb-8"></div>
            <div className="ml-8">
              <div className="wizard-step">
                <div className="circle red flex items-center justify-center">
                  <div className="text-white">4</div>
                </div>
                <div className="text-center text-xl text-black mt-2 ">
                  Preview
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="main-div">
          <div className="right-div">
            {/* the preview wasnt showing the current details as we used temData to access
      things rather than using formData */}
            {/* <div className="bg-salmon-100 h-[30rem] w-[60%] m-auto rounded-2xl mt-10 text-white py-10 overflow-y-scroll"> */}

            <div className=" mx-[5rem] mt-10 m-auto grid gap-2">
              <div className="text-11xl">
                <span className="font-medium">User Name: </span>
                {formData.name}
              </div>
              <div className="grid gap-2">
                <div className="text-11xl">
                  <span className="font-med">Phone Number: </span>
                  {formData.phone}
                </div>
                <div className="text-11xl">
                  <span className="font-med">Email: </span>
                  {formData.email}
                </div>
              </div>
              <div className="text-11xl">
                <span className="font-med">Organization: </span>
                {formData.organization}
              </div>
              <div className="text-11xl">
                <span className="font-med">License Type: </span>
                {formData.licenseType}
              </div>
              <div className="text-11xl">
                <span className="font-med">Valid Upto: </span>
                {formData.endDate !== "" ? formData.endDate : "None"}
              </div>
              <div className="text-11xl">
                <span className="font-med">License Duration: </span>
                {formData.noOfDays}
              </div>
              <div>
                <Button
                  className="cursor-pointer bg-tomato text-white rounded-xl"
                  sx={{ width: 400, height: 50 }}
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    navigate("/selected-modules");
                  }}
                >{`Selected Modules`}</Button>
              </div>
              <div className="grid gap-2">
                <div className="text-11xl font-med">
                  License date Restrictions{" "}
                </div>
                <div className="text-11xl">
                  {formData.licenseRestrictionsDate}
                </div>
              </div>
              <div className="grid gap-2">
                <div className="text-11xl font-med">Additional Comments</div>
                <div className="text-11xl">{formData.comments}</div>
              </div>
            </div>
            {/* </div> */}

            <div
              className="[text-decoration:none] cursor-pointer [border:none] p-0 bg-limegreen m-auto my-10 rounded-sm w-[341px] h-[62px] flex flex-col items-center justify-center"
              onClick={handleDownload}
            >
              <div className="[text-decoration:none] relative text-6xl font-inter text-white text-center flex items-center justify-center w-[278.35px] h-[50.47px] shrink-0">{`Download File`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop12;
