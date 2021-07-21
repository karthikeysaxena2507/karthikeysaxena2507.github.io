import React from "react";
import gototop from "./Images/top.png"

const Footer = () => {

    var date = new Date();
    var year = date.getFullYear();

    return (
    <footer class="center-text"> 
         <a href="#intro"> <div class="top expand"> <img src={gototop} alt="not found" /> </div> </a>
        <h4> Copyright {year} @ Karthikey Saxena </h4>
    </footer>
    );
}

export default Footer;