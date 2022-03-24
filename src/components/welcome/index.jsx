import React from "react";
import Welcome from "../../asset/images/welcome.png";
import Image from "../../asset/images/img.svg";
import NameWrapper from "../../asset/images/nameWrapper.png";
import {
  WelcomeContainer,
  WelcomeTextImage,
  WelcomeLine,
  StyledNameWrapper,
  NameContainer,
  NameParagraph,
  ProfessionParagraph,
  ImageContainer,
  WelcomeIcons,
  StyledImage,
  ImageLine,
} from "./style";

const welcomePage = () => {
  return (
    <WelcomeContainer>
      <WelcomeTextImage src={Welcome} loading="lazy" />
      <WelcomeLine />
      <div className="name-image-container">
        <NameContainer>
          <StyledNameWrapper src={NameWrapper} loading="lazy" />
          <NameParagraph>Hello, I am Ifunanya</NameParagraph>
          <ProfessionParagraph>
            Product Designer per excellence
          </ProfessionParagraph>
          <WelcomeIcons padding />
        </NameContainer>
        <ImageContainer>
          <StyledImage src={Image} loading="lazy" />
          <ImageLine />
        </ImageContainer>
      </div>
    </WelcomeContainer>
  );
};

export default welcomePage;
