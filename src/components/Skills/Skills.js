import './Skills.css';
import { skills } from '../../utils/constants'

function Skills() {
    return (
        <section className="skills" id="skills">
            <h2 className="skills__title">Skills</h2>
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
        </section>
    );
}

export default Skills;