"use client";

import React from "react";
import styles from "./downloadPDF.module.css";

const DownloadPDF = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <>
      <div className={styles.cv}>
        <button onClick={downloadPDF}>Download CV</button>
      </div>
    </>
  );
};

export default DownloadPDF;
