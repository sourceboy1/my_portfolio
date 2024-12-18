import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Add custom styles for the navbar

function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            setVisible(true);  // Show navbar when scrolling up
        } else {
            setVisible(false); // Hide navbar when scrolling down
        }
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
            <div className="navbar-left">
                
            </div>
            <div className="navbar-right">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#reviews">Reviews</a>
                <a href="#contact">Contact</a>
                <a href="#hire" className="hire-button">Hire Me</a> {/* Hire Me button */}
            </div>
        </nav>
    );
}

export default Navbar;
