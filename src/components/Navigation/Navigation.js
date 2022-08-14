import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade';

import './Navigation.css';

function Navigation({ vertical, setMenuOpen }) {

    const closeMenu = () => {
        if (setMenuOpen) setMenuOpen(false);
    }

    return (
        <nav>
            <Fade top big cascade>
                <ul className={`navigation__list ${vertical && 'navigation__list_orientation_vertical'}`}>
                    <li className="navigation__item">
                        <Link to="home" className="navigation__link" smooth={true} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="about" className="navigation__link" smooth={true} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="skills" className="navigation__link" smooth={true} duration={500} onClick={closeMenu}>Skills</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to='projects' className="navigation__link" smooth={true} duration={500} onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="contact" className="navigation__link" smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
            </Fade>
        </nav>
    );
}

export default Navigation;
