import styled from "styled-components";
import { Paragraph } from "../../components/header/style";

export const Image = styled.img`
  width: 100%;
  min-height: 10em;
  background-color: #c4c4c450;
`;
export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
`;
export const StyledBackArrow = styled.img`
  width: 1em;
  position: absolute;
  left: 5em;
  top: 3em;

  @media screen and (max-width: 800px) {
    width: 0.6em;
    left: 2em;
    top: 1em;
  }
`;
export const ContainerWithMargin = styled.div`
  width: 90%;
  margin: auto;

  @media screen and (max-width: 800px) {
    margin: auto;
    width: 94%;
  }
`;
export const Title = styled.p`
  font-family: "Rubik";
  font-weight: 600;
  font-size: 1em;
  line-height: 19px;
  color: #ffffff;
`;
export const BoldTitle = styled(Title)`
  font-weight: 700;
`;
export const MediumTitle = styled(Title)`
  font-weight: 500;
`;
export const Paragraph1 = styled(Title)`
  font-weight: 400;
  line-height: 28px;
`;
export const StyledImage = styled.img`
  width: 100%;
  margin: 2em 0em;
  min-height: 5em;
  background-color: #c4c4c450;
`;
export const RestyledImage = styled(StyledImage)`
  width: 50%;
  margin: 0em;
`;
export const Flex = styled.div`
  width: 100%;
  margin-top: 3em;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: block;
    width: 100%;
  }
`;
export const Flex1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5em;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 2em auto;
    width: 90%;
  }
`;
export const Role = styled.div`
  width: 51%;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 2em;
  }
`;
export const Client = styled.div`
  width: 25%;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 2em;
  }
`;
export const Tools = styled.div`
  width: 10%;
  @media screen and (max-width: 800px) {
    width: 15%;
    margin-top: 2em;
  }
  @media screen and (max-width: 500px) {
    width: 25%;
  }
`;
export const StyledFigma = styled.img`
  width: 100%;
  min-height: 3em;
  background: #c4c4c450;
`;
export const Project = styled.div`
  margin: 2em 0em 0em 55em;
  @media screen and (max-width: 1285px) {
    width: 40%;
    margin: -2em 0em 0em 42em;
  }
  @media screen and (max-width: 1030px) {
    margin-left: 34em;
  }
  @media screen and (max-width: 930px) {
    margin: 0em 0em 0em 30em;
  }
  @media screen and (max-width: 830px) {
    margin: -3em 0em 0em 27em;
  }
  @media screen and (max-width: 800px) {
    width: 50%;
    float: right;
    margin-top: -6em;
    margin-bottom: 5em;
  }
  @media screen and (max-width: 550px) {
    margin-top: -5.4em;
  }
  @media screen and (max-width: 500px) {
    margin-top: -6em;
  }
`;
export const Text = styled.p`
  font-family: "Rubik";
  font-size: 1em;
  color: #ffffff;
  font-weight: 400;
  line-height: 24px;
  margin: 0.5em 0em;
  width: 60%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const Text2 = styled(Text)`
  font-family: "Nunito Sans";
`;
export const Paragraph2 = styled(Text)`
  font-family: "Nunito Sans";
  width: 100%;

  @media screen and (max-width: 800px) {
    font-size: 0.8em;
    line-height: 21px;
  }
`;
export const SubHeadings = styled.p`
  font-family: "Rubik";
  font-weight: 700;
  font-size: 1.5em;
  line-height: 30px;
  color: #5f8bd6;
  margin-top: 2em;
`;
export const WhiteSubHeadings = styled(SubHeadings)`
  color: white;
  margin-top: 3em;
  clear: both;
`;
export const ChallengeImg = styled.img`
  width: 35%;
  float: right;
  margin-top: -12em;
  min-height: 10em;

  @media screen and (max-width: 800px) {
    float: unset;
    width: 75%;
    margin: auto;
    display: flex;
  }
`;
const handleBoxColor = (color) => {
  switch (color) {
    case "blue":
      return "#2E6BCA";
    case "green":
      return "#038A8B";
    case "navy":
      return "#243466";
    case "purple":
      return "#7234AC";
  }
};
export const Box = styled.div`
  width: 20%;
  min-height: 13em;
  border-radius: 0.5em;
  padding: 1em;
  background: ${({ color }) => handleBoxColor(color)};

  @media screen and (max-width: 800px) {
    width: 75%;
    margin: 0.2em auto;
  }
