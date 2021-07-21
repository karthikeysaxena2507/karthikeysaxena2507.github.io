import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";

function App() {
    return <div>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="content">
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