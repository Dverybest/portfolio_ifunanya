import styled from "styled-components";

export const LetsTalkContainer = styled.div`
width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 1);
`;
export const ContentWrapper = styled.div`
width: 90%;
  color: white;
  display: flex;
  justify-content: space-between;
  margin: 3em;
  padding-bottom: 2em;

  @media screen and (max-width: 800px) {
    display: block;
    margin: 1em;
  }
`;
export const ContactContainer = styled.div`
width: 35%;
  padding: 0em 0.5em;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0em;
  }
`;
export const LetsDiscussContainer = styled.div`
width: 62%;
padding: 0em;

@media screen and (max-width: 800px){
    width: 100%;
    margin-top: 3em;
} 
`;
export const VerticalLine = styled.div`
float: left;
  width: 0.1em;
  background: white;
  height: 20em;
  margin: 7.2em 0em 0em 3em;

  @media screen and (max-width: 1025px){
    height: 22em;
  }
  @media screen and (max-width: 920px) {
      height: 21.5em;
  }
  @media screen and (max-width: 800px){
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

  @media screen and (max-width: 800px) 
`;
export const ContactInfo = styled.p`
font-size: 1em;
  line-height: 24px;
  font-family: "rubik";
  color: #ffffff;
  margin-top: -1em;
  margin-bottom: 3em;

  @media screen and (max-width: 800px){
    margin-bottom: 2em;
  }
`;
export const ContactInfoContainer = styled.div`
padding-top: 1.5em;

@media screen and (max-width: 800px){
    padding-top: .5em;
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
    font-size: 1em;
    line-height: 21px;
    width: 80%;
  }
`;
export const Form = styled.div`
display: flex;
  margin-bottom: 2em;

  @media screen and (max-width: 800px){
    display: block;
  } 
`;
export const InputContainer = styled.div`
width: 50%;

@media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 2em;
}
`;
export const InputDescription = styled.p`
color: white;
  line-height: 24px;
  font-size: 1em;
  font-family: "rubik";
`;
export const Input = styled.input`
width: 85%;
  padding: 1em;
  border-radius: 0.5em;
  border: none;
  color: white;
  background: rgba(34, 34, 34, 1);

  @media screen and (max-width: 800px){
    width: 94%;
  } 
`;
export const TextArea = styled.textarea`
width: 93%;
  padding: 1em;
  border-radius: 0.5em;
  background: rgba(34, 34, 34, 1);
  border: none;
`