import React,{ useEffect, useState } from "react";
import Photo from "../Images/photo.png";
import ScrollAnimation from 'react-animate-on-scroll';
import axios from "axios";
import { data } from "../config/data";

function Intro() {

    var [visit, setVisit] = useState(0);
    useEffect(() => {
        const fun = async() => {
            const res = await axios.get(data.COUNTJS_API);
            setVisit(res.data.value);
        }
        fun();
    },[]);

    return <div id = "intro">
    <div className = "container upper-margin">
        <div className = "center-text visit"> No. of Visits: {visit} </div>
        <div className = "row center-text">
            <div className = "col-md-6 padding" >
            <ScrollAnimation animateIn = "slideInLeft" duration = {1.5}>
                <img src={Photo} className = "photo" alt = "not found" />
            </ScrollAnimation>
            </div>
            <div class = "col-md-6 intro padding">
            <ScrollAnimation animateIn = "slideInRight" duration = {1.5}>
                <p> Hello There! </p>
                <p> I am <b> Karthikey Saxena </b>, an aspiring Software Developer </p>
                <div class = "center-text">
                    <a href = "#about"> 
                        <button 
                            type = "button" 
                            class = "btn btn-dark expand"> 
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
