import React from 'react';
import Facebook from '../images/header-images/facebook.png';
import Twitter from '../images/header-images/twitter.png';
import Instagram from '../images/header-images/instagram.png';
import Welcome from '../images/header-images/welcome.png';
import Image from '../images/header-images/img.png';
import './Header.css';

const Header = () => {
    return(
            <div className='header-container'>
                <div className='ifuy-media-container'>
                    <div className='ifuy-container'>
                        <p>Designer_Ifuy</p>
                    </div>
                    <div className='social-media-container'>
                        <img src={Facebook}/>
                        <img src={Twitter}/>
                        <img src={Instagram}/>
                    </div>
                </div>
                <div className='welcome-container'>
                    <img src={Welcome} />
                    <div className='welcome-line'/>
                </div>
                <div className='name-image-container'>
                    <div className='name-container'>
                        <p className='name-tag'>Ifunanya nzewi</p>
                        <p className='profession-tag'>Product Designer</p>
                    </div>
                    <div className='image-container'>
                        <img src={Image} />
                        <div className='image-line'/>
                    </div>
                </div>
            </div>
    )
}

export default Header;