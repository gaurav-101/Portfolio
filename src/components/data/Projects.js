import Jungle from "./../../img/Jungle.jpg";
import Books from "./../../img/Books2.jpg";
import Hotel from "./../../img/Hotel.jpg";
import Marvel from "./../../img/Marvel.jpg";
import News from "./../../img/News.jpg";
import Shiny from "./../../img/Shiny.jpg";
import Portfolio from "./../../img/Portfolio.jpg";
import WorkInProgress from "./../../img/WorkInProgress.jpg";
import AlexShopEcommerce from "./../../img/Alex_Shop_Ecommerce.jpg";

export const projects = {
    collaborations: [
        {
            name: "Google Developer Student Clubs",
            time: "3 months",
            projects: [
                
            ],
            position: "Chrome Extension Developer",
            company: "Google Developer Student Clubs",
            companyLink: "https://developers.google.com/community/gdsc",
            address: "India",
            work: "Worked on Manifest V3 and JavaScripts to develop robust and scalable extension..",
        },
        {
            name: "IIITian Networks",
            time: "8 Months",
            projects: [],
            position: "Web Developer",
            company: "IIITian Networks",
            companyLink: "https://www.linkedin.com/company/iiitians-network/",
            address: "India",
            work: "Worked in front-end team and helped in debugging and development of dynamic and responsive website using HTML, CSS, JavaScript..",
        },
    ],
    personnalProjects: [
        {
            name: "5Star Movie Rating",
            img: AlexShopEcommerce,
            live_demo_url: "https://github.com/gaurav-101/movie-review",
            gitHub_url: "https://github.com/gaurav-101/movie-review",
            technologies: ["#nextJS", "#mongoDB", "#paypal"],
            colSize: 12,
            summary:
                "Designed complete backend API with Node.js, Express, TailwindCSS, MongoDB, Cloudinary. Role Based Authentication (Admin/ Normal User) with Email Verification. Advance Form with validation, live search fields and UI with React and Context API",
        },
        {
            name: "Site web Portfolio",
            img: Portfolio,
            live_demo_url: "https://gaurav-v-portfolio.vercel.app/",
            gitHub_url: "https://github.com/gaurav-101/Portfolio",
            technologies: ["#nextJS", "#tailwindcss", "#framer-motion"],
            colSize: 6,
            summary:
                "Responsive portfolio website created using NextJS, framer-motion and TailwindCSS. It has animations and transitions. It lists all the projects I have created.",
        },
        {
            name: "Edemy-Learning Platform",
            img: Books,
            live_demo_url: "https://github.com/gaurav-101/Edemy",
            gitHub_url: "https://github.com/gaurav-101/Edemy",
            technologies: ["#ReactJS", "#Redux", "#TypeScript"],
            colSize: 6,
            summary:
                "The Resource and Learning Website aims to provide a user-friendly and intuitive interface that offers a vast array of educational materials, ranging from articles, videos.",
        },
        {
            name: "Discord Clone",
            img: Shiny,
            live_demo_url: "https://discord-cloning.netlify.app/",
            gitHub_url: "https://github.com/gaurav-101/Discord_clone",
            technologies: ["#HTML", "#Javascript", "#TailwindCSS"],
            colSize: 6,
            summary:
                "Created a Discord Website clone with responsiveness using HTML and Tailwind_CSS. 🚀🚀",
        },
        {
            name: "Weather App",
            img: Jungle,
            live_demo_url: "https://weatherapple.netlify.app/",
            gitHub_url: "https://github.com/gaurav-101/Weather",
            technologies: ["#Javascript", "#HTML5", "#CSS3"],
            colSize: 6,
            summary:
                "Built a Weather App using HTML, CSS, and JavaScript! Used a free API to fetch the location data and created a responsive website.",
        },
        {
            name: "We Meet",
            img: Marvel,
            live_demo_url: "https://wemeet.onrender.com/",
            gitHub_url: "https://github.com/gaurav-101/weMeet",
            technologies: ["#Node Js", "#Webrtc", "#Socket.io"],
            colSize: 12,
            summary:
                "Interaction platform using socket.io and webrtc. ",
        },
        {
            name: "News Website",
            img: News,
            live_demo_url: "https://forerunner78.github.io/Journal-website/",
            gitHub_url: "https://github.com/Forerunner78/Journal-website",
            technologies: ["#HTML5", "#CSS3"],
            colSize: 6,
            summary: "Template front-end d'un site web d'informations créé en HTML",
        },
        {
            name: "Hotel Website",
            img: Hotel,
            live_demo_url: "https://forerunner78.github.io/Hotel/index.html",
            gitHub_url: "https://github.com/Forerunner78/Hotel",
            technologies: ["#HTML5", "#CSS3"],
            colSize: 6,
            summary: "Template front-end d'un site web d'hotel créé en HTML",
        },
    ],
};
