import survey from "../Images/survey.png";
import game from "../Images/gamedev.png";
import food from "../Images/food.PNG";
import social from "../Images/social.PNG";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import github from "../Images/github.png";
import email from "../Images/gmail.png";
import twitter from "../Images/twitter.png";
import linkedin from "../Images/linkedin.png";
import Cpp from "../Images/cpp.png";
import JavaScript from "../Images/javascript.png";
import node from "../Images/node.png";
import react from "../Images/react.png";
import git from "../Images/git.png";
import sql from "../Images/mysql.png";
import java from "../Images/java.png";
import mongodb from "../Images/mongodb.png";
import os from "../Images/os.png";
import spring from "../Images/spring.png";
import ds from "../Images/datastructures.png";
import oop from "../Images/oops.png"
import docker from "../Images/docker.png";
import kubernetes from "../Images/kubernetes.png";
import oracledb from "../Images/oracleDB.png";
import oracle from "../Images/oracle.png";
import konverse from "../Images/konverse.png";
import cars24 from "../Images/cars24.PNG";


export const links = {
    RESUME_LINK: "https://drive.google.com/file/d/1TfGyetdVgaJEBUIvz8_Azq5SX6x4Zy4T/view?usp=sharing",
    GITHUB_LINK: "https://github.com/karthikeysaxena2507/",
    LINKEDIN_LINK: "https://www.linkedin.com/in/karthikey-saxena-69944b177/",
    INSTAGRAM_LINK: "https://www.instagram.com/karthikeysaxena/",
    TWITTER_LINK: "https://twitter.com/KarthikeySaxen1",
    FACEBOOK_LINK: "https://www.facebook.com/kartikey.saxena.71/",
    COUNTJS_API: "https://api.countapi.xyz/update/karthikey/portfolio?amount=1",
    SOCIALITES_LINK: "https://socialites-karthikey.herokuapp.com/",
    SFML_LINK: "https://user-images.githubusercontent.com/66271249/111206686-b4628c00-85ee-11eb-8d7d-8240132e9f7c.mp4",
    SURVEY_LINK: "https://survey-it.netlify.app/",
    RESTAURANT_LINK: "https://resturant-finder.herokuapp.com/",
    CODEFORCES_LINK: "https://codeforces.com/profile/karthikeysaxena",
    EMAIL_LINK: "mailto:karthikeysaxena@gmail.com",
    ORACLE_LINK: "https://www.oracle.com/index.html",
    KONVERSEAI_LINK: "https://www.konverse.ai/",
    CARS24_LINK: "https://www.cars24.com/"
}

export const projects = [
    {
        animation: "fadeInLeft",
        projectName: "Socialites",
        image: social,
        title: "Social Media Web Application",
        description: "Developed a website where users can create, edit, view, delete a " +
        "post, comment, add a reaction, or chat privately or in groups, along with " + 
        "many other features.",
        content: "The webiste is built using the MERN stack and deployed on Heroku.",
        button: "Link to Site",
        projectLink: links.SOCIALITES_LINK
    },
    {
        animation: "fadeInRight",
        projectName: "GamesWithCppAndSFML",
        image: game,
        title: "2D Game Development with C++",
        description: "Developed a Software Application consisting of 2D games like" +
        " Snake-Food, Ball-Brick, Connect-4 and TicTacToe.",
        content: "Used C++, SFML graphics library and Visual Studio for implementation.",
        button: "Project Demo",
        projectLink: links.SFML_LINK
    },
    {
        animation: "fadeInLeft",
        projectName: "Foodelicious",
        image: food,
        title: "Restaurant Billing management system.",
        description: "Developed a Web Application where different restaurants can easily " +
        "manage their billings, menu and also compare them with other restaurants.",
        content: "Used Reactjs for frontend and Nodejs for backend with MySQL database. " +
        "The website is deployed on heroku.",
        button: "Link to Site",
        projectLink: links.RESTAURANT_LINK
    },
    {
        animation: "fadeInRight",
        projectName: "SurveyIt-Backend",
        image: survey,
        title: "Survey It Web Application",
        description: "Developed a web application where users can conducts surveys and " +
        "polls, as well as vote on other posts.",
        content: "The Backend is built using spring boot framework with MySQL database " + 
        "and deployed on Heroku while the Frontend is built with Reactjs and deployed " + 
        "on Netlify.",
        button: "Link to Site",
        projectLink: links.SURVEY_LINK
    }
];

export const contacts = [
    {
        value: links.EMAIL_LINK,
        image: email
    },
    {
        value: links.FACEBOOK_LINK,
        image: facebook
    },
    {
        value: links.INSTAGRAM_LINK,
        image: instagram
    },
    {
        value: links.GITHUB_LINK,
        image: github
    },
    {
        value: links.LINKEDIN_LINK,
        image: linkedin
    },
    {
        value: links.TWITTER_LINK,
        image: twitter
    }
];

export const languages = [
    {
        image: Cpp,
        skill: "C/C++",
        animation: "fadeInLeft"
    },     
    {
        image: java,
        skill: "Java",
        animation: "fadeIn"
    }, 
    {
        image: JavaScript,
        skill: "JavaScript",
        animation: "fadeInRight"
    }
];
        
export const technical = [
    {
        image: ds,
        skill: "DSA",
        animation: "fadeInLeft"
    },     
    {
        image: oop,
        skill: "OOPs",
        animation: "fadeIn"
    }, 
    {
        image: os,
        skill: "OS",
        animation: "fadeInRight"
    }
];

export const technologies = [
    {
        image: node,
        skill: "Nodejs",
        animation: "fadeInLeft"
    },     
    {
        image: spring,
        skill: "Spring Boot",
        animation: "fadeIn"
    }, 
    {
        image: react,
        skill: "React/React-Native",
        animation: "fadeInRight"
    }
]

export const devops = [
    {
        image: git,
        skill: "Git",
        animation: "fadeInLeft"
    },     
    {
        image: docker,
        skill: "Docker",
        animation: "fadeIn"
    }, 
    {
        image: kubernetes,
        skill: "Kubernetes",
        animation: "fadeInRight"
    }
];

export const database = [
    {
        image: sql,
        skill: "MySql",
        animation: "fadeInLeft"
    },     
    {
        image: mongodb,
        skill: "MongoDb",
        animation: "fadeIn"
    }, 
    {
        image: oracledb,
        skill: "Oracle",
        animation: "fadeInRight"
    }
];

export const experiences1 = [
    {
        image: oracle,
        imageAnimation: "fadeInLeft", 
        name: "Oracle",
        position: "Application Engineer Intern - Oracle Application Labs (OAL)",
        link: links.ORACLE_LINK
    },
    {
        image: cars24,
        imageAnimation: "fadeInRight",
        name: "Cars24",
        position: "Software Developer Intern - Cars24 Australia Tech Team",
        link: links.CARS24_LINK
    }
];

export const experiences2 = [
    {
        image:  konverse,
        imageAnimation: "fadeIn", 
        name: "Konverse AI",
        position: "Software Engineer Intern - ETL development group", 
        link: links.KONVERSEAI_LINK,
    }
]

export const introData = "I am a software/Full stack Developer enthusiast " +
"with an immense interest in competitive programming. \n" +
"I am passionate towards coding and building awesome projects " +
"to grow and develop my skills as a developer in the IT industry. \n" + 
"Feel free to contact me at any time.";

export const startingData = "Hello There! \n" +
"I am Karthikey Saxena, an aspiring Software Developer";