import AOS from "aos";
import "./index.css";

window.onbeforeunload = function () {
  window.scrollTo(0,0);
}

AOS.init({
  easing: 'ease-in-out',
  once: true,
});

let darkmode = false; //take from storage or system settings

const page = document.querySelector(".page");
const themeIconLight = document.querySelector("header__theme-icon_theme_light");
const themeIconDark = document.querySelector("header__theme-icon_theme_dark");

function toggleTheme(){
  darkmode = !darkmode;
  initTheme();
}

function initTheme(){
  darkmode ? page.classList.remove("light-theme") : page.classList.add("light-theme");
  darkmode ? themeIconLight.classList.add("header__theme-icon_invisible") : themeIconDark.classList.add("header__theme-icon_invisible");
  darkmode ? themeIconDark.classList.remove("header__theme-icon_invisible") : themeIconLight.classList.remove("header__theme-icon_invisible");
}

themeIcon.addEventListener("click", toggleTheme);
