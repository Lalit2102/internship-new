// // // ///working table DONT DELETE

// // // import React, { useState, useEffect, useRef } from "react";
// // // import data from "./data.json";

// // // function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
// // //   const totalPages = Math.ceil(totalItems / itemsPerPage);

// // //   const handlePageChange = (page) => {
// // //     if (page >= 1 && page <= totalPages) {
// // //       onPageChange(page);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex pagination justify-center items-center">
// // //       <div className="flex gap-2 my-5">
// // //         <button onClick={() => handlePageChange(currentPage - 1)}>
// // //           Previous
// // //         </button>

// // //         <span className="text-xl m-auto">
// // //           Page {currentPage} of {totalPages}
// // //         </span>

// // //         <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function TableComponent({ formData, setFormData }) {
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const itemsPerPage = 15;

// // //   const handleCheckboxChange = (key) => {
// // //     const isValueSelected = formData.moduleSelected.includes(key);
// // //     let updatedModuleSelected;

// // //     if (isValueSelected) {
// // //       updatedModuleSelected = formData.moduleSelected.filter(
// // //         (value) => value !== key
// // //       );
// // //     } else {
// // //       updatedModuleSelected = [...formData.moduleSelected, key];
// // //     }

// // //     setFormData({
// // //       ...formData,
// // //       moduleSelected: updatedModuleSelected,
// // //     });
// // //   };

// // //   const handleSearch = (event) => {
// // //     setSearchTerm(event.target.value);
// // //     setCurrentPage(1);
// // //   };

// // //   const filteredValues = Object.keys(data).filter((key) =>
// // //     key.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // //   const endIndex = startIndex + itemsPerPage;
// // //   const paginatedValues = filteredValues.slice(startIndex, endIndex);

// // //   const renderedRows = paginatedValues.map((key) => (
// // //     <tr key={key}>
// // //       <td className="border border-black p-2">{key}</td>
// // //       <td className="border border-black p-2 text-center">
// // //         <input
// // //           type="checkbox"
// // //           className="mx-auto scale-150"
// // //           checked={formData.moduleSelected.includes(key)}
// // //           onChange={() => handleCheckboxChange(key)}
// // //         />
// // //       </td>
// // //     </tr>
// // //   ));

// // //   return (
// // //     <div className="mt-5">
// // //       <input
// // //         type="text"
// // //         placeholder="Search..."
// // //         value={searchTerm}
// // //         onChange={handleSearch}
// // //         className="border-2 border-black w-96 mx-auto p-3 mb-5 text-center"
// // //       />
// // //       <table className="border-collapse border border-black mx-auto">
// // //         <thead>
// // //           <tr>
// // //             <th className="border border-black p-2 text-6xl text-center">
// // //               Module Name
// // //             </th>
// // //             <th className="border border-black p-2 text-6xl text-center">
// // //               Status
// // //             </th>
// // //           </tr>
// // //         </thead>
// // //         <tbody className="text-xl">{renderedRows}</tbody>
// // //       </table>
// // //       <Pagination
// // //         currentPage={currentPage}
// // //         itemsPerPage={itemsPerPage}
// // //         totalItems={filteredValues.length}
// // //         onPageChange={setCurrentPage}
// // //       />
// // //     </div>
// // //   );
// // // }

// // // export default TableComponent;

// // import React, { useState, useEffect, useRef } from "react";
// // import data from "./data.json";

// // function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
// //   const totalPages = Math.ceil(totalItems / itemsPerPage);

// //   const handlePageChange = (page) => {
// //     if (page >= 1 && page <= totalPages) {
// //       onPageChange(page);
// //     }
// //   };

// //   return (
// //     <div className="flex pagination justify-center items-center">
// //       <div className="flex gap-2 my-5">
// //         <button onClick={() => handlePageChange(currentPage - 1)}>
// //           Previous
// //         </button>

// //         <span className="text-xl m-auto">
// //           Page {currentPage} of {totalPages}
// //         </span>

// //         <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
// //       </div>
// //     </div>
// //   );
// // }

// // function TableComponent({ formData, setFormData }) {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 16;

// //   const handleCheckboxChange = (key) => {
// //     const isValueSelected = formData.moduleSelected.includes(key);
// //     let updatedModuleSelected;

// //     if (isValueSelected) {
// //       updatedModuleSelected = formData.moduleSelected.filter(
// //         (value) => value !== key
// //       );
// //     } else {
// //       updatedModuleSelected = [...formData.moduleSelected, key];
// //     }

// //     setFormData({
// //       ...formData,
// //       moduleSelected: updatedModuleSelected,
// //     });
// //   };

