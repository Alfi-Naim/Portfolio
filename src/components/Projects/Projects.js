import './Projects.css';
import { projects } from '../../utils/constants'
import Project from '../Project/Project';
import Fade from 'react-reveal/Fade';

function Projects() {

    return (
        <section className="projects" id="projects">
            <Fade top>
                <h2 className="projects__title">Projects</h2>
            </Fade>
            <Fade top>
                <ul className="projects__list">
                    {
                        projects.map((project, index) => (
                            <Project project={project} key={index} />
                        ))
                    }
                </ul>
            </Fade>
        </section>
    );
}
export default Projects;
