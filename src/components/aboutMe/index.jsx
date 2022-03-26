import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../button";
import {
  AboutContainer,
  AboutContentContainer,
  AboutMeContainer,
  AboutMeParagraph,
  AboutTextContainer,
  FirstParagraph,
  AboutButtonsContainer,
  Paragraphs,
} from "./style";

const AboutMe = () => {
  const navigate = useNavigate();

  const aboutPage = (e) => {
    e.preventDefault();
    navigate("/aboutme");
  };

  return (
    <AboutContainer>
      <AboutContentContainer>
        <AboutMeContainer>
          <AboutMeParagraph>About Me</AboutMeParagraph>
        </AboutMeContainer>
        <AboutTextContainer>
          <FirstParagraph>
            Product Designer and Digital Creative.
          </FirstParagraph>

          <Paragraphs>
            I am a skilled and Experienced Product designer, passionate about
            building appealing strong user interface designs, creating a great
            experience for users, ensuring product owners meet to their goals
            and focused at solving problems
          </Paragraphs>

          <Paragraphs>
            I use design softwares and tools to build digital products, ranging
            from the financial tech, business, health, ecommerce, Learning
            Management System, crypto industry ,B2B, B2C products.
          </Paragraphs>
          <AboutButtonsContainer>
            <StyledButton onClick={aboutPage}>More about me</StyledButton>
            <StyledButton primary>View CV</StyledButton>
          </AboutButtonsContainer>
        </AboutTextContainer>
      </AboutContentContainer>
    </AboutContainer>
  );
};

export default AboutMe;
