import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const Heading = (props) => {

    return (
    <ScrollAnimation animateIn = "fadeIn" animateOnce = {true} duration = {1.5}>
        <div class = "text-center padding">
            <span class = "bold"> {props.heading} </span> 
        </div>
    </ScrollAnimation>);
    
}

export default Heading;