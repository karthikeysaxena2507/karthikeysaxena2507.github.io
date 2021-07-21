import React from "react";
import facebook from "./Images/facebook.png";
import instagram from "./Images/instagram.png";
import git from "./Images/github.png";
import email from "./Images/gmail.png";
import twitter from "./Images/twitter.png";
import linkedin from "./Images/linkedin.png";
import ScrollAnimation from 'react-animate-on-scroll';
import ContactItem from "../helper/ContactItem";
import Footer from "./Footer";

function Contact() {

    return <div class="container contact upper-margin" id="contact">
        <ScrollAnimation animateIn="fadeIn" duration={1.5}>
            <div class="center-text"> <span class="bold"> Contact Me </span> </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" duration={1.5}>
            <div class="row logos">
                <ContactItem 
                    value = "mailto:karthikeysaxena@gmail.com"
                    image = {email}
                />
                <ContactItem 
                    value = "https://www.facebook.com/kartikey.saxena.71/"
                    image = {facebook}
                />
                <ContactItem 
                    value = "https://www.instagram.com/karthikeysaxena/"
                    image = {instagram}
                />
                <ContactItem 
                    value = "https://github.com/karthikeysaxena2507"
                    image = {git}
                />
                <ContactItem 
                    value = "https://www.linkedin.com/in/karthikey-saxena-69944b177/"
                    image = {linkedin}
                />
                <ContactItem 
                    value = "https://twitter.com/KarthikeySaxen1"
                    image = {twitter}
                />
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={1.5}>
        <Footer />
        </ScrollAnimation>
    </div>
}

export default Contact;