// //   const handleSearch = (event) => {
// //     setSearchTerm(event.target.value);
// //     setCurrentPage(1);
// //   };

// //   const filteredValues = Object.keys(data).filter((key) =>
// //     key.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const startIndex = (currentPage - 1) * itemsPerPage;
// //   const endIndex = startIndex + itemsPerPage;
// //   const paginatedValues = filteredValues.slice(startIndex, endIndex);

// //   const renderedRows = [];
// //   for (let i = 0; i < paginatedValues.length; i += 2) {
// //     const key1 = paginatedValues[i];
// //     const key2 = paginatedValues[i + 1];

// //     const row = (
// //       <tr key={key1}>
// //         <td className="border border-black p-2">{key1}</td>
// //         <td className="border border-black p-2 text-center">
// //           <input
// //             type="checkbox"
// //             className="mx-auto scale-150"
// //             checked={formData.moduleSelected.includes(key1)}
// //             onChange={() => handleCheckboxChange(key1)}
// //           />
// //         </td>
// //         {key2 && (
// //           <>
// //             <td className="border border-black p-2">{key2}</td>
// //             <td className="border border-black p-2 text-center">
// //               <input
// //                 type="checkbox"
// //                 className="mx-auto scale-150"
// //                 checked={formData.moduleSelected.includes(key2)}
// //                 onChange={() => handleCheckboxChange(key2)}
// //               />
// //             </td>
// //           </>
// //         )}
// //       </tr>
// //     );

// //     renderedRows.push(row);
// //   }

// //   return (
// //     <div className="mt-5">
// //       <input
// //         type="text"
// //         placeholder="Search..."
// //         value={searchTerm}
// //         onChange={handleSearch}
// //         className="border-2 border-black w-96 mx-auto p-3 mb-5 text-center"
// //       />
// //       <table className="border-collapse border border-black ml-10">
// //         <thead>
// //           <tr>
// //             <th className="border border-black p-2 text-6xl text-center">
// //               Module Name
// //             </th>
// //             <th className="border border-black p-2 text-6xl text-center">
// //               Status
// //             </th>
// //             <th className="border border-black p-2 text-6xl text-center">
// //               Module Name
// //             </th>
// //             <th className="border border-black p-2 text-6xl text-center">
// //               Status
// //             </th>
// //           </tr>
// //         </thead>
// //         <tbody className="text-xl">{renderedRows}</tbody>
// //       </table>
// //       <Pagination
// //         currentPage={currentPage}
// //         itemsPerPage={itemsPerPage}
// //         totalItems={filteredValues.length}
// //         onPageChange={setCurrentPage}
// //       />
// //     </div>
// //   );
// // }

// // export default TableComponent;

// // import React, { useState, useEffect, useRef } from "react";
// // import data from "./data.json";

// // function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
// //   const totalPages = Math.ceil(totalItems / itemsPerPage);

// //   const handlePageChange = (page) => {
// //     if (page >= 1 && page <= totalPages) {
// //       onPageChange(page);
// //     }
// //   };

// //   return (
// //     <div className="flex pagination justify-center items-center">
// //       <div className="flex gap-2 my-5">
// //         <button onClick={() => handlePageChange(currentPage - 1)}>
// //           Previous
// //         </button>

// //         <span className="text-xl m-auto">
// //           Page {currentPage} of {totalPages}
// //         </span>

// //         <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
// //       </div>
// //     </div>
// //   );
// // }

// // function TableComponent({ formData, setFormData }) {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 16;

// //   const handleCheckboxChange = (key) => {
// //     const isValueSelected = formData.moduleSelected.includes(key);
// //     let updatedModuleSelected;

// //     if (isValueSelected) {
// //       updatedModuleSelected = formData.moduleSelected.filter(
// //         (value) => value !== key
// //       );
// //     } else {
// //       updatedModuleSelected = [...formData.moduleSelected, key];
// //     }

// //     setFormData({
// //       ...formData,
// //       moduleSelected: updatedModuleSelected,
// //     });
// //   };

// //   const handleSearch = (event) => {
// //     setSearchTerm(event.target.value);
// //     setCurrentPage(1);
// //   };

// //   const filteredValues = Object.keys(data).filter((key) =>
// //     key.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const startIndex = (currentPage - 1) * itemsPerPage;
// //   const endIndex = startIndex + itemsPerPage;
// //   const paginatedValues = filteredValues.slice(startIndex, endIndex);

