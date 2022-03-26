import styled from "styled-components";
import { StyledButton } from "../button";
import ContactIcons from "../contactIcons";

export const LetsTalkContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  margin-top: 5em;
  background: rgba(0, 0, 0, 1);

  @media screen and (max-width: 800px) {
    margin-top: 3em;
  }
`;
export const ContentWrapper = styled.div`
  width: 90%;
  color: white;
  display: flex;
  padding-bottom: 1em;

  @media screen and (max-width: 800px) {
    display: block;
    margin: 1em;
  }
`;
export const ContactContainer = styled.div`
  width: 35%;
  padding-right: 1em;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: -1em;
  }
`;
export const LetsDiscussContainer = styled.div`
  width: 60%;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 3em;
  }
`;
export const VerticalLine = styled.div`
  float: left;
  width: 0.1em;
  background: white;
  height: 18em;
  margin: 0em 1em 0em 3em;

  @media screen and (max-width: 1025px) {
    height: 22em;
  }
  @media screen and (max-width: 920px) {
    height: 21.5em;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const ContactText = styled.p`
  font-size: 4em;
  font-weight: 500;
  font-family: "poppins";
  line-height: 96px;
  margin: 0em;

  @media screen and (max-width: 800px) {
    font-size: 1.5em;
    line-height: 36px;
  }
`;
export const Paragraph = styled.p`
  font-size: 1em;
  color: #b6b6b6;
  line-height: 24px;
  font-family: "rubik";

  @media screen and (max-width: 800px) {
    font-size: 0.85em;
    margin-bottom: 0em;
  }
`;
export const ContactInfo = styled.p`
  font-size: 1em;
  line-height: 24px;
  font-family: "rubik";
  color: #ffffff;
  margin-top: -1em;
  margin-bottom: 3em;

  @media screen and (max-width: 800px) {
    font-size: 0.85em;
    margin-top: 0.1em;
    margin-bottom: 2em;
  }
`;
export const ContactInfoContainer = styled.div`
  width: 90%;
  display: flex;

  @media screen and (max-width: 800px) {
    display: block;
    margin: 1em;
  }
`;
export const Div = styled.div`
  width: 35%;
  padding-right: 1em;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const FormDescription = styled.p`
  font-size: 1.5em;
  font-weight: 500;
  font-family: "poppins";
  line-height: 36px;
  color: #ffffff;
  width: 100%;

  @media screen and (max-width: 800px) {
    font-size: 0.85em;
    line-height: 21px;
    width: 80%;
  }
`;
export const RestyledContactIcons = styled(ContactIcons)`
  display: block;
`;
export const Button = styled(StyledButton)`
  :hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 800px) {
    font-size: 0.85em;
  }
`;
