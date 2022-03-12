import styled from "styled-components";
import ContactIcons from "../contactIcons";
import { ContactIconsImage, ContactIconsWrapper } from "../contactIcons/style";

export const WelcomeContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 1);
`;
export const WelcomeTextImage = styled.img`
  width: 80%;
  opacity: 80%;
  position: absolute;
  right: 0em;
  top: 0em;

  @media screen and (max-width: 550px){
    display: none;
}
`;
export const WelcomeLine = styled.div`
    width: 22%;
    padding: 0.01em;
    background-color: #ffce31;
    position: relative;
    top: 6em;

    @media screen and (max-width: 920px){
        top: 4em;
    }
    @media screen and (max-width: 550px){
        display: none;
    }
`;
export const NameContainer = styled.div`
width: 55%;
position: absolute;
left: 7em;
top: 1.5em;
text-align: left;

@media screen and (max-width: 1025px) {
      top: 0em;
    }
@media screen and (max-width: 920px){
    left: 6em;
}
@media screen and (max-width: 550px){
    position: unset;
    width: 100%;
    text-align: center;
}
`;
export const NameParagraph = styled.p`
  color: #3e6adb;
  font-size: 4em;
  line-height: 78px;
  margin: 0.3em 0em;
  font-weight: 700;
  font-family: "Montserrat";

  @media screen and (max-width: 1025px){
    font-size: 3em;
  }
  @media screen and (max-width: 920px){
    font-size: 2.2em;
  }
  @media screen and (max-width: 500px){
    font-size: 1.7em;
    line-height: 33px;
  }
  @media screen and (max-width: 300px){
    font-size: 1.5em
  }
`;
export const ProfessionParagraph = styled.p`
  color: white;
  font-size: 2.3em;
  line-height: 54px;
  font-family: "poppins";
  font-weight: regular;

  @media screen and (max-width: 1025px){
    font-size: 1.6em;
  }
  @media screen and (max-width: 920px){
    font-size: 1.2em;
  }
  @media screen and (max-width: 500px){
    font-size: 1em;
    line-height: 24px;
    margin-bottom: 0em;
  }
`;
export const StyledNameWrapper = styled.img`
  width: 46em;
  position: relative;
  top: 8em;
  left: -2.2em;

  @media screen and (max-width: 1025px){
    top: 7.5em;
    width: 35em;
  }
  @media screen and (max-width: 920px){
    width: 28em;
    top: 6.5em;
  }
  @media screen and (max-width: 550px){
    width: 82%;
    position: relative;
    top: 6em;
    left: 0em;
  }
  @media screen and (max-width: 500px){
    top: 3.6em;
    width: 85%;
  }
  @media screen and (max-width: 300px){
    width: 100%;
  }
`;
export const ImageContainer = styled.div`
text-align: right;
margin-top: 4em;

@media screen and (max-width: 550px){
    margin-top: 0em;
}
`;
export const StyledImage = styled.img`
width: 70%;

@media screen and (max-width: 550px){
    width: 100%;
}
`;
export const ImageLine = styled.div`
  width: 14em;
  padding: 0.01em;
  background-color: #02ccce;
  position: absolute;
  right: 0em;
  bottom: 5em;
  opacity: 50%;
  
  @media screen and (max-width: 920px){
    bottom: 3.5em;
    width: 10em;
  }
  @media screen and (max-width: 550px){
      display: none;
  }
  
`;
