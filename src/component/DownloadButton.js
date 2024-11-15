import React from "react";
import './DownloadButton.css';

const DownloadButton = ({ pdfUrl, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="downloadBtn" onClick={handleDownload} title="resumeDownload">
      Download Resume
    </button>
  );
};

export default DownloadButton;