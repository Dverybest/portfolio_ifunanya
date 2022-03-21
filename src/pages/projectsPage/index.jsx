import React, { useState } from "react";
import Header from "../../components/header";
import Contact from "../../components/footer";
import CaseStudy from "../../components/caseStudy";
import MockUp from "../../components/mockUp";
import {
  ClassificationText,
  PortfolioClassificationContainer,
  PortfolioContentContainer,
  PortfolioText,
  StyledButton,
} from "../../components/caseStudy/style";
import { Container } from "../firstPage/style";
import { ProjectContainer, RestyledGoBack } from "./style";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [state, setState] = useState(0);
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <RestyledGoBack onClick={() => navigate(-1)}>{"<Go Back"}</RestyledGoBack>
      <ProjectContainer>
        <PortfolioContentContainer>
          <PortfolioText>Projects I worked On</PortfolioText>
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
      </ProjectContainer>
      <RestyledGoBack onClick={() => navigate(-1)}>{"<Go Back"}</RestyledGoBack>
      <Contact />
    </Container>
  );
};

export default Projects;
