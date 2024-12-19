import React, { useState, useEffect } from 'react';
import './SkillsProgress.css'; // Custom CSS for styling the progress bars

function SkillsProgress() {
    const skills = [
        { name: 'HTML', percentage: 95, color: '#ff5733' }, // Red-orange for HTML
        { name: 'CSS', percentage: 85, color: '#1e90ff' }, // Dodger Blue for CSS
        { name: 'JavaScript', percentage: 80, color: '#f7df1e' }, // Yellow for JavaScript
        { name: 'React', percentage: 90, color: '#61dafb' }, // React Blue
        { name: 'Django', percentage: 85, color: '#092e20' }, // Dark green for Django
        { name: 'WordPress', percentage: 75, color: '#21759b' } // Blue-gray for WordPress
    ];

    const [progress, setProgress] = useState(skills.map(() => 0));

    useEffect(() => {
        const animationDuration = 1000; // Total animation duration in ms
        const steps = 50; // Number of animation steps
        const intervalTime = animationDuration / steps; // Time per step

        const intervals = skills.map((skill, index) => {
            const target = skill.percentage;
            const increment = target / steps; // Dynamic increment based on target

            const interval = setInterval(() => {
                setProgress(prev => {
                    const updated = [...prev];
                    if (updated[index] < target) {
                        updated[index] = Math.min(updated[index] + increment, target);
                    }
                    return updated;
                });
            }, intervalTime);

            return interval;
        });

        return () => intervals.forEach(clearInterval); // Cleanup intervals on unmount
    }, [skills]);

    return (
        <div className="skills-progress">
            {skills.map((skill, index) => (
                <div className="skill" key={index}>
                    <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{Math.round(progress[index])}%</span>
                    </div>
                    <div className="skill-bar">
                        <div
                            className="skill-progress"
                            style={{
                                width: `${progress[index]}%`,
                                backgroundColor: skill.color,
                            }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkillsProgress;
