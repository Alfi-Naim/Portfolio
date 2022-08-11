import './Social.css';

import githubWhite from '../../images/github-white.svg';
import githubBlack from '../../images/github-black.svg';

import linkedinWhite from '../../images/linkedin-white.svg';
import linkedinBlack from '../../images/linkedin-black.svg';

import emailWhite from '../../images/email-white.svg';
import emailBlack from '../../images/email-black.svg';

import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from 'react';

function Social({ vertical }) {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="social">
            <ul className={`social__list ${vertical && 'social__list_orientation_vertical'}`}>
                <li className="social__item" data-aos="flip-left" data-aos-duration="500">
                    <a href="https://github.com/Alfi-Naim" target="_blank" className="social__link">
                        <img src={darkMode ? githubWhite : githubBlack} alt="github"
                            className="social__icon social__icon_type_github" />
                    </a>
                </li>
                <li className="social__item" data-aos="flip-left" data-aos-duration="800">
                    <a href="https://www.linkedin.com/in/alfi-naim/" target="_blank" className="social__link">
                        <img src={darkMode ? linkedinWhite : linkedinBlack} alt="linkedin"
                            className="social__icon social__icon_type_linkedin" />
                    </a>
                </li>
                <li className="social__item" data-aos="flip-left" data-aos-duration="1200">
                    <a href="mailto:alfons.devs@gmail.com" className="social__link">
                        <img src={darkMode ? emailWhite : emailBlack} alt="email"
                            className="social__icon social__icon_type_email" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Social;
