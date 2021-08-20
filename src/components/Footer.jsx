import React from "react";
import gototop from "../Images/top.png"
import ScrollAnimation from 'react-animate-on-scroll';

const Footer = () => {

    var date = new Date();
    var year = date.getFullYear();

    return (
    <ScrollAnimation animateIn = "fadeIn" animateOnce = {true} duration = {1.5}>
    <footer class = "text-center"> 
        <a href = "#intro"> 
            <div class = "top expand"> 
                <img src = {gototop} alt = "not found" /> 
            </div> 
        </a>
        <h4> 
            Copyright {year} @ Karthikey Saxena 
        </h4>
    </footer>
    </ScrollAnimation>
    );
}

export default Footer;