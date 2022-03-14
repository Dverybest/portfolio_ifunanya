import React from "react";
import Medisource from "../../asset/images/medisync.svg";
import BlackGold from "../../asset/images/black_gold.png";
import { StyledButton } from "../button";
import {
  BigImageContainer,
  TextContainer,
  FirstParagraph,
  Image,
  SecondParagraph,
  ViewOthersContainer,
  StyledNavLink,
} from "./style";

const CaseStudy = () => {
  return (
    <>
      <BigImageContainer>
        <Image src={Medisource} />
        <TextContainer>
          <FirstParagraph>Medisource</FirstParagraph>
          <SecondParagraph>
            A health social media platform that connects medical specialist and
            enables consultations
          </SecondParagraph>
          <StyledButton>Project details</StyledButton>
        </TextContainer>
      </BigImageContainer>
      <BigImageContainer>
        <Image src={BlackGold} />
        <TextContainer>
          <FirstParagraph>Black Gold</FirstParagraph>
          <SecondParagraph>
            An investment platform that shows different investment opportunities
            that allow people invest through the platform
          </SecondParagraph>
          <StyledButton>Project details</StyledButton>
        </TextContainer>
      </BigImageContainer>
      <ViewOthersContainer>
        <StyledNavLink to="/projects" activeClassName="true">
          View Others
        </StyledNavLink>
      </ViewOthersContainer>
    </>
  );
};

export default CaseStudy;
