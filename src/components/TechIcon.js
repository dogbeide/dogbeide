import React from 'react';
import techs from '../constants/techs'

const TechIcon = ({ tech }) => {
    return (
        <img
            className="tech-icon"
            src={techs[tech].url}
            alt={tech}
        />
    )
}

export default TechIcon
