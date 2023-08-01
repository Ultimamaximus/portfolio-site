import React, { useState, useEffect } from 'react';
import styles from '../css/Projects.module.css';
import fallbackImage from '../img/technical-cat.jpg';

const ImageBox = ({ project, selectedProject, setSelectedProject }) => {
    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = project.image;
        image.onerror = () => setImgError(true);
    }, [project]);

    return (
        <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => setSelectedProject(project.name)}
            onMouseLeave={() => setSelectedProject(null)}
            className={styles.project}
            style={{ backgroundImage: `url(${imgError ? fallbackImage : project.image})` }}
        >
            <div className={`${styles.projectOverlay} ${selectedProject === project.name ? styles.visible : ''}`}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
            </div>
        </a>
    );
};

export default ImageBox;
