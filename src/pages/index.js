import AOS from "aos";
import "./index.css";

import MenuPopup from "../components/MenuPopup";

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

const closeMenuWhite = new URL("../images/close-white.svg", import.meta.url);
const closeMenuBlack = new URL("../images/close-black.svg", import.meta.url);

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
const themeIcon = document.querySelector(".header__theme-icon");
const menuIcon = document.querySelector(".header__menu-icon");
const asideGithubIcon = document.querySelector(".sidenav__icon_type_github");
const asideLinkedInIcon = document.querySelector(".sidenav__icon_type_linkedin");
const asideEmailIcon = document.querySelector(".sidenav__icon_type_email");
const menuGithubIcon = document.querySelector(".menu__icon_type_github");
const menuLinkedInIcon = document.querySelector(".menu__icon_type_linkedin");
const menuEmailIcon = document.querySelector(".menu__icon_type_email");
const menuCloseIcon = document.querySelector(".menu__close-icon");

const menuPopup = new MenuPopup(".menu", ".page", ".menu__link");

function toggleTheme() {
  darkmode = darkmode == "dark" ? "light" : "dark";
  localStorage.setItem("theme", darkmode);
  initTheme();
}

function initTheme() {
  if (darkmode == "dark") {
    page.classList.remove("light-theme");
    themeIcon.setAttribute("src", sun);
    asideGithubIcon.setAttribute("src", githubWhite);
    asideLinkedInIcon.setAttribute("src", linkedInWhite);
    asideEmailIcon.setAttribute("src", emailWhite);   
    menuGithubIcon.setAttribute("src", githubWhite);
    menuLinkedInIcon.setAttribute("src", linkedInWhite);
    menuEmailIcon.setAttribute("src", emailWhite);
    menuIcon.setAttribute("src", menuWhite);
    menuCloseIcon.setAttribute("src", closeMenuWhite);
  } else {
    page.classList.add("light-theme");
    themeIcon.setAttribute("src", moon);
    asideGithubIcon.setAttribute("src", githubBlack);
    asideLinkedInIcon.setAttribute("src", linkedInBlack);
    asideEmailIcon.setAttribute("src", emailBlack);
    menuGithubIcon.setAttribute("src", githubBlack);
    menuLinkedInIcon.setAttribute("src", linkedInBlack);
    menuEmailIcon.setAttribute("src", emailBlack);
    menuIcon.setAttribute("src", menuBlack);
    menuCloseIcon.setAttribute("src", closeMenuBlack);
  }
}

function openMenu() {
  menuPopup.open();
}

function closeMenu() {
  menuPopup.close;
}

themeIcon.addEventListener("click", toggleTheme);
menuIcon.addEventListener("click", openMenu);

initTheme();
