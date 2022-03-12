import React from "react";
import Image1 from './mockupImages/img1.png';
import Image2 from './mockupImages/img2.png';
import Image3 from './mockupImages/img3.png';
import Image4 from './mockupImages/img4.png';
import Image5 from './mockupImages/img5.png';
import Image6 from './mockupImages/img6.png';
import Image7 from './mockupImages/img7.png';
import Image8 from './mockupImages/img8.png';
import { 
    ClassificationText, 
    PortfolioClassificationContainer, 
    PortfolioContainer, 
    PortfolioContentContainer, 
    PortfolioText, 
    StyledNavLink
} from "../caseStudy/style";
import { 
    RowContainer,
    MockUpImageContainer,
    MockUpImages,
    ImageDescription 
} from "./style";


const MockUp = () => {
    return (
        <PortfolioContainer>
            <PortfolioContentContainer>
                    <PortfolioText>Portfolio</PortfolioText>
                    <PortfolioClassificationContainer>
                        <StyledNavLink to="/"> <ClassificationText> Case Studies</ClassificationText> </StyledNavLink>
                        <StyledNavLink to="/mockups"> <ClassificationText> Mockups</ClassificationText> </StyledNavLink>
                    </PortfolioClassificationContainer>
                <RowContainer>
                    <MockUpImageContainer>
                        <MockUpImages src={Image1}/>
                        <ImageDescription>Pizza order website</ImageDescription>
                    </MockUpImageContainer >
                    <MockUpImageContainer>
                        <MockUpImages src={Image2}/>
                        <ImageDescription>Food Delivery Website</ImageDescription>
                    </MockUpImageContainer>
                </RowContainer>
                <RowContainer>
                    <MockUpImageContainer>
                        <MockUpImages src={Image3}/>
                        <ImageDescription>Learning Platform</ImageDescription>
                    </MockUpImageContainer>
                    <MockUpImageContainer>
                        <MockUpImages src={Image4}/>
                        <ImageDescription>Savings Mobile App</ImageDescription>
                    </MockUpImageContainer>
                </RowContainer>
                <RowContainer>
                    <MockUpImageContainer>
                        <MockUpImages src={Image5}/>
                        <ImageDescription>Message Player Mobile App</ImageDescription>
                    </MockUpImageContainer>
                    <MockUpImageContainer>
                        <MockUpImages src={Image6}/>
                        <ImageDescription>Investment  Platform</ImageDescription>
                    </MockUpImageContainer>
                </RowContainer>
                <RowContainer>
                    <MockUpImageContainer>
                        <MockUpImages src={Image7}/>
                        <ImageDescription>Medical Mobile App</ImageDescription>
                    </MockUpImageContainer>
                    <MockUpImageContainer>
                        <MockUpImages src={Image8}/>
                        <ImageDescription>Radio monitoring Dashboard</ImageDescription>
                    </MockUpImageContainer>
                </RowContainer>
            </PortfolioContentContainer>
        </PortfolioContainer>
    )
};

export default MockUp;