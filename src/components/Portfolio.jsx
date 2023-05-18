import React from 'react'
import Project from './Project'
import projects from '../constants/projects'


const Body = () => {
    return (
        <div className="portfolio">
            <h1 className="title">MY PROJECTS</h1>
            <div className="items">
            {projects.map(project => 
                <Project
                    key={project.id}
                    url={project.url}
                    img={project.img}
                    alt={project.alt}
                    desc={project.desc}
                    title={project.title}
                    techs={project.techs}
                    inactive={project.inactive}
                />
            )}
            </div>
        </div>
    )
}

export default Body;
