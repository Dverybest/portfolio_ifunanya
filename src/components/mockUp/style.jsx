import styled from "styled-components";

export const RowContainer = styled.div`
display: flex;
  justify-content: space-between;
  margin-bottom: 4em;

  @media screen and (max-width: 800px){
    display: block;
    margin: 0em;
  }
`;
export const MockUpImageContainer= styled.div`
width: 49%;

@media screen and (max-width: 800px){
    width: 100%;
    margin-bottom: 4em;
}
`;
export const MockUpImages = styled.img`
width: 100%;
`;
export const ImageDescription = styled.p`
font-size: 1.5em;
  color: #ffffff;
  line-height: 36px;
  text-align: left;
  font-weight: 600;
  font-family: "poppins";

  @media screen and (max-width: 800px){
    font-size: 1.2em;
  }
`