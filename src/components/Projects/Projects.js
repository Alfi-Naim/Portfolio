import './Projects.css';
import { projects } from '../../utils/constants'
import Project from '../Project/Project';

function Projects() {

    return (
        <section className="projects" id="projects">
            <h2 className="projects__title">Projects</h2>
            <ul className="projects__list">
                {
                    projects.map((project, index) => (
                        <Project project={project} key={index} />
                    ))
                }
            </ul>
        </section>
    );
}
export default Projects;
