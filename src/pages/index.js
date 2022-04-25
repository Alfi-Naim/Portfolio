import AOS from "aos";
import "./index.css";

const sun = new URL("../images/sun.svg", import.meta.url);
const moon = new URL("../images/moon.svg", import.meta.url);

const githubWhite = new URL("../images/github-white.svg", import.meta.url);
const githubBlack = new URL("../images/github-black.svg", import.meta.url);

const linkedInWhite = new URL("../images/linkedin-white.svg", import.meta.url);
const linkedInBlack = new URL("../images/linkedin-black.svg", import.meta.url);

const emailWhite = new URL("../images/email-white.svg", import.meta.url);
const emailBlack = new URL("../images/email-black.svg", import.meta.url);

window.onbeforeunload = function () {
  window.scrollTo(0,0);
}

AOS.init({
  easing: 'ease-in-out',
  once: true,
});

let darkmode = true; //take from storage or system settings
// let darkmode = localStorage.getItem('darkmod-theme');  //take from storage or system settings

const page = document.querySelector(".page");
const themeIcon = document.querySelector(".header__theme-icon");
const githubIcon = document.querySelector(".sidenav__icon_type_github");
const linkedInIcon = document.querySelector(".sidenav__icon_type_linkedin");
const emailIcon = document.querySelector(".sidenav__icon_type_email");

function toggleTheme(){
  // localStorage.setItem('darkmode-theme', !darkmode);
  darkmode = !darkmode;
  initTheme();
}

function initTheme(){
  // darkmode = localStorage.getItem('darkmod-theme');
  darkmode ? page.classList.remove("light-theme") : page.classList.add("light-theme");
  darkmode ? themeIcon.setAttribute("src", sun) : themeIcon.setAttribute("src", moon);
  darkmode ? githubIcon.setAttribute("src", githubWhite) : githubIcon.setAttribute("src", githubBlack);
  darkmode ? linkedInIcon.setAttribute("src", linkedInWhite) : linkedInIcon.setAttribute("src", linkedInBlack);
  darkmode ? emailIcon.setAttribute("src", emailWhite) : emailIcon.setAttribute("src", emailBlack);
}

themeIcon.addEventListener("click", toggleTheme);

initTheme();

console.log(localStorage.getItem('darkmode'));