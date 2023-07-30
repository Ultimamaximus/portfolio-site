import React from 'react';
import styles from '../css/NavBar.module.css';
import { Clipboard } from 'react-bootstrap-icons';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.nameContainer}>
                <h1 className={styles.name}>Victor Branson</h1>
            </div>
            <a href="/path-to-your-resume.pdf" download className={styles.resumeButton}>
                <Clipboard className={styles.icon} color="var(--pastel-primary)" size={32} />
            </a>
        </nav>
    );
};

export default NavBar;
