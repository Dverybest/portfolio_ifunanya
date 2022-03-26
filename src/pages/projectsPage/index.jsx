import React from "react";
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
import { Container } from "../homePage/style";
import { ProjectContainer, RestyledGoBack } from "./style";
import { useNavigate, useParams } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const params = useParams();

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
                navigate("/projects");
              }}
              active={params["*"] === ""}
            >
              <ClassificationText> Case Studies</ClassificationText>
            </StyledButton>
            <StyledButton
              onClick={() => {
                navigate("/projects/mockups");
              }}
              active={params["*"] === "mockups"}
            >
              <ClassificationText> Mockups</ClassificationText>
            </StyledButton>
          </PortfolioClassificationContainer>
          {params["*"] === "" ? <CaseStudy /> : <MockUp />}
        </PortfolioContentContainer>
      </ProjectContainer>
      <RestyledGoBack onClick={() => navigate(-1)}>{"<Go Back"}</RestyledGoBack>
      <Contact />
    </Container>
  );
};

export default Projects;
