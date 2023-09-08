import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "./newData.json";
import { TbArrowBackUp } from "react-icons/tb";
import { Button } from "@mui/material";

const Desktop10 = ({
  formData,
  setFormData,
  activeLink,
  setActiveLink,
  setIds,
  ids,
}) => {
  const navigate = useNavigate();
  const handleNextButtonSubmit = () => {
    if (activeLink === null) {
      alert("Please select a type .");
    } else {
      if (activeLink === "demo") {
        setFormData({
          ...formData,
          licenseType: "Demo",
          noOfDays: 7,
          moduleSelected: data.map((row) => row.module),
        });
        setIds([]);
      }
      if (activeLink === "trial") {
        setFormData({
          ...formData,
          licenseType: "Trial",
          noOfDays: 30,
          moduleSelected: data.map((row) => row.module),
        });
        setIds([]);
      }
      if (activeLink === "perpetual") {
        setFormData({
          ...formData,
          licenseType: "Perpetual",
          noOfDays: 1,
          moduleSelected: [],
        });
        setIds([]);
      }
      if (activeLink === "production") {
        setFormData({
          ...formData,
          licenseType: "Production",
          noOfDays: 1,
          moduleSelected: [],
        });
        setIds([]);
      }

      navigate("/license-details");
    }
  };

  const handlePage3ButtonSubmit = () => {
    if (activeLink === null) {
      alert("Please select a type .");
    } else {
      if (activeLink === "demo") {
        setFormData({
          ...formData,
          licenseType: "Demo",
          noOfDays: 7,
        });
        setIds([]);
      } else if (activeLink === "trial") {
        setFormData({ ...formData, licenseType: "Trial", noOfDays: 30 });
        setIds([]);
      } else if (activeLink === "perpetual") {
        setFormData({
          ...formData,
          licenseType: "Perpetual",
          noOfDays: 1,
        });
        setIds([]);
      } else if (activeLink === "production") {
        setFormData({
          ...formData,
          licenseType: "Production",
          noOfDays: 1,
        });
        setIds([]);
      }

      navigate("/license-details");
    }
  };
  const handlePage4ButtonSubmit = () => {
    // console.log(formData);
    if (activeLink === null || formData.licenseRestrictions === "") {
      alert("Please fill all previous pages");
    } else {
      if (activeLink === "demo") {
        setFormData({
          ...formData,
          licenseType: "Demo",
          noOfDays: 7,
        });
        setIds([]);
      } else if (activeLink === "trial") {
        setFormData({ ...formData, licenseType: "Trial", noOfDays: 30 });
        setIds([]);
      } else if (activeLink === "perpetual") {
        setFormData({
          ...formData,
          licenseType: "Perpetual",
          noOfDays: 1,
        });
        setIds([]);
      } else if (activeLink === "production") {
        setFormData({
          ...formData,
          licenseType: "Production",
          noOfDays: 1,
        });
        setIds([]);
      }

      navigate("/preview");
    }
  };
  const handlePage1ButtonSubmit = () => {
    // console.log(formData.name);
    if (activeLink === null) {
      alert("Please select a type .");
    } else {
      if (activeLink === "demo") {
        setFormData({
          ...formData,
          licenseType: "Demo",
          noOfDays: 7,
        });
        setIds([]);
      } else if (activeLink === "trial") {
        setFormData({ ...formData, licenseType: "Trial", noOfDays: 30 });
      } else if (activeLink === "perpetual") {
        setFormData({
          ...formData,
          licenseType: "Perpetual",
          noOfDays: 1,
        });
        setIds([]);
      } else if (activeLink === "production") {
        setFormData({
          ...formData,
          licenseType: "Production",
          noOfDays: 1,
        });
        setIds([]);
      }

      navigate("/");
    }
  };

  const handlePageChange = (route) => {
    route !== "/license-type";
    {
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
  const [activeModal, setActiveModal] = useState(null);

  const handleMouseEnter = (link) => {
    setActiveModal(link);
  };

  const handleMouseLeave = () => {
    setActiveModal(null);
  };

  // Define an object to map link types to modal content
  const modalContent = {
    demo: "All Modules are enabled, 7 Days ",
    production: "Custom Modules enabled, Custom Days",
    trial: "All Modules enabled, 30 Days",
    perpetual: "Custom Modules enabled, Custom Days",
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
            <div className="ml-8" onClick={handlePage1ButtonSubmit}>
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
            <div className="ml-8">
              <div className="wizard-step">
                <div className="circle red flex items-center justify-center m-auto">
                  <div className="text-white">2</div>
                </div>
                <div className="text-center text-xl text-black mt-2 w-[9rem]">
                  License Type
                </div>
              </div>
            </div>
            <div className="bg-black w-[12rem] h-[2px] mb-8"></div>
            <div className="ml-8" onClick={handlePage3ButtonSubmit}>
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
            <div className="ml-8" onClick={handlePage4ButtonSubmit}>
              <div className="wizard-step">
                <div className="circle flex items-center justify-center">
                  <div className="text-black">4</div>
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
            <div className="grid w-[80%] m-auto gap-5 mt-10">
              <div className="font-bold text-21xl" id="pageTwoSubheading">
                License Type:
              </div>

              <div className="text-6xl" id="pageTwoHeading">
                Pick the type of Subscription
              </div>

              {/* <div className="button-divs">
                <div
                  onClick={() => {
                    setActiveLink("demo");
                  }}
                  style={{
                    backgroundColor:
                      activeLink === "demo" ? "#EB5351" : "whitesmoke",
                    color: activeLink === "demo" ? "white" : "black",
                    cursor: "pointer",
                    border: "2px solid black",
                    display: "flex", // Add flex display
                    justifyContent: "center", // Center horizontally
                    alignItems: "center", // Center vertically
                    height: "100px", // Set a fixed height (adjust as needed)
                  }}
                  className="relative"
                >
                  <div
                    style={{
                      color: activeLink === "demo" ? "white" : "black",
                      cursor: "pointer",
                      textAlign: "center", // Center the text within this div
                    }}
                    className="text-black"
                  >
                    <div className="text-5xl text-center">Demo License</div>
                  </div>
                </div>

                <div
                  onClick={() => {
                    setActiveLink("production");
                  }}
                  style={{
                    backgroundColor:
                      activeLink === "production" ? "#EB5351" : "whitesmoke",
                    color: activeLink === "production" ? "white" : "black",
                    cursor: "pointer",
                    border: "2px solid black",
                    display: "flex", // Add flex display
                    justifyContent: "center", // Center horizontally
                    alignItems: "center", // Center vertically
                    height: "100px", // Set a fixed height (adjust as needed)
                  }}
                  className="relative"
                >
                  <div
                    style={{
                      color: activeLink === "production" ? "white" : "black",
                      cursor: "pointer",
                      textAlign: "center", // Center the text within this div
                    }}
                    className="text-black"
                  >
                    <div className="text-5xl text-center">
                      Production License
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => {
                    setActiveLink("trial");
                  }}
                  style={{
                    backgroundColor:
                      activeLink === "trial" ? "#EB5351" : "whitesmoke",
                    color: activeLink === "trial" ? "white" : "black",
                    cursor: "pointer",
                    border: "2px solid black",
                    display: "flex", // Add flex display
                    justifyContent: "center", // Center horizontally
                    alignItems: "center", // Center vertically
                    height: "100px", // Set a fixed height (adjust as needed)
                  }}
                  className="relative"
                >
                  <div
                    style={{
                      color: activeLink === "trial" ? "white" : "black",
                      cursor: "pointer",
                      textAlign: "center", // Center the text within this div
                    }}
                    className="text-black"
                  >
                    <div className="text-5xl text-center">Trial License</div>
                  </div>
                </div>

                <div
                  onClick={() => {
                    setActiveLink("perpetual");
                  }}
                  style={{
                    backgroundColor:
                      activeLink === "perpetual" ? "#EB5351" : "whitesmoke",
                    color: activeLink === "perpetual" ? "white" : "black",
                    cursor: "pointer",
                    border: "2px solid black",
                    display: "flex", // Add flex display
                    justifyContent: "center", // Center horizontally
                    alignItems: "center", // Center vertically
                    height: "100px", // Set a fixed height (adjust as needed)
                  }}
                  className="relative"
                >
                  <div
                    style={{
                      color: activeLink === "perpetual" ? "white" : "black",
                      cursor: "pointer",
                      textAlign: "center", // Center the text within this div
                    }}
                    className="text-black"
                  >
                    <div className="text-5xl text-center">
                      Perpetual License
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="button-divs">
                {["demo", "production", "trial", "perpetual"].map((link) => (
                  <div
                    key={link}
                    onClick={() => {
                      setActiveLink(link);
                    }}
                    onMouseEnter={() => handleMouseEnter(link)} // Set activeModal on hover
                    onMouseLeave={handleMouseLeave} // Clear activeModal on mouse leave
                    style={{
                      backgroundColor:
                        activeLink === link ? "#EB5351" : "whitesmoke",
                      color: activeLink === link ? "white" : "black",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "80px",
                      // width: "300px",
                      position: "relative",
                      border: activeLink == link ? "none" : "1px solid grey",
                      borderRadius: "14px",
                    }}
                    className="relative"
                  >
                    <div
                      style={{
                        color: activeLink === link ? "white" : "black",
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                      className="text-black"
                    >
                      <div className="text-5xl text-center">
                        {`${link.charAt(0).toUpperCase()}${link.slice(
                          1
                        )} License`}
                      </div>
                    </div>

                    {/* Modal that appears on hover */}
                    {activeModal === link && (
                      <div
                        className="absolute top-20 left-10 w-80 text-xl rounded-lg p-5"
                        style={{
                          zIndex: 2,
                          color: "black",
                          // opacity: activeLink == link ? 0 : 1,
                          backgroundColor: "#F6E8DD",
                          //
                        }}
                      >
                        {/* Modal content goes here */}
                        {modalContent[link]}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button
                id="nextPageLink"
                onClick={handleNextButtonSubmit}
                className="[text-decoration:none] cursor-pointer [border:none] p-0 bg-tomato m-auto my-10 rounded-sm w-[341px] h-[62px] flex flex-col items-center justify-center"
              >
                <div className="[text-decoration:none] relative text-6xl font-inter text-white text-center flex items-center justify-center w-[278.35px] h-[50.47px] shrink-0">{`Next Step`}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop10;
