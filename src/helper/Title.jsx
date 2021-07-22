import React from "react";
import star from "../Images/star.png";

const Title = (props) => {

    return (
    <div class = "center-text"> 
        <h3> 
            <img src = {star} alt="not found" className = "pr-2" /> 
                {props.name}
            <img src = {star} alt="not found" className = "pl-2"/> 
        </h3> 
    </div>
    );
    
}

export default Title;