// //   const renderedRows = [];
// //   for (let i = 0; i < paginatedValues.length; i += 2) {
// //     const key1 = paginatedValues[i];
// //     const key2 = paginatedValues[i + 1];

// //     const row = (
// //       <tr key={key1}>
// //         <td className="border border-black p-2">{key1}</td>
// //         <td className="border border-black p-2 text-center">
// //           <input
// //             type="checkbox"
// //             className="mx-auto scale-150"
// //             checked={formData.moduleSelected.includes(key1)}
// //             onChange={() => handleCheckboxChange(key1)}
// //           />
// //         </td>
// //         {key2 && (
// //           <>
// //             <td className="w-10"></td> {/* Space between columns */}
// //             <td className="border border-black p-2">{key2}</td>
// //             <td className="border border-black p-2 text-center">
// //               <input
// //                 type="checkbox"
// //                 className="mx-auto scale-150"
// //                 checked={formData.moduleSelected.includes(key2)}
// //                 onChange={() => handleCheckboxChange(key2)}
// //               />
// //             </td>
// //           </>
// //         )}
// //       </tr>
// //     );

// //     renderedRows.push(row);
// //   }

// //   return (
// //     <div className="mt-5 flex justify-center">
// //       <div>
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           value={searchTerm}
// //           onChange={handleSearch}
// //           className="border-2 border-black w-96 mx-auto p-3 mb-10 text-center grid justify-center"
// //         />
// //         <table className="border-collapse border border-black">
// //           <thead>
// //             <tr>
// //               <th className="border border-black p-2 text-6xl text-center">
// //                 Module Name
// //               </th>
// //               <th className="border border-black p-2 text-6xl text-center">
// //                 Status
// //               </th>
// //               <th className="w-10"></th> {/* Space between columns */}
// //               <th className="border border-black p-2 text-6xl text-center">
// //                 Module Name
// //               </th>
// //               <th className="border border-black p-2 text-6xl text-center">
// //                 Status
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody className="text-xl">{renderedRows}</tbody>
// //         </table>
// //         <Pagination
// //           currentPage={currentPage}
// //           itemsPerPage={itemsPerPage}
// //           totalItems={filteredValues.length}
// //           onPageChange={setCurrentPage}
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // export default TableComponent;

// // import React, { useState, useEffect, useRef } from "react";
// // import data from "./data.json";

// // function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
// //   const totalPages = Math.ceil(totalItems / itemsPerPage);

// //   const handlePageChange = (page) => {
// //     if (page >= 1 && page <= totalPages) {
// //       onPageChange(page);
// //     }
// //   };

// //   return (
// //     <div className="flex pagination justify-center items-center">
// //       <div className="flex gap-2 my-5">
// //         <button onClick={() => handlePageChange(currentPage - 1)}>
// //           Previous
// //         </button>

// //         <span className="text-xl m-auto">
// //           Page {currentPage} of {totalPages}
// //         </span>

// //         <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function TableComponent({ formData, setFormData }) {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 16;

// //   const handleCheckboxChange = (key) => {
// //     const isValueSelected = formData.moduleSelected.includes(key);
// //     let updatedModuleSelected;

// //     if (isValueSelected) {
// //       updatedModuleSelected = formData.moduleSelected.filter(
// //         (value) => value !== key
// //       );
// //     } else {
// //       updatedModuleSelected = [...formData.moduleSelected, key];
// //     }

// //     setFormData({
// //       ...formData,
// //       moduleSelected: updatedModuleSelected,
// //     });
// //   };

// //   const handleSearch = (event) => {
// //     setSearchTerm(event.target.value);
// //     setCurrentPage(1);
// //   };

// //   const filteredValues = Object.keys(data).filter((key) =>
// //     key.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const startIndex = (currentPage - 1) * itemsPerPage;
// //   const endIndex = startIndex + itemsPerPage;
// //   const paginatedValues = filteredValues.slice(startIndex, endIndex);

// //   const renderedRows = [];
// //   for (let i = 0; i < paginatedValues.length; i += 2) {
// //     const key1 = paginatedValues[i];
// //     const key2 = paginatedValues[i + 1];

// //     const row = (
// //       <tr key={key1}>
// //         <td className="border border-black p-2 module-column">{key1}</td>
// //         <td className="border border-black p-2 text-center checkbox-column">
// //           <input
// //             type="checkbox"
// //             className="mx-auto scale-150"
// //             checked={formData.moduleSelected.includes(key1)}
// //             onChange={() => handleCheckboxChange(key1)}
// //           />
// //         </td>
// //         {key2 && (
// //           <React.Fragment>
// //             <td className="w-10"></td>
// //             <td className="border border-black p-2 module-column">{key2}</td>
// //             <td className="border border-black p-2 text-center checkbox-column">
// //               <input
// //                 type="checkbox"
// //                 className="mx-auto scale-150"
// //                 checked={formData.moduleSelected.includes(key2)}
// //                 onChange={() => handleCheckboxChange(key2)}
// //               />
// //             </td>
// //           </React.Fragment>
// //         )}
// //       </tr>
// //     );

