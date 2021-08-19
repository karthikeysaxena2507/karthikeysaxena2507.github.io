import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Skill from "./Skills";
import Project from "./Projects";
import Contact from "./Contacts";
import Experiences from "./Experiences";

const App = () => {
    return <div>
    <div className = "bg"></div>
    <div className = "bg bg2"></div>
    <div className = "bg bg3"></div>
    <div className = "content">
        <Header />
        <Intro />
        <About />
        <Skill />
        <Experiences />
        <Project />
        <Contact />
    </div>
    </div>
}

export default App;