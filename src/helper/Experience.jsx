/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Experience = (props) => {

    return (
        <div className = "text-center mr-2 pr-3 exp" onClick = {() => window.location = props.link}>
            <div>
                <img src = {props.image} alt = "image not loaded"/>
            </div>
            <div className = "mt-3">
                {props.position}
            </div>
        </div>
    )

}

export default Experience;