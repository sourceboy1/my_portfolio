import React from 'react'; 
import './AboutWithImage.css'; // Custom CSS for styling
import myImage1 from '../pictures/my_image1.jpg'; // Import the image

function AboutWithImage() {
    return (
        <div className="about-container">
            <div className="about-image">
                <img src={myImage1} alt="Profile" className="about-profile-image" />
            </div>
            <div className="about-content">
                <h2>Web Developer</h2>
                <p>
                I develop visually appealing and adaptable websites that are optimized for SEO. With a genuine passion and unwavering dedication to my craft, I consistently deliver exceptional results.
                </p>
                <div className="about-details">
                    <div className="about-detail-item"><strong>Name:</strong> Akanni Oluwaseun</div>
                    <div className="about-detail-item"><strong>Birthday:</strong> 17 April </div>
                    <div className="about-detail-item"><strong>Degree:</strong> Undergraduate</div>
                    <div className="about-detail-item"><strong>Experience:</strong> 2 Years</div>
                    <div className="about-detail-item"><strong>Phone:</strong> +234 9039 835 798</div>
                    <div className="about-detail-item"><strong>Email:</strong> seunakanni417@gmail.com</div>
                    <div className="about-detail-item"><strong>Address:</strong> 3 Opaleye Eulie Estate,Oregun Road,Ikeja , Lagos State, Nigeria</div>
                    <div className="about-detail-item"><strong>Freelance:</strong> Available</div>
                </div>
                <button className="hire-button">Hire Me</button> {/* Hire Me button */}
            </div>
        </div>
    );
}

export default AboutWithImage;