// //     renderedRows.push(row);
// //   }

// //   return (
// //     <div className="mt-5 flex justify-center">
// //       <div>
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           value={searchTerm}
// //           onChange={handleSearch}
// //           className="w-96 mx-auto p-3 mb-10 text-center grid justify-center text-xl rounded-3xl border-2 border-tomato"
// //         />
// //         <table className="border-collapse border-4 border-black mx-auto">
// //           <thead>
// //             <tr>
// //               <th className="border border-black p-2 text-6xl text-center">
// //                 Module Name
// //               </th>
// //               <th className="border border-black p-2 text-6xl text-center">
// //                 Status
// //               </th>
// //               <th className="w-20"></th>
// //               <th className="border border-black p-2 text-6xl text-center">
// //                 Module Name
// //               </th>
// //               <th className="border border-black p-2 text-6xl text-center">
// //                 Status
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody className="text-xl">{renderedRows}</tbody>
// //         </table>
// //         <Pagination
// //           currentPage={currentPage}
// //           itemsPerPage={itemsPerPage}
// //           totalItems={filteredValues.length}
// //           onPageChange={setCurrentPage}
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect, useRef } from "react";
// import data from "./data.json";

// function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       onPageChange(page);
//     }
//   };

//   return (
//     <div className="flex pagination justify-center items-center">
//       <div className="flex gap-2 my-5">
//         <button onClick={() => handlePageChange(currentPage - 1)}>
//           Previous
//         </button>

//         <span className="text-xl m-auto">
//           Page {currentPage} of {totalPages}
//         </span>

//         <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default function TableComponent({ formData, setFormData }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 16;

//   const handleCheckboxChange = (key) => {
//     const isValueSelected = formData.moduleSelected.includes(key);
//     let updatedModuleSelected;

//     if (isValueSelected) {
//       updatedModuleSelected = formData.moduleSelected.filter(
//         (value) => value !== key
//       );
//     } else {
//       updatedModuleSelected = [...formData.moduleSelected, key];
//     }

//     setFormData({
//       ...formData,
//       moduleSelected: updatedModuleSelected,
//     });
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setCurrentPage(1);
//   };

//   const filteredValues = Object.keys(data).filter((key) =>
//     key.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedFilteredValues = filteredValues.sort((a, b) =>
//     a.localeCompare(b, undefined, { sensitivity: "base" })
//   );

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedValues = sortedFilteredValues.slice(startIndex, endIndex);

//   const renderedRows = [];
//   for (let i = 0; i < paginatedValues.length; i += 2) {
//     const key1 = paginatedValues[i];
//     const key2 = paginatedValues[i + 1];

//     const row = (
//       <tr key={key1}>
//         <td className="border border-black p-2 module-column">{key1}</td>
//         <td className="border border-black p-2 text-center checkbox-column">
//           <input
//             type="checkbox"
//             className="mx-auto scale-150"
//             checked={formData.moduleSelected.includes(key1)}
//             onChange={() => handleCheckboxChange(key1)}
//           />
//         </td>
//         {key2 && (
//           <React.Fragment>
//             <td className="w-10"></td>
//             <td className="border border-black p-2 module-column">{key2}</td>
//             <td className="border border-black p-2 text-center checkbox-column">
//               <input
//                 type="checkbox"
//                 className="mx-auto scale-150"
//                 checked={formData.moduleSelected.includes(key2)}
//                 onChange={() => handleCheckboxChange(key2)}
//               />
//             </td>
//           </React.Fragment>
//         )}
//       </tr>
//     );

