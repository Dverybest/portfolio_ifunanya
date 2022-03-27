import styled from "styled-components";
import { StyledButton } from "../../components/button";
import ContactIcons from "../../components/contactIcons";
import { WelcomeLine } from "../../components/welcome/style";

export const MoreAboutMeContainer = styled.div`
  background: black;
  color: white;
`;
export const GoldenLine = styled(WelcomeLine)`
  top: 4.5em;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const MoreAboutMeContentContainer = styled.div`
  margin: 2em 5.5em;

  @media screen and (max-width: 800px) {
    margin: 1em;
  }
`;
export const ContainerWithMargin = styled.div`
  margin: -2em 3em 9em 3em;
  position: relative;

  @media screen and (max-width: 800px) {
    margin: 0em 0em 5em 0em;
  }
`;
export const ImageContainer = styled.div`
  display: none;
  @media screen and (max-width: 830px) {
    display: block;
    position: relative;
    width: 100%;
    min-height: 10em;

    img {
      width: 100%;
      margin: 0em 0em -0.2em -0.2em;
    }
  }
`;
export const AboutStyledImage = styled.img`
  width: 100%;
  float: right;
  margin: -8em -8.5em 17em 0em;
  min-height: 40em;

  @media screen and (max-width: 1030px) {
    margin-bottom: 33em;
    min-height: 30em;
  }
  @media screen and (max-width: 915px) {
    margin-bottom: 42em;
    min-height: 26em;
  }
  @media screen and (max-width: 830px) {
    display: none;
  }
`;
export const SubTitles = styled.h2`
  color: #6d8fe6;
  line-height: 54px;
  font-weight: 500;
  font-family: "poppins";
  font-size: 2.3em;

  @media screen and (max-width: 800px) {
    line-height: 30px;
    font-size: 1.3em;
  }
`;
export const Paragraph = styled.p`
  font-size: 1em;
  font-family: "Rubik";
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => (props.color ? "gold" : "white")};

  @media screen and (max-width: 800px) {
    font-size: 0.8em;
    color: white;
  }
`;
export const ParagraphContainer = styled.div`
  width: 55%;
  text-align: left;
  position: absolute;
  top: 0em;

  @media screen and (max-width: 1030px) {
    width: 65%;
  }
  @media screen and (max-width: 830px) {
    position: unset;
    width: 100%;
  }
`;
export const ParagraphContainer2 = styled(ParagraphContainer)`
  top: 12.5em;

  @media screen and (max-width: 1030px) {
    top: 15.5em;
  }
  @media screen and (max-width: 920px) {
    top: 17em;
  }
`;
export const SkillButton = styled(StyledButton)`
  width: unset;
  height: unset;
  border: none;
  background: rgba(62, 106, 219, 0.3);
  color: white;
  border-radius: 0.3em;
  padding: 0.8em 1.5em;
  :hover {
    cursor: unset;
    background: rgba(62, 106, 219, 0.3);
  }
`;
export const SkillsContainer = styled.div`
  width: 96%;
  margin: 5em 0em;
  clear: both;
`;
export const SkillTitle = styled.p`
  font-size: 1.5em;
  font-weight: 500;
  font-family: "poppins";
  line-height: 36px;
  margin: 2em 0em 0.5em 0em;

  @media screen and (max-width: 800px) {
    line-height: 24px;
    font-size: 1em;
  }
`;
export const ExperienceRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3em;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
export const WorkPlacesContainer = styled.div`
  width: 40%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const WorkDetailContainer = styled.div`
  width: 45%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const Company = styled.p`
  font-size: 1.9em;
  font-weight: 700;
  font-family: "Poppins";
  line-height: 45px;
  margin: 0em;

  @media screen and (max-width: 800px) {
    font-size: 1.2em;
    line-height: 32px;
  }
`;
export const Work = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1.5em;
  line-height: 36px;
  margin: 0em 0em;

  @media screen and (max-width: 800px) {
    font-size: 0.85em;
    line-height: 21px;
    margin: 0.5em 0em;
  }
`;
export const WorkDuration = styled(Work)`
  font-weight: 300;
  color: #cbcccf;

  @media screen and (max-width: 800px) {
    margin-bottom: 2em;
  }
`;
export const CompanyDescription = styled(Paragraph)`
  margin-top: 0em;
  line-height: 11px;
`;
export const ClientContentWrapper = styled.div`
  margin: 6em 0em;
`;
export const ClientsContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  @media screen and (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const Clients = styled(Company)`
  font-size: 1.5em;
  line-height: 36px;
  color: #cbcccf;
  margin: 0.5em 0em;

  @media screen and (max-width: 800px) {
    font-size: 0.85em;
    margin: 1em 0em;
  }
`;
export const GoBack = styled.button`
  color: #b6b6b6;
  background-color: transparent;
  border: none;

  @media screen and (max-width: 830px) {
    display: none;
  }
`;
export const AboutIcons = styled(ContactIcons)`
  display: none;
  @media screen and (max-width: 830px) {
    display: flex;
    position: absolute;
    bottom: 0em;
    left: 50%;
    transform: translate(-50%);

    img {
      width: 1.5em;
    }
  }
`;
