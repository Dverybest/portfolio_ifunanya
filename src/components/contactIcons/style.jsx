import styled from "styled-components";


export const ContactIconsWrapper = styled.div`
display: ${(props) => (props.flex ? "flex" : "block" )};

@media screen and (max-width: 800px){
  display: ${(props) => (props.display ? "none" : "block" )};
  }

@media screen and (max-width: 550px){
  position: ${(props) => (props.position ? "absolute" : "none" )};
    bottom:${(props) => (props.bottom ? "0em" : "none" )} ;
    left: ${(props) => (props.left ? "50%" : "none" )};
    transform: ${(props) => (props.transform ? "translate(-50%)" : "none" )};
}
`;
export const ContactIconsImage = styled.img`
margin-left: ${(props) => (props.margin ? "1.5em" : "none" )};
width: 1.5em;
padding-right: ${(props) => (props.padding ? "1.5em" : "none" )};

@media screen and (max-width: 380px){
  padding-right: 1em;
  }
@media screen and (max-width: 300px){
  width: 1em;
}
`;