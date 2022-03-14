import styled from "styled-components";
import { PortfolioContainer } from "../../components/caseStudy/style";
import { GoBack } from "../aboutPage/style";

export const RestyledGoBack = styled(GoBack)`
  margin: 3em;
  @media screen and (max-width: 800px) {
    margin: 1em;
  }
`;
export const ProjectContainer = styled(PortfolioContainer)`
  padding-top: 0em;
  margin-top: -2em;
`;
