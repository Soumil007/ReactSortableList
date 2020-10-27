import React from "react";

function Footer(){
    let year = new Date().getFullYear();
    return(
        <footer>
            <p>
                copyright &copy; {year} Soumil Bose
            </p>
        </footer>
    );
}

export default Footer;