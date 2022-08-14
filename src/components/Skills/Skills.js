import './Skills.css';
import { skills } from '../../utils/constants'
import Fade from 'react-reveal/Fade';

function Skills() {
    return (
        <section className="skills" id="skills">
            <Fade top>
                <h2 className="skills__title">Skills</h2>
            </Fade>
            <Fade top cascade>
                <ul className="skills__list">
                    {
                        skills.map((skill, index) => (
                            <li className="skill" key={index}>
                                <img src={skill.image} alt={skill.name} className="skill__image" />
                                <p className="skill__text">{skill.name}</p>
                            </li>
                        ))
                    }
                </ul>
            </Fade>
        </section>
    );
}

export default Skills;