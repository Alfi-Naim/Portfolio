import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Social from '../Social/Social';
import Menu from '../Menu/Menu';
import './App.css';

import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closePopupByEscape = (evt) => {
      if (evt.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closePopupByEscape);
    return () => document.removeEventListener("keydown", closePopupByEscape);
  }, []);

  useEffect(() => {
    const closePopupByOutsideClick = (evt) => {
      if (evt.target.classList.contains("menu")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", closePopupByOutsideClick);
    return () => document.removeEventListener("keydown", closePopupByOutsideClick);
  }, []);

  const toggelMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const toggleTheme = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  return (
    <div className={`app ${darkMode ? "app_theme_dark" : "app_theme_light"}`}>
      <Header onMenuClick={toggelMenu} onThemeClick={toggleTheme} />
      <main className='main' id="home">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Social vertical={true} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Footer />
    </div>
  );
}

export default App;
