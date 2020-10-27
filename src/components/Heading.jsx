import React from "react";

import downloadImage from './images/download.svg';

function Header(){
    return (
        <div className="heading">
            <h1>
                Altor Rider Ranking for the last week
            </h1>
            <button><img src={downloadImage} alt="download" style={{width:'50px', height:'50px'}}></img></button>
            <h2 className="storeName">Store Name</h2>
        </div>
    );

}

export default Header;