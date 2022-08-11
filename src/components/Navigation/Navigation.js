import { Link } from 'react-router-dom';

import './Navigation.css';

function Navigation({ vertical, setMenuOpen }) {

    const closeMenu = () => {
        if (setMenuOpen) setMenuOpen(false);
    }

    return (
        <nav>
            <ul className={`navigation__list ${vertical && 'navigation__list_orientation_vertical'}`}>
                <li className="navigation__item">
                    <a href="/#home" className="navigation__link" onClick={closeMenu}>Home</a>
                </li>
                <li className="navigation__item">
                    <a href="/#about" className="navigation__link" onClick={closeMenu}>About</a>
                </li>
                <li className="navigation__item">
                    <a href="/#skills" className="navigation__link" onClick={closeMenu}>Skills</a>
                </li>
                <li className="navigation__item">
                    <a href='/#projects' className="navigation__link" onClick={closeMenu}>Projects</a>
                </li>
                <li className="navigation__item">
                    <a href="/#contact" className="navigation__link" onClick={closeMenu}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
