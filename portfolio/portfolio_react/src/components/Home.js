import React, { useState, useEffect } from 'react';
import './Home.css'; // Custom CSS file for styling
import myImage from '../pictures/my_image.jpg'; // Importing the image

function Home() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const skills = ['Web Design', 'Web Developer', 'Frontend Developer', 'Backend Developer'];
    const typingSpeed = 150; // Typing speed for adding characters
    const deletingSpeed = 100; // Deleting speed for removing characters
    const pauseDuration = 1000; // Pause duration after typing or deleting

    useEffect(() => {
        let timeout;

        if (!isDeleting && text === skills[index]) {
            // Pause before starting to delete
            timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeleting && text === '') {
            // Move to the next skill after deleting
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % skills.length);
        } else {
            // Typing or deleting logic
            const currentSkill = skills[index];
            timeout = setTimeout(() => {
                setText((prevText) =>
                    isDeleting
                        ? currentSkill.substring(0, prevText.length - 1) // Delete one character
                        : currentSkill.substring(0, prevText.length + 1) // Add one character
                );
            }, isDeleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, skills]);

    return (
        <div className="home">
            <div className="home-content">
                <img src={myImage} alt="Akanni Oluwaseun" className="home-img" />
                <h2 className="im-text">I'm</h2>
                <h1 className="home-name">Akanni Oluwaseun</h1>
                <div className="typing-effect">
                    <span>{text}</span>
                </div>
            </div>
        </div>
    );
}

export default Home;
