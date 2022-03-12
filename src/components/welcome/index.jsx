import React from 'react';
import Welcome from './welcome.png';
import Image from './img.svg';
import NameWrapper from "./nameWrapper.png";
import ContactIcons from '../contactIcons';
import { WelcomeContainer,WelcomeTextImage,
    WelcomeLine,StyledNameWrapper,
    NameContainer,NameParagraph,
    ProfessionParagraph,ImageContainer,
    StyledImage,ImageLine,NewContactIconWrapper

 } from './style';

const welcomePage = () => {
    return(
            <WelcomeContainer>
                        <WelcomeTextImage src={Welcome} />
                        <WelcomeLine/>
                    <div className='name-image-container'>
                        <NameContainer>
                            <StyledNameWrapper src={NameWrapper} />
                            <NameParagraph>Hello, I am Ifunanya</NameParagraph>
                            <ProfessionParagraph>Product Designer per excellence</ProfessionParagraph>
                            <ContactIcons 
                                position="position" 
                                bottom="bottom"
                                left="left"
                                transform="transform"
                                padding="padding"
                            />
                        </NameContainer>
                        <ImageContainer>
                            <StyledImage src={Image} />
                            <ImageLine />
                        </ImageContainer>
                    </div>
            </WelcomeContainer>
    )
}

export default welcomePage;