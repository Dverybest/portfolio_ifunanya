import styled from "styled-components";

export const ContactIconsWrapper = styled.div`
  display: flex;
  margin: auto 0em;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const ContactIconsImage = styled.img`
  margin-left: ${(props) => (props.margin ? "1.5em" : "none")};
  width: 1.5em;
  padding-right: ${(props) => (props.padding ? "1.5em" : "none")};

  @media screen and (max-width: 920px) {
    width: 1.2em;
  }
  @media screen and (max-width: 380px) {
    padding-right: 1em;
  }
  @media screen and (max-width: 300px) {
    width: 1em;
  }
`;
