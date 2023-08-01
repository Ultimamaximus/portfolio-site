import React from 'react';
import styles from '../css/Banner.module.css';
import { ReactComponent as GitHubLogo } from '../img/github.svg';
import { ReactComponent as LinkedInLogo } from '../img/linkedin.svg';
import { ReactComponent as DevToLogo } from '../img/devto.svg';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <h2 className={styles.text}>Let's Be Internet BFFs!</h2>
            <div className={styles.logos}>
                <a href="https://github.com/Ultimamaximus" target="_blank" rel="noopener noreferrer">
                    <GitHubLogo className={styles.logo}/>
                </a>
                <a href="https://www.linkedin.com/in/victor-branson-4b6bab240/" target="_blank" rel="noopener noreferrer">
                    <LinkedInLogo className={styles.logo}/>
                </a>
                <a href="https://dev.to/ultimamaximus" target="_blank" rel="noopener noreferrer">
                    <DevToLogo className={styles.logo}/>
                </a>
            </div>
        </div>
    );
};

export default Banner;

