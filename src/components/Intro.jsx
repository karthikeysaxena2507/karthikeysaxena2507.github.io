import React,{ useEffect, useState } from "react";
import Photo from "../Images/photo.png";
import ScrollAnimation from 'react-animate-on-scroll';
import axios from "axios";
import * as data from "../config/data";

function Intro() {

    var [visit, setVisit] = useState(0);
    useEffect(() => {
        const fun = async() => {
            const res = await axios.get(data.links.COUNTJS_API);
            setVisit(res.data.value);
        }
        fun();
    },[]);

    return <div id = "intro">
    <div className = "container upper-margin">
        <div className = "text-center visit"> No. of Visits: {visit} </div>
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
