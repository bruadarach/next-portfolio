"use client";

import styles from "./downloadPDF.module.css";

const DownloadPDF = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1GraHoPXi2gXOOGG49VApIWAtdXfHyd4-/view?usp=sharing";
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
