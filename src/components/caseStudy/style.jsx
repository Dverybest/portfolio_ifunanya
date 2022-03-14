import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PortfolioContainer = styled.div`
  background-color: black;
  padding: 1em 0em 0em 0em;
`;
export const PortfolioContentContainer = styled.div`
  margin: 3em;

  @media screen and (max-width: 800px) {
    margin: 1em;
  }
`;
export const PortfolioText = styled.p`
  text-align: center;
  font-size: 3em;
  font-weight: 500;
  line-height: 72px;
  color: #3e6adb;
  font-weight: 500;
  font-family: "poppins";

  @media screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`;
export const PortfolioClassificationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3em;

  @media screen and (max-width: 800px) {
    margin-bottom: 1em;
    margin-top: -2em;
  }
`;
export const ClassificationText = styled.p`
  margin: 0.5em;
  font-weight: 400;
  font-size: 1.5em;
  font-family: "poppins";
  line-height: 36px;

  @media screen and (max-width: 800px) {
    font-size: 0.9em;
  }
  @media screen and (max-width: 300px) {
    font-size: 0.7em;
  }
`;
export const StyledButton = styled.button`
  color: ${(props) => (props.active ? "#567de0" : "white")};
  text-decoration: none;
  outline: none;
  border: none;
  background: transparent;
  ${ClassificationText} {
    border-bottom-style: ${(props) => (props.active ? "solid" : "unset")};
    font-weight: ${(props) => (props.active ? 600 : 400)};
  }
`;
export const BigImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5em;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
export const Image = styled.img`
  width: 60%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const TextContainer = styled.div`
  width: 30%;
  text-align: left;
  margin-top: 5em;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0em;
  }
`;
export const FirstParagraph = styled.p`
  font-size: 2.3em;
  font-weight: 700;
  font-family: "poppins";
  color: white;
  line-height: 54px;
  margin: 0em;

  @media screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`;
export const SecondParagraph = styled.p`
  font-size: 1em;
  font-weight: regular;
  color: #ffffff;
  line-height: 24px;
  font-family: "rubik";

  @media screen and (max-width: 800px) {
    font-size: 0.9em;
  }
`;
export const ViewOthersContainer = styled.div`
  background-color: #121212;
  text-align: center;
  font-size: 1.2em;
  font-family: "rubik";
  color: #ffffff;
  line-height: 24px;
  font-weight: 400;
  padding: 1em;
  text-decoration: underline;

  @media screen and (max-width: 800px) {
    background-color: black;
    margin-top: -2em;
  }
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    color: #567de0;
  }
`;
