import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import Heading from "../helper/Heading";
import Experience from "../helper/Experience";
import * as data from "../config/data";

const Experiences = () => {

    return (
    <div className = "container upper-margin" id = "experiences">

        <ScrollAnimation animateIn = "fadeIn" duration = {1.5}>
            <Heading heading = "Work Experience" />
        </ScrollAnimation>

        <ScrollAnimation animateIn = "fadeInLeft" duration = {1.25}>
        <div className = "row">
            {data.experiences.map((experience) => {
                return (
                <div className = "col-md-6 text-center padding">
                    <Experience 
                        image = {experience.image}
                        name = {experience.name}
                        position = {experience.position}
                        link = {experience.link}
                    />
                </div>);
            })}
        </div>
        </ScrollAnimation>

    </div>
    )

}

export default Experiences;