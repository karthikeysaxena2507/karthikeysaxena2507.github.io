import React from "react"
import ScrollAnimation from 'react-animate-on-scroll';
import * as data from "../config/data";
import Project from "../helper/Project";
import Heading from "../helper/Heading";

const Projects = () => {

    return (
    <div className = "container upper-margin project" id = "projects">

        <Heading heading = "My Projects" />

        {/* PRINT ALL PROJECTS */}
        {data.projects.map((project) => {
            return (
            <Project 
                animation = {project.animation}
                projectName = {project.projectName}
                image = {project.image}
                title = {project.title}
                description = {project.description}
                content = {project.content}
                button = {project.button}
                projectLink = {project.projectLink}
            />);
        })}

        {/* SEE ALL PROJECTS */}
        <ScrollAnimation animateOnce = {true} animateIn = "fadeIn" duration = {1.5} >
            <div className = "center-text expand"> 
                <h4> 
                    <a 
                        href = {data.links.GITHUB_LINK} 
                        rel = "noreferrer" 
                        target = "_blank"> 
                        See More... 
                    </a> 
                </h4> 
            </div>
        </ScrollAnimation>
    
    </div>);
}

export default Projects;
