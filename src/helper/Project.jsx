import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import link from "../Images/link.png";
import { data } from "../config/data";

const Project = (props) => {
    return (
    <ScrollAnimation animateIn = {props.animation} duration = {1.25}>
        <div class = "row">
            <div class = "col-md-6 padding center-text expand"> 
                <a 
                    href = {data.GITHUB_LINK + props.projectName} 
                    rel = "noreferrer" 
                    target="_blank" 
                > 
                <img 
                    className = "proj-img" 
                    style = {{width: "85%", height: "90%"}} 
                    src = {props.image} 
                    alt="not found"
                /> 
                </a> 
            </div>
            <div class = "col-md-6 padding center-text">
                <a 
                    href = {data.GITHUB_LINK + props.projectName} 
                    rel = "noreferrer" 
                    target = "_blank" 
                > 
                <h3> 
                {props.title} 
                <img 
                    src = {link} 
                    alt = "not found" 
                    className = "expand pl-2"
                /> 
                </h3> 
                </a>
                <p class = "proj-content">
                    {props.description}
                    <br />
                    {props.content}
                    <br />
                    <br />
                    <div class = "center-text">
                        <button 
                            type = "button" 
                            class = "btn btn-dark expand"> 
                            <a 
                                href = {data.SOCIALITES_LINK} 
                                target = "_blank" 
                                rel = "noreferrer" > 
                                {props.button} 
                            </a> 
                        </button>
                    </div>
                </p>
            </div>
        </div>
    </ScrollAnimation>
    );
}  

export default Project;