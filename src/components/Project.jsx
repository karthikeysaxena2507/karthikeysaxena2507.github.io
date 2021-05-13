import React from "react"
import survey from "./Images/survey.png";
import terrain from "./Images/terrain.png";
import game from "./Images/gamedev.png";
import link from "./Images/link.png";
import food from "./Images/food.PNG";
import social from "./Images/social.PNG";
import ScrollAnimation from 'react-animate-on-scroll';

function Project() {
    return <div class="container upper-margin project" id="projects">

        {/* HEADING */}
        <ScrollAnimation animateIn="fadeIn">
        <div class="center-text padding"><span class="bold"> My Projects </span> </div>
        </ScrollAnimation>

        {/* SOCIALITES */}
        <ScrollAnimation animateIn="fadeInLeft" duration={1.25}>
        <div class="row">
            <div class="col-md-6 padding center-text expand"> <a href="https://github.com/karthikeysaxena2507/Socialites" rel="noreferrer" target="_blank" > <img class="proj-img" style={{width: "85%", height: "90%"}} src={social} alt="not found"/> </a> </div>
            <div class="col-md-6 padding center-text">
            <a href="https://github.com/karthikeysaxena2507/Socialites" rel="noreferrer" target="_blank" > <h3> Social Media Web Application <img src={link} alt="not found" className="expand"/> </h3> </a>
                <p class="proj-content">
                    Developed a website where users can create, edit, view, delete a post, comment, add a reaction, or chat privately or in groups, along with many other features.
                    <br />
                    The webiste is built using the MERN stack and deployed on Heroku.
                    <br />
                    <br />
                    <div class="center-text">
                        <button type="button" class="btn btn-dark expand"> <a href="https://socialites-karthikey.herokuapp.com/" target="_blank" rel="noreferrer" > Link to site </a> </button>
                    </div>
                </p>
            </div>
        </div>
        </ScrollAnimation>
        <hr />

        {/* 2D GAME DEVELOPMENT PROJECT  */}
        <ScrollAnimation animateIn="fadeInRight" duration={1.25}>
        <div class="row">
            <div class="col-md-6 padding center-text expand"> <a href="https://github.com/karthikeysaxena2507/Games-With-Cpp-And-SFML" rel="noreferrer" target="_blank" > <img class="proj-img" src={game} style={{width: "85%", height: "90%"}} alt="not found"/> </a> </div>
            <div class="col-md-6 padding center-text"> 
            <a href="https://github.com/karthikeysaxena2507/Games-With-Cpp-And-SFML" rel="noreferrer" target="_blank" > <h3> 2D Game Development with C++  <img src={link} alt="not found" class="expand" /> </h3></a>
                <p class="proj-content">
                    Developed a Software Application consisting of 2D games like Snake-Food, Ball-Brick, Connect-4 and TicTacToe.
                    <br />
                    Used C++, SFML graphics library and Visual Studio for implementation.
                    <br />
                    <br />
                    <div class="center-text">
                        <button type="button" class="btn btn-dark expand"> <a href="https://user-images.githubusercontent.com/66271249/111206686-b4628c00-85ee-11eb-8d7d-8240132e9f7c.mp4" target="_blank" rel="noreferrer" > Project Demo </a> </button>
                    </div>
                </p>
            </div>
        </div>
        </ScrollAnimation>
        <hr />

        {/* RESTURANT BILLING MANAGEMENT SYSTEM */}
        <ScrollAnimation animateIn="fadeInLeft" duration={1.25}>
        <div class="row">
            <div class="col-md-6 padding center-text expand"> <a href="https://github.com/karthikeysaxena2507/Foodelicious" rel="noreferrer" target="_blank" > <img class="proj-img" src={food} style={{width: "85%", height: "90%"}} alt="not found"/> </a> </div>
            <div class="col-md-6 padding center-text"> 
            <a href="https://github.com/karthikeysaxena2507/Foodelicious" rel="noreferrer" target="_blank" > <h3> Restaurant Billing management system. <img src={link} alt="not found" class="expand" /> </h3> </a>
                <p class="proj-content">
                    Developed a Web Application where different restaurants can easily manage their billings, menu and also compare them with other restaurants.
                    <br />
                    Used Reactjs for frontend and Nodejs for backend with MySQL database. The website is deployed on heroku.
                    <br />
                    <br />
                    <div class="center-text">
                        <button type="button" class="btn btn-dark expand"> <a href="https://resturant-finder.herokuapp.com/" target="_blank" rel="noreferrer" > Link to site </a> </button>
                    </div>
                </p>
            </div>
        </div>
        </ScrollAnimation>
        <hr />

        {/* SURVEY APPLICATION */}
        <ScrollAnimation animateIn="fadeInRight" duration={1.25}>
        <div class="row">
            <div class="col-md-6 padding center-text expand"> <a href="https://github.com/karthikeysaxena2507/SurveyIt-Backend" rel="noreferrer" target="_blank" > <img class="proj-img" src={survey} style={{width: "85%", height: "90%"}} alt="not found"/> </a> </div>
            <div class="col-md-6 padding center-text"> 
            <a href="https://github.com/karthikeysaxena2507/SurveyIt-Backend" rel="noreferrer" target="_blank" > <h3> Survey It Web Application  <img src={link} alt="not found" class="expand" /> </h3> </a>
                <p class="proj-content">
                    Developed a web application where users can conducts surveys and polls, as well as vote on other posts. 
                    <br />
                    The Backend is built using spring boot framework with MySQL database and deployed on Heroku while the Frontend is built with Reactjs and deployed on Netlify.
                    <br />
                    <br />
                    <div class="center-text">
                        <button type="button" class="btn btn-dark expand"> <a href="https://survey-it.netlify.app/" target="_blank" rel="noreferrer" > Link to site </a> </button>
                    </div>
                </p>
            </div>
        </div>
        </ScrollAnimation>
        <hr />

        {/* REAL TIME TERRAIN RENDERING PROJECT */}
        <ScrollAnimation animateIn="fadeInLeft" duration={1.25} >
        <div class="row">
            <div class="col-md-6 padding center-text expand"> <a href="https://github.com/karthikeysaxena2507/Terrian-Rendering-" rel="noreferrer"  target="_blank" > <img class="proj-img" src={terrain} style={{width: "85%", height: "80%"}} alt="not found"/> </a> </div>
            <div class="col-md-6 padding center-text"> 
            <a href="https://github.com/karthikeysaxena2507/Terrian-Rendering-" rel="noreferrer" target="_blank"><h3>Real Time Terrain Rendering  <img src={link} alt="not found" class="expand" /></h3></a>
                <p class="proj-content">
                    Implemented Terrain rendering algorithms - Delaunay Triangulation and Real Time Optimally Adapting Mashes (ROAM) algorithm.
                    <br />
                    Used C++ and graphic libraries like OpenGL and SFML for rendering.
                    <br />
                    <br />
                    <div class="center-text">
                        <button type="button" class="btn btn-dark expand"> <a href="https://user-images.githubusercontent.com/66271249/103809983-742bde00-5080-11eb-9d9e-8afe8b9819bc.mp4" target="_blank" rel="noreferrer" > Project Demo </a> </button>
                    </div>
                </p>
            </div>
        </div>
        </ScrollAnimation>
        <hr />

        {/* SEE ALL PROJECTS */}
        <ScrollAnimation animateIn="zoomIn" duration={1.25} >
        <div class="center-text expand"> <h4> <a href="https://github.com/karthikeysaxena2507" rel="noreferrer" target="_blank"> See More... </a> </h4> </div>
        </ScrollAnimation>
    
    </div>
}

export default Project;
