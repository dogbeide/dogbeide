import React from 'react';
import './Project.css';
import TechIcon from './TechIcon';


const Project = ({ url, img, alt, title, desc, techs, inactive = false }) => {
    return (
        <div className={`project ${inactive ? "inactive" : ""}`}>
            <div className="project__techs">
                {techs ? techs.map((tech, i) =>
                    <TechIcon key={i} tech={tech} />
                ) : null}
            </div>
            {inactive ? <img
                    className="project__img"
                    src={img}
                    alt={alt}
                /> : <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="project__img"
                        src={img}
                        alt={alt}
                    />
                </a>
            }

            <div className="project__info">
                <div className="project__title">{title}</div>
                <div className="project__desc">{desc}</div>
            </div>
        </div>
    )
}

export default Project;
