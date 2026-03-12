import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
    return (
        <div className="App min-h-screen bg-gray-50">
            <Navbar />
            <HeroSection />
            <AboutSection /> 
            <SkillsSection />
            <ServicesSection /> 
            <Project />
            <Experience />
            <Contact />
        </div>
    );
};

export default App;
