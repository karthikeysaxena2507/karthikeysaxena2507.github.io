/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const Experience = (props) => {

    return (
        <ScrollAnimation animateIn = {props.imageAnimation} animateOnce = {true} duration = {1.5}>
        <div 
            className = "text-center mr-2 pr-3 exp expand" 
            onClick = {() => window.location = props.link}
        >
            <div className = "text-center">
                <img 
                    className = "proj-img" 
                    style = {{width: "80%", height: "80%"}} 
                    src = {props.image} 
                    alt = "not found"
                /> 
            </div>
            <div className = "mt-3" style = {{fontSize: "larger"}}>
                {props.name}
            </div>
            <div className = "mt-3">
                {props.position}
            </div>
        </div>
        </ScrollAnimation>
    )

}

export default Experience;