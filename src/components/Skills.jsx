import React from "react";
import Skill from "../helper/Skill";
import ScrollAnimation from 'react-animate-on-scroll';
import Title from "../helper/Title";
import Heading from "../helper/Heading";
import * as data from "../config/data";
import cf from "../Images/codeforces.png";
import lc from "../Images/leetcode.png";
import link from "../Images/link.png";

const Skills = () => {
    return (
    <div className = "container skill upper-margin" id = "skills">
        <Heading heading = "My Skills" />
        {/* LANGUAGES */}
        <Title name = "LANGUAGES" />
        <div className = "row">
            {data.languages.map((item) => {
                return (
                <div className = "col-sm-4 text-center padding">
                    <Skill 
                        image = {item.image} 
                        skill = {item.skill} 
                        animation = {item.animation}
                    />
                </div>);
            })}
        </div>

        {/* TECHNICAL */}
        <Title name = "TECHNICAL" />
        <div className = "row">
            {data.technical.map((item) => {
                return (
                <div className = "col-sm-4 text-center padding">
                    <Skill 
                        image = {item.image} 
                        skill = {item.skill} 
                        animation = {item.animation}
                    />
                </div>);
            })}
        </div>

        {/* TECHNOLOGIES */}
        <Title name = "TECHNOLOGIES" />
        <div className = "row">
            {data.technologies.map((item) => {
                return (
                <div className = "col-sm-4 text-center padding">
                    <Skill 
                        image = {item.image} 
                        skill = {item.skill} 
                        animation = {item.animation}
                    />
                </div>);
            })}
        </div>
        <div className = "row">
            {data.devops.map((item) => {
                return (
                <div className = "col-sm-4 text-center padding">
                    <Skill 
                        image = {item.image} 
                        skill = {item.skill} 
                        animation = {item.animation}
                    />
                </div>);
            })}
        </div>

        {/* DATABASE */}
        <Title name = "DATABASE" />
        <div className = "row">
            {data.database.map((item) => {
                return (
                <div className = "col-sm-4 text-center padding">
                    <Skill 
                        image = {item.image} 
                        skill = {item.skill} 
                        animation = {item.animation}
                    />
                </div>);
            })}
        </div>

        {/* CP */}
        <ScrollAnimation animateIn = "fadeIn" duration = {1.5} animateOnce = {true}>
        <Title name = "CP" />
        <div className = "row">
            <div class = "col-sm-6 text-center padding">
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
            <div class = "col-sm-6 text-center padding">
                <a 
                    href = {data.links.LEETCODE_LINK}
                    rel = "noreferrer" 
                    target = "_blank"> 
                <img 
                    src = {lc} 
                    alt = "not found" 
                    className = "expand" 
                /> </a>
                <h4 className = "less-padding expand"> 
                    <a 
                        href = {data.links.LEETCODE_LINK}
                        rel = "noreferrer" 
                        target = "_blank" > 
                        Leetcode  
                        <img src = {link} alt = "not found" className = "expand pl-2" /> 
                    </a> 
                </h4>
            </div>
        </div>
        </ScrollAnimation>
    </div>);
}

export default Skills;
