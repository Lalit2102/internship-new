import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
const API_BASE = "http://localhost:3002";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router";
import { TbArrowBackUp } from "react-icons/tb";
import FileSaver from "file-saver"; // Import the FileSaver library

export default function History() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchTex, setSearchText] = useState("");
  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const res = await axios.get(API_BASE + "/history");
    setData(res.data);
  };

  const rows = data;
  const columns = [
    {
      field: "_id",
      headerName: "Mongo ID",
      width: 300,
      headerClassName: "bold-header",
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      headerClassName: "bold-header",
    },
    {
      field: "timestamp",
      headerName: "Timestamp",
      width: 200,
      headerClassName: "bold-header",
    },
    {
      field: "encryptedLicense",
      headerName: "Encrypted License",
      width: 200,
      headerClassName: "bold-header",
    },
    {
      field: "download",
      headerName: "Download File",
      width: 200,
      sortable: false,
      headerClassName: "bold-header",
      filterable: false,
      renderCell: (params) => (
        <Button
          // sx={{ height:  }}
          className="cursor-pointer bg-tomato text-white m-10 "
          variant="contained"
          color="secondary"
          onClick={() => handleDownloadClick(params.row)}
        >
          Download
        </Button>
      ),
    },
  ];

  const handleDownloadClick = (rowData) => {
    const jsonData = JSON.stringify(rowData);
    const blob = new Blob([jsonData], { type: "application/json" });
    FileSaver.saveAs(blob, `data_${rowData._id}.json`);
  };

  const handlePageChange = (route) => {
    navigate(route);
  };

  return (
    <>
      <div className="w-2/12 fixed">
        <div className="left-div">
          <div className=" grid h-[100vh]">
            <Button
              // sx={{ height: 100 }}
              className="cursor-pointer bg-white text-tomato border-black border-4 relative hover:bg-white"
              variant="contained"
              // color="secondary"
              // onClick={() => handlePageChange("/history")}
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
              {/* <div className="absolute top-0 left-[50%] translate-x-[-50%] w-[70%] h-[2px] bg-white justify-center"></div> */}
            </Button>

            <Button
              // sx={{ height: 100 }}
              onClick={() => handlePageChange("/")}
              className="cursor-pointer bg-tomato text-white relative"
              variant="contained"
              color="secondary"
            >
              <div className="text-5xl">Home</div>
              {/* Add a black bar before this button */}
              <div className="absolute top-0 left-[50%] translate-x-[-50%] w-[70%] h-[2px] bg-white justify-center"></div>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-10/12 ml-[16%]">
        <div className="w-[87.2%] m-auto ">
          <DataGrid
            sx={{
              "& .MuiDataGrid-root": {
                border: "3px solid #bbbbbb", // #bbbbbb-colored border for the entire DataGrid
              },
              "& .MuiDataGrid-cell": {
                border: "3px solid #bbbbbb", // #bbbbbb-colored border for individual cells
                borderRight: "none", // Remove right border for cells
                borderTop: "none", // Remove top border for cells
                // Add more CSS for customization as needed
              },
              "& .MuiDataGrid-columnHeader": {
                border: "3px solid #bbbbbb", // Tomato-colored border for individual cells
                borderRight: "none", // Remove right border for cells
                borderTop: "none", // Remove top border for cells
                // Add more CSS for customization as needed
              },
            }}
            rows={rows}
            columns={columns}
            // rowHeight={50}
            getRowId={(row) => row._id}
            components={{
              Toolbar: GridToolbar, // To display the search bar
            }}
            onFilterModelChange={(model) => {
              if (model.items.length > 0) {
                setSearchText(model.items[0].value);
              } else {
                setSearchText("");
              }
            }}
            showCellRightBorder={true}
          />
        </div>
      </div>
    </>
  );
}