//     renderedRows.push(row);
//   }
//   return (
//     <div className="mt-5 flex justify-center">
//       <div>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={handleSearch}
//           className="w-96 mx-auto p-3 mb-10 text-center grid justify-center text-xl rounded-3xl border-2 border-tomato"
//         />
//         <table className="border-collapse border-4 border-black mx-auto">
//           <thead>
//             <tr>
//               <th className="border border-black p-2 text-6xl text-center">
//                 Module Name
//               </th>
//               <th className="border border-black p-2 text-6xl text-center">
//                 Status
//               </th>
//               <th className="w-20"></th>
//               <th className="border border-black p-2 text-6xl text-center">
//                 Module Name
//               </th>
//               <th className="border border-black p-2 text-6xl text-center">
//                 Status
//               </th>
//             </tr>
//           </thead>
//           <tbody className="text-xl">
//             <tr>
//               <td className="italic font-bold">Select All</td>
//               <td className="border border-black p-2 text-6xl text-center">
//                 <input
//                   type="checkbox"
//                   checked={
//                     formData.moduleSelected.length ===
//                     sortedFilteredValues.length
//                   }
//                   onChange={() => {
//                     if (
//                       formData.moduleSelected.length ===
//                       sortedFilteredValues.length
//                     ) {
//                       setFormData({ ...formData, moduleSelected: [] });
//                     } else {
//                       setFormData({
//                         ...formData,
//                         moduleSelected: [...sortedFilteredValues],
//                       });
//                     }
//                   }}
//                 />
//               </td>
//               <td className="border border-black p-2 text-6xl text-center">
//                 &nbsp;
//               </td>
//               <td className="w-20"></td>
//               <td className="border border-black p-2 text-6xl text-center">
//                 &nbsp;
//               </td>
//               <td className="border border-black p-2 text-6xl text-center">
//                 &nbsp;
//               </td>
//             </tr>
//             {renderedRows}
//           </tbody>
//         </table>
//         <Pagination
//           currentPage={currentPage}
//           itemsPerPage={itemsPerPage}
//           totalItems={sortedFilteredValues.length}
//           onPageChange={setCurrentPage}
//         />
//       </div>
//     </div>
//   );
// }import * as React from "react";

// //working MUI table
// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import data from "./newData.json";

// export default function TableComponent({ formData, setFormData }) {
//   const rows = data;
//   const columns = [
//     { field: "id", headerName: "ID", width: 150 },
//     { field: "module", headerName: "Module", width: 150 },
//   ];

//   const [selectedRowIds, setSelectedRowIds] = React.useState([]);

//   const handleRowSelectionModelChange = (selectionModel) => {
//     setSelectedRowIds(selectionModel);
//     // Update formData.moduleSelected using selectionModel
//     const selectedModules = selectionModel.map((id) => {
//       const selectedRow = rows.find((row) => row.id === id);
//       return selectedRow ? selectedRow.module : null;
//     });
//     setFormData({
//       ...formData,
//       moduleSelected: selectedModules.filter((module) => module !== null),
//     });
//   };

//   const handlePageChange = (params) => {
//     // When the page changes, restore the selected row IDs for the current page
//     const selectedIdsForPage = selectedRowIds.filter((id) =>
//       rows.map((row) => row.id).includes(id)
//     );
//     params.api.setSelectionModel(selectedIdsForPage);
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         checkboxSelection
//         onRowSelectionModelChange={handleRowSelectionModelChange}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// }import React from 'react';

import data from "./newData.json";
import { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function TableComponent({ formData, setFormData, ids, setIds }) {
  const [searchText, setSearchText] = useState("");
  const rows = data;
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      headerClassName: "bold-header",
    },
    {
      field: "module",
      headerName: "Module",
      width: 555,
      headerClassName: "bold-header",
    },
  ];

  const handleRowSelectionModelChange = (selectionModel) => {
    // console.log("Selection Model:", selectionModel);

    setIds(selectionModel); // Update the ids state

    const selectedModules = selectionModel.map((id) => {
      const selectedRow = rows.find((row) => row.id === id);
      return selectedRow ? selectedRow.module : null;
    });

    const handleSearchTextChange = (event) => {
      setSearchText(event.target.value);
    };

    // const filteredRows = rows.filter((row) =>
    //   row.value.toLowerCase().includes(searchText.toLowerCase())
    // );

    // console.log("Selected Modules:", selectedModules);

    setFormData({
      ...formData,
      moduleSelected: selectedModules.filter((module) => module !== null),
    });
  };

  const handlePageChange = (params) => {
    const selectedIdsForPage = ids.filter((id) =>
      rows.map((row) => row.id).includes(id)
    );

    // console.log(selectedIdsForPage);
  };

  // console.log("Render - Selected IDs:", ids);

  return (
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
        rows={rows}
        columns={columns}
        checkboxSelection
        onRowSelectionModelChange={handleRowSelectionModelChange}
        onPageChange={handlePageChange}
        rowSelectionModel={ids} // Pass the ids array as selectionModel
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
        rowsPerPageOptions={[5, 10, 15]}
        rowsPerPage={5}
      />
    </div>
  );
}
