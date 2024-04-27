import React from "react";
import Photo from "../Images/photo.png";
import ScrollAnimation from 'react-animate-on-scroll';
import * as data from "../config/data";

function Intro() {

    return <div id = "intro">
    <div className = "container upper-margin">
        <div className = "row text-center">
            <div className = "col-md-6 padding" >
            <ScrollAnimation animateOnce = {true} animateIn = "slideInLeft" duration = {1.5}>
                <img src = {Photo} className = "photo" alt = "not found" />
            </ScrollAnimation>
            </div>
            <div class = "col-md-6 intro padding">
            <ScrollAnimation animateOnce = {true} animateIn = "slideInRight" duration = {1.5}>
                <p>{data.startingData}</p>
                <div className = "text-center">
                    <a href = "#about"> 
                        <button 
                            type = "button" 
                            className = "btn btn-dark expand"> 
                        Know More... 
                        </button> 
                    </a>
               </div>
            </ScrollAnimation>
            </div>
        </div>
    </div>
</div>
}

export default Intro;
