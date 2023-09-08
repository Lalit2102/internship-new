// import { useCallback, useState, useEffect } from "react";
// import { TextField, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import data from "./data.json"; // Adjust the path as needed
// import { DataGrid } from "@mui/x-data-grid";
// import TableComponent from "./TableComponent";

// const Desktop15 = ({ formData, setFormData, ids, setIds }) => {
//   const columns = [
//     {
//       field: "module",
//       headerName: "Module",
//       width: 600,

//       headerClassName: "bold-header",
//     },
//   ];
//   const rows = formData.moduleSelected;
//   console.log(formData.moduleSelected);
//   console.log(ids);

//   const navigate = useNavigate();
//   // console.log(formData.moduleSelected);
//   // console.log(data);
//   function KeyList() {
//     const keys = Object.keys(data);
//   }

//   const onGroupButtonClick = useCallback(() => {
//     navigate("/preview");
//   }, [navigate]);

//   return (
//     <div className="desktop-9-resp">
//       <div className="bg-tomato h-[120px]">
//         <Button
//           className="cursor-pointer mt-10 ml-5"
//           sx={{ width: 330 }}
//           variant="contained"
//           color="primary"
//           onClick={() => {
//             navigate("/preview");
//           }}
//         >{`Go Back`}</Button>
//       </div>
//       <DataGrid rows={rows} columns={columns} getRowId={ids} />
//     </div>
//   );
// };

// export default Desktop15;

// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { DataGrid } from "@mui/x-data-grid";

// const Desktop15 = ({ formData, ids }) => {
//   const columns = [
//     {
//       field: "module",
//       headerName: "Module",
//       width: 600,
//     },
//   ];

//   const navigate = useNavigate();

//   const onGoBackClick = () => {
//     navigate("/preview");
//   };

//   return (
//     <div className="desktop-9-resp">
//       <div className="bg-tomato h-[120px]">
//         <Button
//           className="cursor-pointer mt-10 ml-5"
//           sx={{ width: 330 }}
//           variant="contained"
//           color="primary"
//           onClick={onGoBackClick}
//         >
//           Go Back
//         </Button>
//       </div>
//       <div style={{ height: 400, width: "100%" }}>
//         <DataGrid
//           rows={formData.moduleSelected}
//           columns={columns}
//           getRowId={(row) => row.id}
//         />
//       </div>
//     </div>
//   );
// };

// export default Desktop15;

import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Desktop15 = ({ formData }) => {
  const [searchText, setSearchText] = useState("");
  const columns = [
    {
      field: "value",
      headerName: "Module",
      width: 755,
      headerClassName: "bold-header",
    },
  ];

  const [selectedModulesWithIds, setSelectedModulesWithIds] = useState([]);
  const navigate = useNavigate();
  // Initialize an empty array

  const onGoBackClick = () => {
    navigate("/preview");
  };

  useEffect(() => {
    // Create the array of objects with id and value properties
    const updatedModulesWithIds = formData.moduleSelected.map(
      (module, index) => ({
        id: index + 1, // You can adjust the ID logic based on your requirements
        value: module,
      })
    );

    // setSelectedModulesWithIds(updatedModulesWithIds);

    setSelectedModulesWithIds(updatedModulesWithIds);

    // Update the modulesWithIds array
    // Push the updated objects
  }, []);

  // console.log(selectedModulesWithIds);

  return (
    <div className="desktop-9-resp">
      <div className="bg-tomato h-[120px]">
        <Button
          className="cursor-pointer mt-10 ml-5"
          sx={{ width: 330 }}
          variant="contained"
          color="primary"
          onClick={onGoBackClick}
        >
          Go Back
        </Button>
      </div>
      <div className="table">
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
          rows={selectedModulesWithIds}
          columns={columns}
          rowHeight={50}
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
        />
      </div>
    </div>
  );
};

export default Desktop15;
