// import React from "react";

// const png = "http://localhost:3000/img.png";
// const Download = () => {
//   const downloadFileAtUrl = (url) => {
//     console.log("download file");
//     const fileName = url.spilt("/").pop();
//     const aTag = document.createElement("a");
//     aTag.href = url;
//     aTag.setAttribute("download", fileName);
//     document.body.appendChild(aTag);
//     aTag.click();
//     aTag.remove();
//   };
//   return (
//     <div>
//       <button
//         onClick={() => {
//           downloadFileAtUrl(png);
//         }}
//       >
//         Download File
//       </button>
//     </div>
//   );
// };

// export default Download;

import React, { useEffect } from "react";
import axios from "axios";

function Download() {
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://127.0.0.1:8000/login/userreg/");
      console.log(res.data);
    }
    fetchData();
  }, []);
  const handleDownload = () => {
    // Import the local file using the require function
    const file = require("./img.png");

    // Create a Blob object from the file
    const blob = new Blob([file]);

    // Create a URL object from the Blob
    const url = URL.createObjectURL(blob);

    // Create a download link in the DOM
    const link = document.createElement("a");
    link.href = url;
    link.download = "img.png";

    link.addEventListener("click", () => {
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 100);
    });

    // Simulate a click event on the download link
    link.click();

    // Clean up the URL object
    // URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download File</button>
    </div>
  );
}
export default Download;
