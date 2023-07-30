// Import necessary dependencies
import React from 'react';
import NavBar from './NavBar';
import Introduction from './Introduction.js';
import TechStack from './TechStack';
import Projects from './Projects';
import Bio from './Bio';
import Banner from './Banner';

// Define your App component
const App = () => {
  return (
    <div>
      <NavBar />
      <Introduction />
      <Bio />
      <TechStack />
     
      <Banner />
    </div>
  );
};

export default App;

