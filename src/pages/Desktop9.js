import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";

const Desktop9 = ({
  formData,
  setFormData,
  formErrors,
  setFormErrors,
  activeLink,
  setActiveLink,
}) => {
  const navigate = useNavigate();
  const handleNextButtonSubmit = () => {
    if (
      formErrors.name1 === "" &&
      formErrors.orgs === "" &&
      formErrors.phone === "" &&
      formErrors.email === ""
    ) {
      // Show alert if any of the fields are empty
      navigate("/license-type");
    } else {
      alert("Please fill all required fields correctly ."); // Replace with your actual next page URL
    }
  };
  const handlePage2ButtonSubmit = () => {
    if (
      formErrors.name1 === "" &&
      formErrors.orgs === "" &&
      formErrors.phone === "" &&
      formErrors.email === ""
    ) {
      // Show alert if any of the fields are empty
      navigate("/license-type");
    } else {
      alert("Please fill all required fields correctly ."); // Replace with your actual next page URL
    }
  };
  const handlePage3ButtonSubmit = () => {
    // console.log(formData);

    if (
      formErrors.name1 === "" &&
      formErrors.orgs === "" &&
      formErrors.phone === "" &&
      formErrors.email === "" &&
      activeLink !== null
    ) {
      // Show alert if any of the fields are empty
      navigate("/license-details");
    } else {
      alert("Please filll previous page deatils first."); // Replace with your actual next page URL
    }
  };
  const handlePage4ButtonSubmit = () => {
    if (
      formErrors.name1 === "" &&
      formErrors.orgs === "" &&
      formErrors.phone === "" &&
      formErrors.email === "" &&
      activeLink !== null
    ) {
      // Show alert if any of the fields are empty
      navigate("/preview");
    } else {
      alert("Please fill previous page details first ."); // Replace with your actual next page URL
    }
  };

  const handleNameBlur = () => {
    if (!formData.name) {
      setFormErrors({ ...formErrors, name1: "name is required" });
    } else {
      setFormErrors({ ...formErrors, name1: "" });
    }
  };

  const handleOrgsBlur = () => {
    if (!formData.organization) {
      setFormErrors({ ...formErrors, orgs: "organisation is required" });
    } else {
      setFormErrors({ ...formErrors, orgs: "" });
    }
  };

  const handlePhoneNumberBlur = () => {
    if (!formData.phone) {
      setFormErrors({ ...formErrors, phone: "contact info is required" });
    } else if (!/^\d{10}$/.test(formData.phone)) {
      setFormErrors({
        ...formErrors,
        phone: "please enter valid ten digit phone number",
      });
    } else {
      setFormErrors({ ...formErrors, phone: "" });
    }
  };
  const handleEmailBlur = () => {
    if (!formData.email) {
      setFormErrors({ ...formErrors, email: "email is required" });
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      setFormErrors({ ...formErrors, email: "please enter valid email" });
    } else {
      setFormErrors({ ...formErrors, email: "" });
    }
  };

  const handlePageChange = (route) => {
    route !== "/";

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

    navigate(route);
  };

  // Function to handle button clicks and navigate to different pages
  return (
    <div className=" desktop-9-resp flex relative">
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
            <div className="ml-8">
              <div className="wizard-step">
                <div className="circle red flex items-center justify-center m-auto">
                  <div className="text-white">1</div>
                </div>
                <div className="nav-text">Customer Info</div>
              </div>
            </div>
            <div className="lines"></div>
            <div className="ml-8" onClick={handlePage2ButtonSubmit}>
              <div className="wizard-step">
                <div className="circle flex items-center justify-center m-auto">
                  <div className="text-black">2</div>
                </div>
                <div className="nav-text">License Type</div>
              </div>
            </div>
            <div className="lines"></div>
            <div className="ml-8" onClick={handlePage3ButtonSubmit}>
              <div className="wizard-step">
                <div className="circle flex items-center justify-center m-auto">
                  <div className="text-black ">3</div>
                </div>
                <div className="nav-text">License Details</div>
              </div>
            </div>
            <div className="lines"></div>
            <div className="ml-8" onClick={handlePage4ButtonSubmit}>
              <div className="wizard-step">
                <div className="circle flex items-center justify-center m-auto">
                  <div className="text-black">4</div>
                </div>
                <div className="nav-text">Preview</div>
              </div>
            </div>
          </div>
        </nav>

        <div className="main-div">
          <div className=" page-one-items right-div">
            <p className=" font-bold " id="pageOneHeading">
              Customer Info:
            </p>
            <p
              className="m-0 relative text-6xl font-medium text-dimgray-100 inline-block w-[299px]"
              id="pageOneSubHeading"
            >
              Let us get to know you!
            </p>
            <p
              className="m-0 relative text-xl font-inter text-black text-left inline-block w-[91.08px] h-[35.74px] shrink-0"
              id="nameLabel"
            >
              Name
            </p>
            <TextField
              className="page1-textbox"
              color="secondary"
              id="nameInput"
              placeholder="Enter your Name"
              size="medium"
              margin="none"
              required
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
              onBlur={handleNameBlur}
              error={!!formErrors.name1}
              helperText={formErrors.name1}
            />
            <p
              className="m-0 relative text-xl font-inter text-black text-left inline-block w-[91.08px] h-[35.74px] shrink-0"
              id="emailLabel"
            >
              Email
            </p>
            <TextField
              className="page1-textbox"
              // sx={{ width: 724 }}
              color="secondary"
              variant="outlined"
              type="email"
              id="emailInput"
              required
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              placeholder="Enter your Email"
              size="medium"
              margin="none"
              onBlur={handleEmailBlur}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />

            <p
              className="m-0 relative text-xl font-inter text-black text-left inline-block w-[250.08px] h-[35.74px] shrink-0"
              id="contactLabel"
            >
              Contact Number
            </p>
            <TextField
              className="page1-textbox"
              // sx={{ width: 724 }}
              color="secondary"
              variant="outlined"
              type="tel"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
              onBlur={handlePhoneNumberBlur}
              error={!!formErrors.phone}
              helperText={formErrors.phone}
              id="phoneInput"
              placeholder="Enter your Phone Number"
              size="medium"
              margin="none"
              required
            />
            <p
              className="m-0 relative text-xl font-inter text-black text-left inline-block w-[250.08px] h-[35.74px] shrink-0"
              id="orgsLabel"
            >
              Organization
            </p>
            <TextField
              className="page1-textbox"
              // sx={{ width: 724 }}
              color="secondary"
              variant="outlined"
              type="text"
              id="orgsInput"
              placeholder="Enter Organization Name"
              size="medium"
              value={formData.organization}
              onChange={(e) => {
                setFormData({ ...formData, organization: e.target.value });
              }}
              onBlur={handleOrgsBlur}
              error={!!formErrors.orgs}
              helperText={formErrors.orgs}
              margin="none"
              required
            />

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
  );
};

export default Desktop9;
