import React, { useState, useEffect } from 'react';
import './Services.css'; // Custom CSS for styling

function Services() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const services = ['Web Design', 'UI/UX Design', 'Mobile App Development', 'SEO Optimization'];
    const typingSpeed = 150; // Typing speed for adding characters
    const deletingSpeed = 100; // Deleting speed for removing characters
    const pauseDuration = 1000; // Pause duration after typing or deleting

    useEffect(() => {
        let timeout;

        if (!isDeleting && text === services[index]) {
            timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % services.length);
        } else {
            const currentService = services[index];
            timeout = setTimeout(() => {
                setText((prevText) =>
                    isDeleting
                        ? currentService.substring(0, prevText.length - 1)
                        : currentService.substring(0, prevText.length + 1)
                );
            }, isDeleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, services]);

    return (
        <div className="services-section">
            <div className="services-background">
                <h1 className="traced-text">SERVICES</h1>
                <h2 className="colored-text">My Services</h2>
            </div>

            
        </div>
    );
}

export default Services;
