import React from 'react';
import styles from '../css/TechStack.module.css';

// Import all logos
import htmlLogo from '../img/html5.svg';
import cssLogo from '../img/css3.svg';
import jsLogo from '../img/javascript.svg';
import reactLogo from '../img/react.svg';
import pythonLogo from '../img/python.svg';
import firebaseLogo from '../img/firebase.svg';

// Create an array of technologies
const techs = [
  { name: 'HTML', logo: htmlLogo, description: 'HTML5 logo' },
  { name: 'CSS', logo: cssLogo, description: 'CSS3 logo' },
  { name: 'JavaScript', logo: jsLogo, description: 'JavaScript logo' },
  { name: 'React', logo: reactLogo, description: 'React.js logo' },
  { name: 'Python', logo: pythonLogo, description: 'Python logo' },
  { name: 'Firebase', logo: firebaseLogo, description: 'Firebase logo' },
];

const TechStack = () => {
  return (
    <section className={styles.techStack}>
      <h2 className={styles.header}>My Digital Toolbox</h2>
      <div className={styles.techs} role="list">
        {techs.map((tech, index) => (
          <div 
            key={index} 
            className={styles.tech} 
            style={{ '--animation-order': index }}
            role="listitem"
          >
            <img src={tech.logo} alt={tech.description} className={styles.logo} />
            <h3 className={styles.techName}>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
