import React from "react";
import Cpp from "../Images/cpp.png";
import JavaScript from "../Images/javascript.png";
import node from "../Images/node.png";
import react from "../Images/react.png";
import git from "../Images/git.png";
import sql from "../Images/mysql.png";
import java from "../Images/java.png";
import mongodb from "../Images/mongodb.png";
import os from "../Images/os.png";
import spring from "../Images/spring.png";
import { data } from "../config/data";
import ds from "../Images/datastructures.png";
import oop from "../Images/oops.png"
import cf from "../Images/codeforces.png";
import docker from "../Images/docker.png";
import kubernetes from "../Images/kubernetes.png";
import oracle from "../Images/oracle.png";
import link from "../Images/link.png";
import Skill from "../helper/Skill";
import ScrollAnimation from 'react-animate-on-scroll';
import Title from "../helper/Title";

const Skills = () => {
    return (
    <div class="container skill upper-margin" id="skills">

        <ScrollAnimation animateIn = "fadeIn">
            <div class = "center-text padding"> 
                <span class = "bold"> My Skills </span> 
            </div>
        </ScrollAnimation>

        {/* LANGUAGES */}
        <ScrollAnimation animateIn = "fadeInLeft" duration = {1.25}>
        <Title name = "LANGUAGES" />
        <div class="row">
            <div className = "col-sm-4 center-text padding">
                <Skill image = {Cpp} skill = "C/C++" />
            </div>
            <div className = "col-sm-4 center-text padding">
                <Skill image = {java} skill = "Java" />
            </div>
            <div className = "col-sm-4 center-text padding">
                <Skill image = {JavaScript} skill = "JavaScript" />
            </div>
        </div>
        </ScrollAnimation>

        {/* TECHNICAL */}
        <ScrollAnimation animateIn = "fadeInRight" duration = {1.25}>
        <Title name = "TECHNICAL" />
        <div class = "row">
            <div className = "col-sm-4 center-text padding">
                <Skill image = {ds} skill = "DSA" />
            </div>
            <div className = "col-sm-4 center-text padding">
                <Skill image = {oop} skill = "OOPs" />
            </div>
            <div className = "col-sm-4 center-text padding">
                <Skill image = {os} skill = "OS" />
            </div>
        </div>
        </ScrollAnimation>

        {/* TECHNOLOGIES */}
        <ScrollAnimation animateIn = "fadeInLeft" duration = {1.25}>
        <Title name = "TECHNOLOGIES" />
        <div class = "row">
            <div className = "col-md-3 col-6 center-text padding">
                <Skill image = {node} skill = "Nodejs" />
            </div>
            <div className = "col-md-3 col-6 center-text padding">
                <Skill image = {react} skill = "Reactjs" />
            </div>
            <div className = "col-md-3 col-6 center-text padding">
                <Skill image = {spring} skill = "Spring Boot" />
            </div>
            <div className = "col-md-3 col-6 center-text padding">
                <Skill image = {git} skill = "Git" />
            </div>
        </div>
        </ScrollAnimation>

        {/* DATABASE */}
        <ScrollAnimation animateIn = "fadeInRight" duration = {1.25}>
        <Title name = "DATABASE" />
        <div class="row">
        <div className = "col-sm-4 center-text padding">
                <Skill image = {sql} skill = "MySql" />
            </div>
            <div className = "col-sm-4 center-text padding">
                <Skill image = {mongodb} skill = "MongoDb" />
            </div>
            <div className = "col-sm-4 center-text padding">
                <Skill image = {oracle} skill = "Oracle" />
            </div>
        </div>
        </ScrollAnimation>

        {/* DEVOPS */}
        <ScrollAnimation animateIn = "fadeInLeft" duration = {1.25}>
        <Title name = "DEVOPS" />
        <div class = "row">
            <div className = "col-sm-6 center-text padding">
                <Skill image = {docker} skill = "Docker" />
            </div>
            <div className = "col-sm-6 center-text padding">
                <Skill image = {kubernetes} skill = "Kubernetes" />
            </div>
        </div>
        </ScrollAnimation>

        {/* CP */}
        <ScrollAnimation animateIn = "fadeInRight" duration = {1.25}>
        <Title name = "CP" />
        <div class = "row">
            <div class = "col-sm-12 center-text padding">
                <a 
                    href = {data.CODEFORCES_LINK}
                    rel = "noreferrer" 
                    target = "_blank"> 
                <img 
                    src = {cf} 
                    alt = "not found" 
                    className = "expand" 
                /> </a>
                <h4 className = "less-padding expand"> 
                    <a 
                        href = {data.CODEFORCES_LINK}
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
