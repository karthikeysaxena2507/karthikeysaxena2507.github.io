import React from "react";
import Skill from "../helper/Skill";
import ScrollAnimation from 'react-animate-on-scroll';
import Title from "../helper/Title";
import Heading from "../helper/Heading";
import * as data from "../config/data";
import cf from "../Images/codeforces.png";
import link from "../Images/link.png";

const Skills = () => {
    return (
    <div className = "container skill upper-margin" id = "skills">

        <ScrollAnimation animateIn = "fadeIn">
            <Heading heading = "My Skills" />
        </ScrollAnimation>

        {/* LANGUAGES */}
        <ScrollAnimation animateIn = "fadeInLeft" duration = {1.25}>
        <Title name = "LANGUAGES" />
        <div className = "row">
            {data.languages.map((item) => {
                return (
                <div className = "col-sm-4 text-center padding">
                    <Skill image = {item.image} skill = {item.skill} />
                </div>);
            })}
        </div>
        </ScrollAnimation>

        {/* TECHNICAL */}
        <ScrollAnimation animateIn = "fadeInRight" duration = {1.25}>
        <Title name = "TECHNICAL" />
        <div className = "row">
            {data.technical.map((item) => {
                return (
                <div className = "col-sm-4 text-center padding">
                    <Skill image = {item.image} skill = {item.skill} />
                </div>);
            })}
        </div>
        </ScrollAnimation>

        {/* TECHNOLOGIES */}
        <ScrollAnimation animateIn = "fadeInLeft" duration = {1.25}>
        <Title name = "TECHNOLOGIES" />
        <div className = "row">
            {data.technologies.map((item) => {
                return (
                <div className = "col-sm-4 text-center padding">
                    <Skill image = {item.image} skill = {item.skill} />
                </div>);
            })}
        </div>
        <div className = "row">
            {data.devops.map((item) => {
                return (
                <div className = "col-sm-4 text-center padding">
                    <Skill image = {item.image} skill = {item.skill} />
                </div>);
            })}
        </div>
        </ScrollAnimation>

        {/* DATABASE */}
        <ScrollAnimation animateIn = "fadeInRight" duration = {1.25}>
        <Title name = "DATABASE" />
        <div className = "row">
            {data.database.map((item) => {
                return (
                <div className = "col-sm-4 text-center padding">
                    <Skill image = {item.image} skill = {item.skill} />
                </div>);
            })}
        </div>
        </ScrollAnimation>

        {/* CP */}
        <ScrollAnimation animateIn = "fadeInLeft" duration = {1.25}>
        <Title name = "CP" />
        <div className = "row">
            <div class = "col-sm-12 text-center padding">
                <a 
                    href = {data.links.CODEFORCES_LINK}
                    rel = "noreferrer" 
                    target = "_blank"> 
                <img 
                    src = {cf} 
                    alt = "not found" 
                    className = "expand" 
                /> </a>
                <h4 className = "less-padding expand"> 
                    <a 
                        href = {data.links.CODEFORCES_LINK}
                        rel = "noreferrer" 
                        target = "_blank" > 
                        CodeForces  
                        <img src = {link} alt = "not found" className = "expand pl-2" /> 
                    </a> 
                </h4>
            </div>
        </div>
        </ScrollAnimation>
    </div>);
}

export default Skills;
