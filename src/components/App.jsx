import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Skill from "./Skills";
import Project from "./Projects";
import Contact from "./Contacts";

const App = () => {
    return <div>
    <div class = "bg"></div>
    <div class = "bg bg2"></div>
    <div class = "bg bg3"></div>
    <div class = "content">
        <Header />
        <Intro />
        <About />
        <Skill />
        <Project />
        <Contact />
    </div>
    </div>
}

export default App;