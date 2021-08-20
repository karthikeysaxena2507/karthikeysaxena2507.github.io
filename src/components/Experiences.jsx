import React from "react";
import Heading from "../helper/Heading";
import Experience from "../helper/Experience";
import * as data from "../config/data";

const Experiences = () => {

    return (
    <div className = "container upper-margin" id = "experiences">
        <Heading heading = "Work Experience" />
        <div className = "row">
            {data.experiences.map((experience) => {
                return (
                <div className = "col-md-6 text-center padding">
                    <Experience 
                        image = {experience.image}
                        imageAnimation = {experience.imageAnimation}
                        name = {experience.name}
                        position = {experience.position}
                        link = {experience.link}
                    />
                </div>);
            })}
        </div>

    </div>
    )

}

export default Experiences;