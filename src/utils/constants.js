import html from '../images/skills/html.svg'
import css from '../images/skills/css.svg'
import js from '../images/skills/js.svg'
import react from '../images/skills/react.svg'
import nodejs from '../images/skills/nodejs.svg'
import mongo from '../images/skills/mongo.svg'
import git from '../images/skills/git.svg'
import java from '../images/skills/java.svg'
import android from '../images/skills/android.svg'
import firebase from '../images/skills/firebase.svg'

import around from '../images/projects/around-us.png'
import explorer from '../images/projects/news-explorer.png'
import portland from '../images/projects/portland.png'

export const aboutText = {
    title: `About`,
    firstParagraph: `Hello I'm Alfi, I'm web and
    application developer with a lot of experience in app development. I live in Yavne, married
    and the father of a one-year-old girl. I like to develop apps and websites in my spare time,
    like to learn new things and challenge myself.`,
    secondPraragraph: `Recently I have finished
    Pructicum’s 8-month intensive program designed to train talents to be successful Web
    Developers. And right now I'm looking for my way in web development.`,
};

export const skills = [
    {
        "name": "HTML",
        "image" :html
    },
    {
        "name": "CSS",
        "image" :css
    },
    {
        "name": "JS",
        "image" :js
    },
    {
        "name": "React",
        "image" :react
    },
    {
        "name": "NodeJS",
        "image" :nodejs
    },
    {
        "name": "MongoDB",
        "image" :mongo
    },
    {
        "name": "Git",
        "image" :git
    },
    {
        "name": "Java",
        "image" :java
    },
    {
        "name": "Android",
        "image" :android
    },
    {
        "name": "Firebase",
        "image" :firebase
    },
]


export const projects = [
    {
        "name": "News Explorer",
        "technologies" :"React | MongoDB | Express | Node.js | Google Cloud | Figma",
        "gitLink": "https://github.com/Alfi-Naim/news-explorer-frontend",
        "siteLink": "https://naim-news.students.nomoredomainssbs.ru/",
        "image": explorer,
    },
    {
        "name": "Around The U.S",
        "technologies" :"React | MongoDB | Express | Node.js | Google Cloud | Figma",
        "gitLink": "https://github.com/Alfi-Naim/react-around-api-full",
        "siteLink": "https://naim-usa.students.nomoredomainssbs.ru/",
        "image": around,
    },
    {
        "name": "Portland to Portland",
        "technologies" :"HTML | CSS | Figma",
        "gitLink": "https://github.com/Alfi-Naim/web_project_3",
        "siteLink": "https://alfi-naim.github.io/web_project_3/",
        "image": portland,
    },
]

export const contact = {
    "title": "Get In Touch",
    "text": `I am open to new job opportunities
    in the Web field, contact me by email to hire me or just say hi :)`
}