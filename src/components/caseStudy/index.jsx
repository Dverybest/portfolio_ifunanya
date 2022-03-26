import React from "react";
import Medisync from "../../asset/images/medisync.svg";
import BlackGold from "../../asset/images/black_gold.png";
import { StyledButton } from "../button";
import {
  BigImageContainer,
  TextContainer,
  FirstParagraph,
  Image,
  SecondParagraph,
  ViewOthersContainer,
  StyledNavLink,
} from "./style";
import { useNavigate } from "react-router-dom";

const CaseStudy = () => {
  const navigate = useNavigate();

  return (
    <>
      <BigImageContainer>
        <Image
          src={BlackGold}
          loading="lazy"
          onClick={() => navigate("/black_gold")}
        />
        <TextContainer>
          <FirstParagraph>Black Gold</FirstParagraph>
          <SecondParagraph>
            An investment platform that shows different investment opportunities
            that allow people invest through the platform
          </SecondParagraph>
          <StyledButton onClick={() => navigate("/black_gold")}>
            Project details
          </StyledButton>
        </TextContainer>
      </BigImageContainer>
      <BigImageContainer>
        <Image
          src={Medisync}
          loading="lazy"
          onClick={() => navigate("/medisync")}
        />
        <TextContainer>
          <FirstParagraph>Medisync</FirstParagraph>
          <SecondParagraph>
            A health social media platform that connects medical specialist and
            enables consultations
          </SecondParagraph>
          <StyledButton onClick={() => navigate("/medisync")}>
            Project details
          </StyledButton>
        </TextContainer>
      </BigImageContainer>
      <ViewOthersContainer>
        <StyledNavLink to="/projects/mockups" activeClassName="true">
          View Others
        </StyledNavLink>
      </ViewOthersContainer>
    </>
  );
};

export default CaseStudy;
