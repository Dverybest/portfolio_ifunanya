import React from "react";
import Button from "./button";
import './aboutMe.css';

const AboutMe = () => {
    return(
        <div className="about-container">
            <div className="about-content-container">
               
                <div className="about-cv-container">
                    <p className="about-me">About Me</p>
                    <Button className='download-cv-btn' btnText="Download Cv"/>
                </div>
                <div className="about-text">
                    <p>
                        Product Designer and Digital Creative<br/>
                        I Specialized in User Interface/Experience Design.
                    </p>
                    
                    <p>
                        I am a skilled and Experienced Product designer, 
                        passionate about building appealing strong user interface designs, 
                        creating a great experience for users, ensuring product owners meet to 
                        their goals and focused at  solving problems
                    </p>

                    <p>
                        I use design softwares and tools to build digital products, 
                        ranging from the financial tech, business, health, ecommerce,
                         Learning Management System, crypto industry ,B2B, B2C products.
                    </p>
                    <Button className='more-about-me-btn' btnText='More about me' />
                </div>
            </div>
        </div>

    )
}

export default AboutMe;