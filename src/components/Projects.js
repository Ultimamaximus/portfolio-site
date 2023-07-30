import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from '../css/Projects.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import fallbackImage from '../img/technical-cat.jpg';
import SilvanusGrove from '../img/Silvanus-Grove-photo.png';
import Muse from '../img/Muse-photo.png';
import WordleGame from '../img/Wordle-Game-photo.png';
import MeditationAid from '../img/Meditation-Aid-photo.png';

const Projects = () => {
    const projectData = [
        {
            name: 'Silavanus Grove',
            image: SilvanusGrove,
        },
        {
            name: 'Muse',
            image: Muse,
        },
        {
            name: 'Wordle Game',
            image: WordleGame,
        },
        {
            name: 'Meditation Aid',
            image: MeditationAid,
        },
    ];

    return (
        <section className={styles.projects}>
            <h2 className={styles.header}>Projects</h2>
            <div className={styles.carouselContainer}>
                <Carousel showIndicators={false} showThumbs={false} showStatus={false}>
                    {projectData.map((project, index) => (
                        <div key={index} className={styles.slide}>
                            <div className={styles.imageWrapper}>
                                <img src={project.image} alt={project.name} onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }} />
                                <div className={styles.imageOverlay}>
                                    <h3 className={styles.projectName}>{project.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default Projects;
