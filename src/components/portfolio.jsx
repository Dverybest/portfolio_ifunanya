import React from 'react';
import Medisource from '../images/portfolioImages/caseStudy/medisource.png';
import BlackGold from '../images/portfolioImages/caseStudy/blackgold.png';
import Button from './button';
import './portfolio.css'

const Portfolio = () => {
    return(
        <div className='portfolio-container'>
            <div className='portfolio-content-container'>
                <p className='portfolio'>Portfolio</p>
                <div className='portfolio-classification-container'>
                    <p className='case-study'>Case Studies</p>
                    <p className='mockup'>Mockups</p>
                </div>
                <div className='medisource-container'>
                        <img src={Medisource} className='medisource-img'/>
                        <div className='medisource-text'> 
                            <p className='medisource-text1'>Medisource</p>
                            <p className='medisource-text2'>A health social media platform that 
                                connects medical specialist and enables consultations
                            </p>
                            <Button className='medisource-btn' btnText='Project details'/>
                        </div>
                </div>
                <div className='blackgold-container'>
                        <img src={BlackGold} className='blackgold-img'/>
                        <div className='blackgold-text'>
                            <p className='blackgold-text1'>Black Gold</p>
                            <p className='blackgold-text2'>An investment platform that shows different investment 
                                opportunities that allow people invest through
                                the platform
                            </p>
                            <Button className='blackgold-btn' btnText='Project details'/>
                        </div>
                </div>
                <div className='view-others'>
                    <p >View Others</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;