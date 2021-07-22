import React from "react";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import git from "../Images/github.png";
import email from "../Images/gmail.png";
import twitter from "../Images/twitter.png";
import linkedin from "../Images/linkedin.png";
import ScrollAnimation from 'react-animate-on-scroll';
import ContactItem from "../helper/Contact";
import Footer from "./Footer";
import { data } from "../config/data";

const Contacts = () => {

    return <div class = "container contact upper-margin" id = "contact">
        <ScrollAnimation animateIn = "fadeIn" duration = {1.5}>
            <div class = "center-text"> 
                <span class = "bold"> Contact Me </span> 
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn = "zoomIn" duration = {1.5}>
            <div class = "row logos">
                <ContactItem 
                    value = {data.EMAIL_LINK}
                    image = {email}
                />
                <ContactItem 
                    value = {data.FACEBOOK_LINK}
                    image = {facebook}
                />
                <ContactItem 
                    value = {data.INSTAGRAM_LINK}
                    image = {instagram}
                />
                <ContactItem 
                    value = {data.GITHUB_LINK}
                    image = {git}
                />
                <ContactItem 
                    value = {data.LINKEDIN_LINK}
                    image = {linkedin}
                />
                <ContactItem 
                    value = {data.TWITTER_LINK}
                    image = {twitter}
                />
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn = "fadeIn" duration = {1.5}>
        <Footer />
        </ScrollAnimation>
    </div>
}

export default Contacts;