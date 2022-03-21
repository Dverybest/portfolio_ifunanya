import styled from "styled-components";
import {
  Paragraph2,
  Project,
  SubHeadings,
  UnorderedList,
} from "../medisyncPage/style";

export const FlowerImage = styled.img`
  width: 40%;
  float: right;
  margin-right: -2em;

  @media screen and (max-width: 800px) {
    float: unset;
    width: 100%;
    margin: 0em;
  }
`;
export const MeddiumHeader = styled.p`
  font-family: "Rubik";
  font-weight: 500;
  font-size: 1.56em;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  margin-top: 2em;

  @media screen and (max-width: 800px) {
    text-align: left;
    margin-top: 1em;
  }
`;
export const RestyledProject = styled(Project)`
  margin-top: 1em;

  @media screen and (max-width: 800px) {
    margin-top: -6em;
  }
`;
export const RestyledSubHeading = styled(SubHeadings)`
  color: white;

  @media screen and (max-width: 800px) {
    color: #ffefbc;
  }
`;
export const SubHeading2 = styled.p`
  font-family: "Rubik";
  font-weight: 500;
  font-size: 2.25em;
  line-height: 43px;
  color: #ffffff;
  margin-top: 2em;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 1.88em;
    line-height: 36px;
    text-align: left;
  }
`;
export const SubHeading3 = styled(SubHeading2)`
  font-size: 1.56em;
  line-height: 30px;
  margin: 0em;

  @media screen and (max-width: 800px) {
    font-size: 0.88em;
    line-height: 17px;
    padding-left: 0.5em;
  }
`;
export const Ul = styled.ul`
  margin-left: -1.5em;
`;
export const PList = styled.li`
  font-family: "Rubik";
  font-weight: 400;
  font-size: 1em;
  line-height: 24px;
  color: #ffffff;

  @media screen and (max-width: 800px) {
    font-size: 0.75em;
    line-height: 18px;
  }
`;
export const FlexContainer = styled.div`
  width: 95%;
  display: flex;
  margin: 4em auto;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 3em auto;
    width: 100%;

    #hide {
      display: none;
    }
  }
`;
export const Div = styled.div`
  width: 30%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const DottedLine = styled.div`
  width: 100%;
  border-top: dotted 0.1em white;
  margin-top: 0.8em;

  @media screen and (max-width: 800px) {
    margin-top: 0.5em;
  }
`;
export const Paragraph = styled(Paragraph2)`
  text-align: center;

  @media screen and (max-width: 800px) {
    text-align: left;
  }
`;
export const Percent = styled.p`
  font-family: "Rubik";
  font-weight: 700;
  font-size: 2.25em;
  line-height: 43px;
  text-align: center;
  color: #ffffff;
  margin: 0em;

  @media screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`;
export const BoxParagraph = styled(Paragraph)`
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;
export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 4em;

  @media screen and (max-width: 800px) {
    display: block;
    margin-top: 2em;
  }
`;
export const RestyledFlex = styled(FlexBox)`
  width: 100%;
  display: flex;
  flex-shrink: inherit;
  flex-wrap: inherit;
  justify-content: space-between;
  margin-bottom: 5em;

  @media screen and (max-width: 800px) {
    display: flex;
    margin-top: 0em;
  }
`;
export const RestyledUl = styled(UnorderedList)`
  width: 60%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const handleBoxColor = (color) => {
  switch (color) {
    case "purple":
      return " #AD68ED";
    case "navy":
      return "#233466";
    case "blue":
      return "#2097F6";
    case "yellow":
      return "#FAA82D";
  }
};
export const Box = styled.div`
  width: 20%;
  min-height: 10em;
  padding: 1em;
  background: ${({ color }) => handleBoxColor(color)};

  @media screen and (max-width: 800px) {
    padding: 0.2em;
    width: 22%;
  }
`;
export const ImageTag = styled.img`
  width: 100%;
  margin-bottom: 2em;
  margin-top: 1em;
`;
export const DesktopImage = styled(ImageTag)`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const MobileImage = styled(ImageTag)`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
export const FlexImage = styled.img`
  width: 49%;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 1em;
  }
`;
export const TableImage = styled.div`
  width: 80%;
  margin: 2em auto;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0em;
  }
`;
