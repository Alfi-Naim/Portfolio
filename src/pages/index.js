import AOS from "aos";
import "./index.css";

import Menu from "../components/Menu";

const sun = new URL("../images/sun.svg", import.meta.url);
const moon = new URL("../images/moon.svg", import.meta.url);

const githubWhite = new URL("../images/github-white.svg", import.meta.url);
const githubBlack = new URL("../images/github-black.svg", import.meta.url);

const linkedInWhite = new URL("../images/linkedin-white.svg", import.meta.url);
const linkedInBlack = new URL("../images/linkedin-black.svg", import.meta.url);

const emailWhite = new URL("../images/email-white.svg", import.meta.url);
const emailBlack = new URL("../images/email-black.svg", import.meta.url);

const menuWhite = new URL("../images/menu-white.svg", import.meta.url);
const menuBlack = new URL("../images/menu-black.svg", import.meta.url);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

AOS.init({
  easing: "ease-in-out",
  once: true,
});

let darkmode = localStorage.getItem("theme");
if (darkmode == null) darkmode = "dark";

const page = document.querySelector(".page");
const themeIcon = document.querySelector(".header__icon_type_theme");
const menuIcon = document.querySelector(".header__icon_type_menu");
const asideGithubIcon = document.querySelectorAll(".social__icon_type_github");
const asideLinkedInIcon = document.querySelectorAll(".social__icon_type_linkedin");
const asideEmailIcon = document.querySelectorAll(".social__icon_type_email");

const menu = new Menu();

function toggleTheme() {
  darkmode = darkmode == "dark" ? "light" : "dark";
  localStorage.setItem("theme", darkmode);
  initTheme();
}

function initTheme() {
  if (darkmode == "dark") {
    page.classList.remove("page_theme_light");
    themeIcon.setAttribute("src", sun);
    asideGithubIcon.forEach(icon => {
      icon.setAttribute("src", githubWhite);
    });
    asideLinkedInIcon.forEach(icon => {
      icon.setAttribute("src", linkedInWhite);
    });
    asideEmailIcon.forEach(icon => {
      icon.setAttribute("src", emailWhite);
    });
    menuIcon.setAttribute("src", menuWhite);
  } else {
    page.classList.add("page_theme_light");
    themeIcon.setAttribute("src", moon);
    asideGithubIcon.forEach(icon => {
      icon.setAttribute("src", githubBlack);
    });
    asideLinkedInIcon.forEach(icon => {
      icon.setAttribute("src", linkedInBlack);
    });
    asideEmailIcon.forEach(icon => {
      icon.setAttribute("src", emailBlack);
    });
    menuIcon.setAttribute("src", menuBlack);
  }
}

function openMenu() {
  if(menu.isOpen()) menu.close();
  else menu.open();
}

themeIcon.addEventListener("click", toggleTheme);
menuIcon.addEventListener("click", openMenu);

initTheme();
