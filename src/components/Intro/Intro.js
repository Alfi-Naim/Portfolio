import './Intro.css';

import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from 'react';

import developer from '../../images/developer.svg';

import note_1_black from '../../images/note_1_black.svg';
import note_2_black from '../../images/note_2_black.svg';
import note_1_white from '../../images/note_1_white.svg';
import note_2_white from '../../images/note_2_white.svg';

function Intro() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="intro">
      <div className="intro__text-container">
        <h1 className="intro__title">Alfi Naim</h1>
        <h2 className="intro__subtitle">Full Stack Web Developer</h2>
        <h2 className="intro__subtitle">Mobile Developer</h2>
      </div>
      <div className='intro__wrapper'>
        <div className='image__container'>
          <img className="intro__image" src={developer} />
          <img className="note note-1" src={darkMode ? note_1_white : note_1_black}/>
          <img className="note note-2" src={darkMode ? note_2_white : note_2_black}/>
        </div>
        <a href="/#contact">
          <button className="intro__button">Contact me</button>
        </a>
      </div>
    </section>
  );
}

export default Intro;
