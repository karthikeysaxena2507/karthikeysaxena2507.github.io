// import axios from "axios";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
// import resume from "./Resume.pdf";

function About() {
    return <div class="container about upper-margin" id="about">
    <ScrollAnimation animateIn="fadeIn" duration={1.5}>
        <div class="center-text"><span class="bold"> About Me </span> </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="zoomIn" duration={1.5}>
    <p class="padding"> 
    I am a software/Full stack Developer enthusiast with an immense interest in competitive programming. 
    <br />
    I am passionate towards coding and building awesome projects to grow and develop my skills as a developer in the IT industry.
    <br />
    Feel free to contact me at any time.
     </p>
    {/* <div class="center-text">
    <button type="button" class="btn btn-dark expand">
     <a href={resume} download="Resume" target="_blank" rel="noreferrer" >  Resume </a> 
    </button>
    </div>  */}
    </ScrollAnimation>
</div>
}

export default About;