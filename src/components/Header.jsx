import React from "react";

function Header() {
    return (
    <nav className = "navbar navbar-expand-md navbar-light bg-dark text-white fixed-top" id = "bar">
      <button 
        type = "button" 
        class = "navbar-toggler" 
        data-toggle = "collapse" 
        data-target = "#navbarCollapse">
        <span className = "navbar-toggler-icon"> </span>
      </button>
      <div className = "collapse navbar-collapse" id = "navbarCollapse">
        <div className = "navbar-nav">
          <a href = "#intro" className = "nav-item nav-link active expand"> Home </a>
          <a href = "#about" className = "nav-item nav-link active expand"> About Me </a>
          <a href = "#skills" className = "nav-item nav-link active expand"> Skills </a>
          <a href = "#experiences" className = "nav-item nav-link active expand"> Experience </a>
          <a href = "#projects" className = "nav-item nav-link active expand"> Projects </a>
          <a href = "#contact" className = "nav-item nav-link active expand"> Contact Me </a>
        </div>
      </div>
    </nav>);
}

export default Header;