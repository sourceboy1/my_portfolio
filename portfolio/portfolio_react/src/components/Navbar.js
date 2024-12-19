import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';  // Importing Link from react-scroll
import './Navbar.css'; // Add custom styles for the navbar

function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(false); // Start with navbar hidden

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        // Show the navbar when scrolling down or up, but hide when at the top
        if (currentScrollPos > 10) {
            setVisible(true); // Navbar should be visible when scrolling
        } else {
            setVisible(false); // Navbar should be hidden when at the top
        }

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        const isDesktop = window.innerWidth >= 768; // Check screen width
        if (isDesktop) {
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (isDesktop) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [prevScrollPos]);

    return (
        <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
            <div className="navbar-right">
                <Link to="home" smooth={true} duration={500}>Home</Link>
                <Link to="about" smooth={true} duration={500}>About</Link>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
                <Link to="services" smooth={true} duration={500}>Services</Link>
                <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
                <Link to="reviews" smooth={true} duration={500}>Reviews</Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
                <Link to="hire" smooth={true} duration={500} className="hire-button">Hire Me</Link>
            </div>
        </nav>
    );
}

export default Navbar;
