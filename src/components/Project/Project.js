import './Project.css';

import githubWhite from '../../images/github-white.svg';
import exportWhite from '../../images/export-white.svg';

function Project({ project }) {
    return (
        <li className="project">
            <img src={project.image} alt={project.name} className="project__image" />
            <div className="project__overlay">
                <div className="project__text-container">
                    <h3 className="project__title">{project.name}</h3>
                    <p className="project__tech">{project.technologies}</p>
                </div>
                <div className="project__icon-container">
                    <a href={project.gitLink} target="_blank">
                        <img src={githubWhite} alt="github" className="project__icon" />
                    </a>
                    <a href={project.siteLink} target="_blank">
                        <img src={exportWhite} alt="site link" className="project__icon" />
                    </a>
                </div>
            </div>
        </li>
    );
}

export default Project;
