import React from 'react';
import styles from '../css/Bio.module.css'

const Bio = () => {
    return (
        <section className={styles.bio}>
            <h2 className={styles["bio__header"]}>My Journey</h2>
            <p className={styles["bio__text"]}>
            I'm a self-taught front-end software developer who thrives on building sleek, responsive web interfaces using HTML, CSS, JavaScript, and React. I'm deeply passionate about web development and always eager to leverage my skills for meaningful projects. I thrive in collaborative environments and am excited to face my next developer world challenge head-on.
            </p>
        </section>
    );
};

export default Bio;

