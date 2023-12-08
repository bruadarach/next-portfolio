"use client";

import styles from "./downloadPDF.module.css";
import { cv } from "@/utils/data";

const DownloadPDF = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = "CV_SujeongJi.pdf";
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
