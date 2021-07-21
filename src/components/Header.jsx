import React from "react";

function Header() {
    return <nav class = "navbar navbar-expand-md navbar-light bg-dark text-white fixed-top" id="bar">
      <button type = "button" class = "navbar-toggler" data-toggle = "collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"> </span>
      </button>
      <div class = "collapse navbar-collapse" id="navbarCollapse">
        <div class = "navbar-nav">
          <a href = "#intro" class = "nav-item nav-link active expand"> Home </a>
          <a href = "#about" class = "nav-item nav-link active expand"> About Me </a>
          <a href = "#skills" class = "nav-item nav-link active expand"> Skills </a>
          <a href = "#projects" class = "nav-item nav-link active expand"> Projects </a>
          <a href = "#contact" class = "nav-item nav-link active expand"> Contact Me </a>
        </div>
      </div>
    </nav>
}

export default Header;