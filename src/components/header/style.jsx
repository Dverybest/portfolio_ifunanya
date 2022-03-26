import styled from "styled-components";
import ContactIcons from "../contactIcons";

export const HeaderContainer = styled.div`
  background: #121a34;
  width: 100%;
`;

export const HeaderContentWrapper = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  color: white;

  @media screen and (max-width: 920px) {
    width: 90%;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.5em;
  line-height: 36px;
  font-family: "poppins";
  font-weight: 400;
  @media screen and (max-width: 920px) {
    font-size: 1.2em;
  }
  @media screen and (max-width: 800px) {
    font-size: 1em;
  }
`;
export const List = styled.li`
  display: inline;
  font-size: 1em;
  font-family: "poppins";
  font-weight: 400;
  line-height: 27px;
  @media screen and (max-width: 920px) {
    font-size: 0.8em;
  }
`;
export const UnorderedList = styled.ul`
  text-decoration: none;
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1025px) {
    width: 40%;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
