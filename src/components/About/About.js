import './About.css';

import profilePic from '../../images/profile-img.jpg';
import { aboutText } from '../../utils/constants'

function About() {
    return (
        <section className="about" id="about">
            <h2 className="about__title">{aboutText.title}</h2>
            <div className="about__container">
                <div className="about__text-container">
                    <p className="about__text">{aboutText.firstParagraph}</p>
                    <p className="about__text">{aboutText.secondPraragraph}</p>
                </div>
                <img className="about__image" src={profilePic} alt="alfi naim" />
            </div>
        </section>
    );
}

export default About;
