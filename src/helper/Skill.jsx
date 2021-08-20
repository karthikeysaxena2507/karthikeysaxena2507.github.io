import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const Skill = (props) => {
    return (
        <ScrollAnimation animateIn = {props.animation} animateOnce = {true} duration = {1.5}>
        <div>
            <img src = {props.image} alt = "not found" />
            <h4 className = "less-padding"> {props.skill} </h4>
        </div>
        </ScrollAnimation>
    );
}

export default Skill;