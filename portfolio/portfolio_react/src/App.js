import React from 'react';
import Navbar from './components/Navbar';  // Ensure you have this component
import Home from './components/Home';  // Import the Home component
import About from './components/About';
import AboutWithImage from './components/AboutWithImage';
import Skills from './components/Skills';
import SkillsProgress from './components/SkillsProgress';
import Services from './components/Services';
import './App.css';  // Add your custom styles

function App() {
    return (
        <>
            <Navbar />
            <div id="home">
                <Home />  {/* Displaying the Home component */}
            </div>
            <div id="about">
                <About />  {/* Displaying the About component */}
            </div>
            <div>
                <AboutWithImage />  {/* Displaying the AboutWithImage component */}
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div>
                <SkillsProgress />
            </div>
            <div id="services">
                <Services />
            </div>
            {/* Add more sections with ids for other components */}
        </>
    );
}

export default App;
