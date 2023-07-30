import React from 'react';
import styles from '../css/Introduction.module.css';

const Introduction = () => {
    return (
        <div className={styles.introWrapper}>
            <div className={styles.quoteWrapper}>
                <h1 className={styles.quote}>Coding the future: Front-end developer by passion, code educator for the next generation.</h1>
            </div>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src="yay.jpg" alt="Victor Branson"/>
            </div>
        </div>
    )
};

export default Introduction;

