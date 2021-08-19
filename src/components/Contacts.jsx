import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ContactItem from "../helper/Contact";
import Footer from "./Footer";
import * as data from "../config/data";
import Heading from "../helper/Heading";

const Contacts = () => {

    return <div className = "container contact upper-margin" id = "contact">

        <ScrollAnimation animateIn = "fadeIn" duration = {1.5}>
            <Heading heading = "Contact Me" />
        </ScrollAnimation>
        <ScrollAnimation animateIn = "zoomIn" duration = {1.5}>
            <div className = "row logos">
                {data.contacts.map((contact) => {
                    return (
                        <ContactItem 
                            value = {contact.value}
                            image = {contact.image}
                        />
                    )
                })}
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn = "fadeIn" duration = {1.5}>
            <Footer />
        </ScrollAnimation>
    </div>
}

export default Contacts;