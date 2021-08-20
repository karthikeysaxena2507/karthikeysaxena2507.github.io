import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import link from "../Images/link.png";
import * as data from "../config/data";

const Project = (props) => {
    return (
        <div className = "row">
            <div className = "col-md-6 padding text-center expand"> 
                <a 
                    href = {data.links.GITHUB_LINK + props.projectName} 
                    rel = "noreferrer" 
                    target = "_blank" 
                > 
                
                <img 
                    className = "proj-img" 
                    style = {{width: "85%", height: "90%"}} 
                    src = {props.image} 
                    alt = "not found"
                /> 
                </a> 
            </div>
            <div className = "col-md-6 padding text-center">
                <ScrollAnimation animateIn = "fadeInRight" animateOnce = {true} duration = {1.5}>
                <a 
                    href = {data.links.GITHUB_LINK + props.projectName} 
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
                <p className = "proj-content">
                    {props.description}
                    <br />
                    {props.content}
                    <br />
                    <br />
                    <div className = "text-center">
                        <button 
                            type = "button" 
                            className = "btn btn-dark expand"> 
                            <a 
                                href = {props.projectLink} 
                                target = "_blank" 
                                rel = "noreferrer" > 
                                {props.button} 
                            </a> 
                        </button>
                    </div>
                </p>
                </ScrollAnimation>
            </div>
        </div>
    );
}  

export default Project;