import React from "react";

const ContactItem = (props) => {
    return (
        <div class = "col-md-2 col-sm-4 text-center padding expand">
            <a
                href = {props.value}
                rel = "noreferrer" 
                target = "_blank"
            > <img src = {props.image} alt = "not found" /> 
            </a>
        </div>    
    );
}

export default ContactItem;