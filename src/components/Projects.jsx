import React from "react"
import survey from "../Images/survey.png";
import game from "../Images/gamedev.png";
import food from "../Images/food.PNG";
import social from "../Images/social.PNG";
import ScrollAnimation from 'react-animate-on-scroll';
import { data } from "../config/data";
import Project from "../helper/Project";

const Projects = () => {

    return <div class = "container upper-margin project" id = "projects">

        {/* HEADING */}
        <ScrollAnimation animateIn = "fadeIn">
            <div class = "center-text padding">
                <span class = "bold"> My Projects </span> 
            </div>
        </ScrollAnimation>

        {/* SOCIALITES */}
        <Project 
            animation = "fadeInLeft"
            projectName = "Socialites"
            image = {social}
            title = "Social Media Web Application"
            description = "Developed a website where users can create, edit, view, delete a post, comment, add a reaction, or chat privately or in groups, along with many other features."
            content = "The webiste is built using the MERN stack and deployed on Heroku."
            button = "Link to Site"
        />

        {/* 2D GAME DEVELOPMENT PROJECT  */}
        <Project 
            animation = "fadeInRight"
            projectName = "GamesWithCppAndSFML"
            image = {game}
            title = "2D Game Development with C++"
            description = "Developed a Software Application consisting of 2D games like Snake-Food, Ball-Brick, Connect-4 and TicTacToe."
            content = "Used C++, SFML graphics library and Visual Studio for implementation."
            button = "Project Demo"
        />

        {/* RESTURANT BILLING MANAGEMENT SYSTEM */}
        <Project 
            animation = "fadeInLeft"
            projectName = "Foodelicious"
            image = {food}
            title = "Restaurant Billing management system."
            description = "Developed a Web Application where different restaurants can easily manage their billings, menu and also compare them with other restaurants."
            content = "Used Reactjs for frontend and Nodejs for backend with MySQL database. The website is deployed on heroku."
            button = "Link to Site"
        />

        {/* SURVEY APPLICATION */}
        <Project 
            animation = "fadeInRight"
            projectName = "SurveyIt-Backend"
            image = {survey}
            title = "Survey It Web Application"
            description = "Developed a web application where users can conducts surveys and polls, as well as vote on other posts."
            content = "The Backend is built using spring boot framework with MySQL database and deployed on Heroku while the Frontend is built with Reactjs and deployed on Netlify."
            button = "Link to Site"
        />

        {/* SEE ALL PROJECTS */}
        <ScrollAnimation animateIn = "zoomIn" duration = {1.25} >
            <div class="center-text expand"> 
                <h4> 
                    <a 
                        href = {data.GITHUB_LINK} 
                        rel = "noreferrer" 
                        target = "_blank"> 
                        See More... 
                    </a> 
                </h4> 
            </div>
        </ScrollAnimation>
    
    </div>
}

export default Projects;
