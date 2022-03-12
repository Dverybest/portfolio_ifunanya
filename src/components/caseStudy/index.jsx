import React from 'react';
import Medisource from './medisync.svg';
import BlackGold from './black_gold.png';
import { StyledButton } from '../button';
import { 
    PortfolioContainer,
    PortfolioContentContainer,
    PortfolioText,
    PortfolioClassificationContainer, 
    ClassificationText,
    BigImageContainer,
    TextContainer,
    FirstParagraph,
    Image,
    SecondParagraph,
    ViewOthersContainer,
    StyledNavLink
} from './style';

const CaseStudy = () => {
    return(
        <PortfolioContainer>
            <PortfolioContentContainer>
                <PortfolioText>Portfolio</PortfolioText>
                <PortfolioClassificationContainer>
                <StyledNavLink to="/" activeClassName="true"> <ClassificationText> Case Studies</ClassificationText> </StyledNavLink>
                <StyledNavLink to="/mockups" activeClassName="true"> <ClassificationText> Mockups</ClassificationText> </StyledNavLink>
                </PortfolioClassificationContainer>
                <BigImageContainer>
                        <Image src={Medisource} />
                        <TextContainer> 
                            <FirstParagraph>Medisource</FirstParagraph>
                            <SecondParagraph>A health social media platform that 
                                connects medical specialist and enables consultations
                            </SecondParagraph>
                            <StyledButton>Project details</StyledButton>
                        </TextContainer>
                </BigImageContainer>
                <BigImageContainer>
                        <Image src={BlackGold} />
                        <TextContainer>
                            <FirstParagraph>Black Gold</FirstParagraph>
                            <SecondParagraph>An investment platform that shows different investment 
                                opportunities that allow people invest through
                                the platform
                            </SecondParagraph>
                            <StyledButton >Project details</StyledButton>
                        </TextContainer>
                </BigImageContainer>
                <ViewOthersContainer>
                    <p >View Others</p>
                </ViewOthersContainer>
            </PortfolioContentContainer>
        </PortfolioContainer>
    )
}

export default CaseStudy;