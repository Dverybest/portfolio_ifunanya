import React from 'react';
import Welcome from '../images/headerImages/welcome.png';
import Image from '../images/welcomeImages/img.png';
import NameWrapper from '../images/welcomeImages/nameWrapper.png';
import './welcomePage.css';

const welcomePage = () => {
    return(
            <div className='welcome-container'>
                <div className='welcome-content-container'>
                        <img className='welcome-text' src={Welcome} />
                        <div className='welcome-line'/>
                    <div className='name-image-container'>
                        <div className='name-container'>
                            <img src={NameWrapper} className='name-wrapper'/>
                            <p className='name-tag'>Hello, I am Ifunanya</p>
                            <p className='profession-tag'>Product Designer per excellence</p>
                        </div>
                        <div className='image-container'>
                            <img src={Image} />
                            <div className='image-line'/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default welcomePage;