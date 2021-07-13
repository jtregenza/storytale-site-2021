import React from "react";
import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";
import styles from './layout.module.css'
const GeneratePdf = ({ html }) => {
    const generatePdf = () => {
        const doc = new jsPDF();
        let split = doc.splitTextToSize(document.getElementById("text").innerText, 200);
        console.log(split);
        // let image = document.getElementById("image").getAttribute('src');
        // doc.text(document.querySelector(".content > h1").innerHTML, 75, 5);
        // doc.addImage(image, 70, 7, 60, 60);
        doc.setFontSize(16);
        doc.text(split, 5, 10);
        var pdfName = 'storytale.pdf';
        doc.save(pdfName);
        
    };

    return (<div className="button-container">
      <button onClick={generatePdf} className={styles.cta}>
        Tell your table...
      </button>
    </div>);
};
export default GeneratePdf;
