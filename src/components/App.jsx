import React from "react";
import jsPDF from "jspdf";
import Header from "./Heading";
import Footer from "./Footer";
import RiderData from "./RiderData";

function App(){

    function downloadAsPdf(){

        const doc = document.getElementById("divToPrint");
        console.log(doc.offsetHeight);
        console.log(doc.offsetWidth);
        // console.log(doc.getAttribute("height"));
        var pdf = new jsPDF('l', 'pt', [1900,1980]);
            pdf.html(doc, {
                callback: function (pdf) {
                   pdf.save('DOC.pdf');
                   
                },
                x:10,
                y:10,
            });
       }
    return (
        <div>
            <button className="downloadButton" onClick={downloadAsPdf}>Print</button>
            <div id="divToPrint">
                <Header />
                <RiderData />
                <Footer />
            </div>
        </div>
    );
}

export default App;