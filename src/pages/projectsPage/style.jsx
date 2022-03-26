import styled from "styled-components";
import { PortfolioContainer } from "../../components/caseStudy/style";
import { GoBack } from "../aboutPage/style";

export const RestyledGoBack = styled(GoBack)`
  margin: 1em 0em 0em 3em;
  @media screen and (max-width: 830px) {
    display: none;
  }
`;
export const ProjectContainer = styled(PortfolioContainer)`
  padding-top: 0em;
  margin-top: -2em;
`;
