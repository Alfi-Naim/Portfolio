import './About.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import profilePic from '../../images/profile-img.jpg';
import { aboutText } from '../../utils/constants'

function About() {
    return (
        <section className="about" id="about">
            <Fade top>
                <h2 className="about__title">{aboutText.title}</h2>
            </Fade>
            <div className="about__container">
                <Fade top cascade>
                    <div className="about__text-container">
                        <p className="about__text">{aboutText.firstParagraph}</p>
                        <p className="about__text">{aboutText.secondPraragraph}</p>
                    </div>
                </Fade>
                <Zoom>
                    <img className="about__image" src={profilePic} alt="alfi naim" />
                </Zoom>
            </div>
        </section>
    );
}

export default About;
