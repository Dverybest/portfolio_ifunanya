import styled from "styled-components";

export const AboutContainer = styled.div`
background-color: black;
  position: relative;
`;
export const AboutContentContainer = styled.div`
margin: 3em;
display: flex;
justify-content: space-around;

@media screen and (max-width: 800px){
    margin: 1em;
    display: block;
}
`;
export const AboutMeContainer = styled.div`
width: 20%;

@media screen and (max-width: 800px){
    width: 100%;
}
`;
export const AboutMeParagraph = styled.p`
 font-size: 2.3em;
  line-height: 54px;
  color: #3e6adb;
  font-weight: 500;
  font-family: "poppins";

  @media screen and (max-width: 800px){
    font-size: 1.5em;
    line-height: 30px;
  }
`;
export const AboutTextContainer = styled.div`
  width: 65%;
  text-align: left;

  @media screen and (max-width: 800px){
    width: 100%;
  }
`;
export const FirstParagraph = styled.p`
  font-size: 1.5em;
  line-height: 36px;
  width: 90%;
  font-weight: 400;
  font-family: "poppins";
  color: white;

  @media screen and (max-width: 800px){
    width: 100%;
    font-weight: 500;
    font-size: 0.7em;
    line-height: 21px;
  }
`;
export const Paragraphs = styled.p`
  font-size: 1em;
  line-height: 24px;
  color: white;
  font-family: "rubik";
  font-weight: 400;

@media screen and (max-width: 800px){
    font-size: 0.7em;
    line-height: 24px;
}
`
export const AboutButtonsContainer = styled.div`
@media screen and (max-width: 800px){
    width: 100%;
    display: flex;
    justify-content: space-between;
}
`