import Navigation from '../Navigation/Navigation';
import './Header.css';

import menuBlack from '../../images/menu-black.svg';
import menuWhite from '../../images/menu-white.svg';
import sun from '../../images/sun.svg';
import moon from '../../images/moon.svg';

import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from 'react';
import Bounce from 'react-reveal/Bounce';

function Header({ onMenuClick, onThemeClick }) {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <header className='header'>
            <div className="header__container">
                <Navigation />
                <Bounce>
                    <img className="header__icon" src={darkMode ? sun : moon} alt={darkMode ? "sun" : "moon"} onClick={onThemeClick} />
                    <img className="header__icon header__icon_type_menu" src={darkMode ? menuWhite : menuBlack} alt="menu" onClick={onMenuClick} />
                </Bounce>
            </div>
        </header>
    );
}

export default Header;
