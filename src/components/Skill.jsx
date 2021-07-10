import React from "react";
import Cpp from "./Images/cpp.png";
import JavaScript from "./Images/javascript.png";
import node from "./Images/node.png";
import react from "./Images/react.png";
import git from "./Images/git.png";
import sql from "./Images/mysql.png";
import java from "./Images/java.png";
import mongodb from "./Images/mongodb.png";
import os from "./Images/os.png";
import spring from "./Images/spring.png";
import dbms from "./Images/dbms.png";
import ds from "./Images/datastructures.png";
import oop from "./Images/oops.png"
import cf from "./Images/codeforces.png";
import docker from "./Images/docker.png";
import kubernetes from "./Images/kubernetes.png";
import redis from "./Images/redis.png";
import star from "./Images/star.png";
import link from "./Images/link.png";
import ScrollAnimation from 'react-animate-on-scroll';

function Skill() {
    return <div class="container skill upper-margin" id="skills">
        <ScrollAnimation animateIn="fadeIn">
        <div class="center-text padding"> <span class="bold"> My Skills </span> </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" duration={1.25}>
        <div class="center-text"> <h3> <img src={star} alt="not found" /> LANGUAGES <img src={star} alt="not found" /> </h3> </div>
        <div class="row">
            <div class="col-sm-4 center-text padding">
                <img src={Cpp} alt="not found" />
                <h4 class="less-padding"> C/C++ </h4>
            </div>
            <div class="col-sm-4 center-text padding">
                <img src={JavaScript} alt="not found" />
                <h4 class="less-padding"> JavaScript </h4>
            </div>
            <div class="col-sm-4 center-text padding">
                <img src={java} alt="not found" />
                <h4 class="less-padding"> Java </h4>
            </div>
        </div>
        </ScrollAnimation>
        <hr />
        <ScrollAnimation animateIn="fadeInRight" duration={1.25}>
        <div class="center-text"> <h3> <img src={star} alt="not found" /> TECHNICAL <img src={star} alt="not found" /> </h3> </div>
        <div class="row">
            <div class="col-md-3 col-6 center-text padding">
                <img src={ds} alt="not found" />
                <h4 class="less-padding"> DSA </h4>
            </div>
            <div class="col-md-3 col-6 center-text padding">
                <img src={oop} alt="not found" />
                <h4 class="less-padding"> OOPs </h4>
            </div>
            <div class="col-md-3 col-6 center-text padding">
                <img src={os} alt="not found" />
                <h4 class="less-padding"> OS </h4>
            </div>
            <div class="col-md-3 col-6 center-text padding">
                <img src={dbms} alt="not found" />
                <h4 class="less-padding"> DBMS </h4>
            </div>
        </div>
        </ScrollAnimation>
        <hr />
        <ScrollAnimation animateIn="fadeInLeft" duration={1.25}>
        <div class="center-text"> <h3> <img src={star} alt="not found" /> TECHNOLOGIES <img src={star} alt="not found" /> </h3> </div>
        <div class="row">
            <div class="col-md-3 col-6 center-text padding">
                <img src={node} alt="not found" />
                <h4 class="less-padding"> Nodejs </h4>
            </div>
            <div class="col-md-3 col-6 center-text padding">
                <img src={react} alt="not found" />
                <h4 class="less-padding"> Reactjs </h4>
            </div>
            <div class="col-md-3 col-6 center-text padding">
                <img src={spring} alt="not found" />
                <h4 class="less-padding"> Spring Boot </h4>
            </div>
            <div class="col-md-3 col-6 center-text padding">
                <img src={git} alt="not found" />
                <h4 class="less-padding"> Git </h4>
            </div>
        </div>
        </ScrollAnimation>
        <hr />
        <ScrollAnimation animateIn="fadeInRight" duration={1.25}>
        <div class="center-text"> <h3> <img src={star} alt="not found" /> DATABASE <img src={star} alt="not found" /> </h3> </div>
        <div class="row">
            <div class="col-sm-4 center-text padding">
                <img src={sql} alt="not found" />
                <h4 class="less-padding"> MySql </h4>
            </div>
            <div class="col-sm-4 center-text padding">
                <img src={mongodb} alt="not found" />
                <h4 class="less-padding"> MongoDb </h4>
            </div>
            <div class="col-sm-4 center-text padding">
                <img src={redis} alt="not found" />
                <h4 class="less-padding"> Redis </h4>
            </div>
        </div>
        </ScrollAnimation>
        <hr />
        <ScrollAnimation animateIn="fadeInLeft" duration={1.25}>
        <div class="center-text"> <h3> <img src={star} alt="not found" /> DEVOPS <img src={star} alt="not found" /> </h3> </div>
        <div class="row">
            <div class="col-sm-6 center-text padding">
                <img src={docker} alt="not found" />
                <h4 class="less-padding"> Docker </h4>
            </div>
            <div class="col-sm-6 center-text padding">
                <img src={kubernetes} alt="not found" />
                <h4 class="less-padding"> Kubernetes </h4>
            </div>
        </div>
        </ScrollAnimation>
        <hr />
        <ScrollAnimation animateIn="fadeInRight" duration={1.25}>
        <div class="center-text"> <h3> <img src={star} alt="not found" /> Other <img src={star} alt="not found" /> </h3> </div>
        <div class="row">
            <div class="col-sm-12 center-text padding">
                <a href="https://codeforces.com/profile/karthikeysaxena" rel="noreferrer" target="_blank"> <img src={cf} alt="not found" class="expand" /> </a>
                <h4 class="less-padding expand"> <a href="https://codeforces.com/profile/karthikeysaxena" rel="noreferrer" target="_blank"> CodeForces  <img src={link} alt="not found" class="expand" /> </a> </h4>
            </div>
        </div>
        </ScrollAnimation>
    </div>
}

export default Skill;
