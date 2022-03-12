import styled from "styled-components";

export const HeaderContainer = styled.div`
background: #121a34;
width: 100%;
`;

export const HeaderContentWrapper = styled.div`
  margin: auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
  color: white;

  @media screen and (max-width: 920px){
    width: 90%;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.5em;
  line-height: 36px;
  font-family: "poppins";
  font-weight: 400;

  @media screen and (max-width: 800px){
    font-size: 1em;
  }
`;
export const List = styled.li`
  display: inline;
  font-size: 1em;
  font-family: "poppins";
  font-weight: 400;
  line-height: 27px; 
`;
export const UnorderedList = styled.ul`
  text-decoration: none;
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 920px){
    width: 35%;
  }
  @media screen and (max-width: 800px){
    display: none;
  }
` 