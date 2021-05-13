import React from "react";
import facebook from "./Images/facebook.png";
import instagram from "./Images/instagram.png";
import git from "./Images/github.png";
import email from "./Images/gmail.png";
import twitter from "./Images/twitter.png";
import linkedin from "./Images/linkedin.png";
import gototop from "./Images/top.png"
import ScrollAnimation from 'react-animate-on-scroll';

function Contact() {

    var date = new Date();
    var year = date.getFullYear();

    return <div class="container contact upper-margin" id="contact">
        <ScrollAnimation animateIn="fadeIn" duration={1.5}>
         <div class="center-text"> <span class="bold"> Contact Me </span> </div>
         </ScrollAnimation>
         <ScrollAnimation animateIn="zoomIn" duration={1.5}>
         <div class="row logos">
            <div class="col-md-2 col-sm-4 center-text padding expand">
                <a href="mailto:karthikeysaxena@gmail.com" rel="noreferrer" target="_blank"> <img src={email} alt="not found" /> </a>
            </div>    
            <div class="col-md-2 col-sm-4 center-text padding expand">
                <a href="https://www.facebook.com/kartikey.saxena.71/" rel="noreferrer" target="_blank"> <img src={facebook} alt="not found" /> </a>
            </div>
            <div class="col-md-2 col-sm-4 center-text padding expand">
                <a href="https://www.instagram.com/karthikeysaxena/" rel="noreferrer" target="_blank"> <img src={instagram} alt="not found" /> </a>
            </div>    
            <div class="col-md-2 col-sm-4 center-text padding expand">
                <a href="https://github.com/karthikeysaxena2507" rel="noreferrer" target="_blank"> <img src={git} alt="not found" /> </a>  
            </div>    
            <div class="col-md-2 col-sm-4 center-text padding expand">
                <a href="https://www.linkedin.com/in/karthikey-saxena-69944b177/" rel="noreferrer" target="_blank"> <img src={linkedin} alt="not found" /> </a>
            </div>    
            <div class="col-md-2 col-sm-4 center-text padding expand">
                <a href="https://twitter.com/KarthikeySaxen1" rel="noreferrer" target="_blank"> <img src={twitter} alt="not found" /> </a>
            </div>    
         </div>
         </ScrollAnimation>
         <ScrollAnimation animateIn="fadeIn" duration={1.5}>
         <footer class="center-text"> 
         <a href="#intro"> <div class="top expand"> <img src={gototop} alt="not found" /> </div> </a>
            <h4> Copyright {year} @ Karthikey Saxena </h4>
        </footer>
        </ScrollAnimation>
    </div>
}

export default Contact;