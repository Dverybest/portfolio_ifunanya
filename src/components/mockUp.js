import React from "react";
import Image1 from '../images/portfolioImages/mockUps/img1.png';
import Image2 from '../images/portfolioImages/mockUps/img2.png';
import Image3 from '../images/portfolioImages/mockUps/img3.png';
import Image4 from '../images/portfolioImages/mockUps/img4.png';
import Image5 from '../images/portfolioImages/mockUps/img5.png';
import Image6 from '../images/portfolioImages/mockUps/img6.png';
import Image7 from '../images/portfolioImages/mockUps/img7.png';
import Image8 from '../images/portfolioImages/mockUps/img8.png';
import './mockUp.css'


const MockUp = () => {
    return (
        <div className="mockup-container">
            <div className="mockup-content-container">
                <div>
                    <p className='portfolio'>Portfolio</p>
                    <div className='portfolio-classification-container'>
                        <p className='case-study'>Case Studies</p>
                        <p className='mockup'>Mockups</p>
                    </div>
                </div>
                <div className="image-row">
                    <div className="mockup-image-container">
                        <img src={Image1}/>
                        <p className="image-description">Pizza order website</p>
                    </div >
                    <div className="mockup-image-container">
                        <img src={Image2}/>
                        <p className="image-description">Food Delivery Website</p>
                    </div>
                </div>
                <div className="image-row">
                    <div className="mockup-image-container">
                        <img src={Image3}/>
                        <p className="image-description">Learning Platform</p>
                    </div>
                    <div className="mockup-image-container">
                        <img src={Image4}/>
                        <p className="image-description">Savings Mobile App</p>
                    </div>
                </div>
                <div className="image-row">
                    <div className="mockup-image-container">
                        <img src={Image5}/>
                        <p className="image-description">Message Player Mobile App</p>
                    </div>
                    <div className="mockup-image-container">
                        <img src={Image6}/>
                        <p className="image-description">Investment  Platform</p>
                    </div>
                </div>
                <div className="image-row">
                    <div className="mockup-image-container">
                        <img src={Image7}/>
                        <p className="image-description">Medical Mobile App</p>
                    </div>
                    <div className="mockup-image-container">
                        <img src={Image8}/>
                        <p className="image-description">Radio monitoring Dashboard</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MockUp;