`;
export const Icons = styled.img`
  width: 10%;
  color: greeen;
`;
export const UnorderedList = styled.ul`
  margin-left: -1.3em;
`;
export const List = styled.li`
  color: white;
  font-family: "Nunito Sans";
  font-weight: 400;
  font-size: 1em;
  width: 100%;
  line-height: 24px;

  @media screen and (max-width: 800px) {
    font-size: 0.8em;
    line-height: 21px;
  }
`;
export const Circle = styled.div`
  background-color: #2daae2;
  color: white;
  font-family: "Rubik";
  font-weight: 500;
  font-size: 1.5em;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.3em;
  height: 1.3em;
  border-radius: 50%;
  padding: 0.2em;

  @media screen and (max-width: 800px) {
    font-size: 1em;
    padding: 0.4em;
  }
`;
export const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 5em;
`;
export const HorizontalRule = styled.div`
  width: 50%;
  border-top: 1px solid #d8d8d8;
`;
export const Heading = styled.p`
  font-family: "Rubik";
  font-weight: 500;
  color: #2daae2;
  margin-bottom: 0em;
  font-size: 4.5em;
  line-height: 85px;

  @media screen and (max-width: 800px) {
    font-size: 40px;
    line-height: 47px;
  }
`;
export const WhiteHeading = styled(Heading)`
  color: white;
`;
export const Heading2 = styled(SubHeadings)`
  color: white;
  margin-top: 2em;
`;
export const Heading3 = styled(Heading2)`
  font-size: 1.1em;
  line-height: 21px;
`;
export const HorizontalLine = styled.hr`
  background-color: rgba(242, 242, 243, 0.2);
  height: 0.01em;
  border: none;
  margin: 3em 0em 0em 0em;
`;
export const Wrapper = styled.div`
  width: 30%;
  text-align: left;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const handleColor = (color) => {
  switch (color) {
    case "blue":
      return "#2E6BCA";
    case "green":
      return "#1FA0A0";
    case "orange":
      return "#F16529";
  }
};
export const Percent = styled(MediumTitle)`
  font-size: 30px;
  line-height: 36px;
  color: ${({ color }) => handleColor(color)};
`;
export const TextWrap = styled.div`
  width: 100%;
  display: flex;
`;
export const Line = styled.div`
  width: 0.5em;
  height: 3em;
  margin: 0.5em 0.7em 0em 0em;
  background: ${({ color }) => handleColor(color)};
  border-radius: 0.7em;
  clear: both;
`;
export const PrototypeContainer = styled.div`
  margin: 6em;
  @media screen and (max-width: 800px) {
    margin: 1em;
  }
`;
export const DivWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4em;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;
export const RestyledImage2 = styled(StyledImage)`
  width: 55%;
  margin: 0em;
  min-height: 7em;
  border-radius: 0.5em;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const ReversedDiv = styled(DivWrap)`
  flex-direction: row-reverse;
`;
export const TextContainer = styled.div`
  width: 40%;
  margin-top: 3em;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const Heading4 = styled(WhiteHeading)`
  font-size: 3em;
  line-height: 57px;
  margin-top: 2em;

  @media screen and (max-width: 800px) {
    font-size: 1.5em;
    line-height: 28px;
  }
`;
export const DesignersName = styled(Paragraph)`
  color: white;
  margin-left: 3em;
  margin-bottom: 0em;

  @media screen and (max-width: 800px) {
    margin: 0em;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
  }
`;
export const NextProject = styled(DesignersName)`
  line-height: 24px;
  margin: 0em;
  position: absolute;
  right: 3em;

  :hover {
    cursor: pointer;
    color: #3e6adb;
  }

  @media screen and (max-width: 800px) {
    position: unset;
    margin-top: 2em;
  }
`;
export const AshContainer = styled.div`
  width: 100%;
  padding: 2em 0em;
  margin-top: 3em;
  position: relative;
  background: ${(props) => (props.primary ? "black" : "#161616")};
  display: flex;
  flex-direction: column-reverse;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
export const ThanksNote = styled.p`
  font-family: "Rubik";
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
  margin-top: 0em;
  margin: auto;
  margin-bottom: 1.5em;
  justify-content: center;
  color: #ffffff;

  @media screen and (max-width: 800px) {
    margin: 0em;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    margin-bottom: 1em;
  }
`;
export const Div = styled.div`
  width: 95%;
  margin: auto;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0em;
  }
`;
