import React from "react";

const Skill = (props) => {
    return (
        <div>
            <img src = {props.image} alt = "not found" />
            <h4 className = "less-padding"> {props.skill} </h4>
        </div>
    )
}

export default Skill;