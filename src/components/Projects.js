import React, { useState } from 'react';
import styles from '../css/Projects.module.css';
import SilvanusGrove from '../img/Silvanus-Grove-photo.png';
import Muse from '../img/Muse-photo.png';
import WordleGame from '../img/Wordle-Game-photo.png';
import ImageBox from './ImageBox';

const Projects = () => {
    const projectData = [
        {
            name: 'Silavanus Grove',
            image: SilvanusGrove,
            description: 'A project about...',
            link: 'https://symphonious-sable-ca8f44.netlify.app/',
        },
        {
            name: 'Muse',
            image: Muse,
            description: 'This project is...',
            link: 'https://merry-youtiao-ecf432.netlify.app/',
        },
        {
            name: 'Wordle Game',
            image: WordleGame,
            description: 'A word game where...',
            link: 'https://jade-taiyaki-b3543c.netlify.app/',
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className={styles.projects}>
            <h2 className={styles.header}>Projects</h2>
            <div className={styles.projectsContainer}>
                {projectData.map((project, index) => (
                    <ImageBox 
                        key={index} 
                        project={project}
                        selectedProject={selectedProject}
                        setSelectedProject={setSelectedProject}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
