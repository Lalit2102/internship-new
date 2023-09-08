import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { TbArrowBackUp } from "react-icons/tb";

import axios from "axios";
const API_BASE = "http://localhost:3002";

const Decrypt = () => {
  const navigate = useNavigate();
  const [decryptedData, setDecryptedData] = useState();
  const [license, setLicense] = useState("");
  const [password, setPassword] = useState("");
  const handleDecrypt = async () => {
    if (password == "" || license == "") alert("Fill all the fields");
    try {
      const response = await axios.post(API_BASE + "/decrypt", {
        data: license,
        password: password,
      });

      // setDecryptedData(response.data.decryptedData);
      const res = await JSON.parse(response.data.decryptedData);
      setDecryptedData(res);
    } catch (error) {
      console.log(`An error has occurred: ${error}`);
    }
  };

  const handlePageChange = (route) => {
    navigate(route);
  };
  return (
    <div className="">
      <div className="w-2/12 fixed">
        <div className="left-div">
          <div className=" grid h-[100vh]">
            <Button
              // sx={{ height: 100 }}
              // onClick={() => handlePageChange("/decrypt")}
              className="cursor-pointer bg-white text-tomato relative  hover:bg-white"
              variant="contained"
              color="secondary"
            >
              <div className="text-5xl">Decrypt</div>
              {/* Add a black bar before this button */}
              {/* <div className="absolute top-0 left-[50%] translate-x-[-50%] w-[70%] h-[2px] bg-white justify-center"></div> */}
            </Button>

            <Button
              // sx={{ height: 100 }}
              className="cursor-pointer bg-tomato text-white border-black"
              variant="contained"
              color="secondary"
              onClick={() => handlePageChange("/history")}
            >
              <div className="text-5xl">History</div>
              {/* Add a black bar before this button */}
            </Button>

            <Button
              // sx={{ height: 100 }}
              onClick={() => handlePageChange("/")}
              className="cursor-pointer bg-tomato text-white relative"
              variant="contained"
              color="secondary"
            >
              <div className="text-5xl">Home</div>
              <div className="absolute top-0 left-[50%] translate-x-[-50%] w-[70%] h-[2px] bg-white justify-center"></div>
              {/* Add a black bar before this button */}
            </Button>
          </div>
        </div>
      </div>

      <div className="w-10/12 ml-[16.6%]">
        <div className="font-bold text-21xl pt-10 mx-10 text-center mb-10 pb-10">
          Decrypt your License Key
        </div>
        <div className="my-5 mx-10 grid gap-3 justify-center">
          <div className="text-6xl">Enter the License Code</div>
          <TextField
            className="page1-textbox"
            color="secondary"
            id="licenseCodeInput"
            placeholder="Enter your Code"
            size="medium"
            margin="none"
            required
            value={license}
            onChange={(e) => {
              setLicense(e.target.value);
            }}
          />
        </div>

        <div className="my-5  mx-10 grid gap-3 justify-center">
          <div className="text-6xl">Enter the password used for encryption</div>
          <TextField
            className="page1-textbox"
            color="secondary"
            type="password"
            id="passwordInput"
            placeholder="Enter your Password"
            size="medium"
            margin="none"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div
          className="[text-decoration:none] cursor-pointer [border:none] p-0 bg-tomato m-auto my-20 rounded-sm w-[341px] h-[62px] flex flex-col items-center justify-center"
          onClick={handleDecrypt}
        >
          <div className="[text-decoration:none] relative text-6xl font-inter text-white text-center flex items-center justify-center w-[278.35px] h-[50.47px] shrink-0">{`Decrypt!`}</div>
        </div>

        <div className="p-5">
          {decryptedData && (
            <div className="grid gap-2">
              {Object.keys(decryptedData).map((key) => (
                <div key={key} className="text-5xl">
                  <strong>{key}:</strong>
                  {Array.isArray(decryptedData[key]) ? (
                    <ul>
                      {decryptedData[key].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    decryptedData[key]
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Decrypt;
