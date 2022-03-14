import React, { useState } from "react";
import AboutMe from "../../components/aboutMe";
import Contact from "../../components/footer";
import WelcomePage from "../../components/welcome";
import Header from "../../components/header";
import CaseStudy from "../../components/caseStudy";
import MockUp from "../../components/mockUp";
import {
  ClassificationText,
  PortfolioClassificationContainer,
  PortfolioContainer,
  PortfolioContentContainer,
  PortfolioText,
  StyledButton,
} from "../../components/caseStudy/style";

const FirstLandingPage = () => {
  const [state, setState] = useState(0);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      <WelcomePage />
      <AboutMe />
      <PortfolioContainer>
        <PortfolioContentContainer>
          <PortfolioText>Portfolio</PortfolioText>
          <PortfolioClassificationContainer>
            <StyledButton
              onClick={() => {
                setState(0);
              }}
              active={state === 0}
            >
              <ClassificationText> Case Studies</ClassificationText>
            </StyledButton>
            <StyledButton
              onClick={() => {
                setState(1);
              }}
              active={state === 1}
            >
              <ClassificationText> Mockups</ClassificationText>
            </StyledButton>
          </PortfolioClassificationContainer>
          {state === 0 ? <CaseStudy /> : <MockUp />}
        </PortfolioContentContainer>
      </PortfolioContainer>
      <Contact />
    </div>
  );
};

export default FirstLandingPage;
