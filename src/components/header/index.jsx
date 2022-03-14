import React from "react";
import { StyledNavLink } from "../caseStudy/style";
import ContactIcons from "../contactIcons";
import {
  HeaderContainer,
  HeaderContentWrapper,
  Paragraph,
  List,
  UnorderedList,
} from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContentWrapper>
        <Paragraph>Designer_ifuy</Paragraph>
        <UnorderedList>
          <StyledNavLink to="/aboutme" active>
            <List>About me</List>
          </StyledNavLink>
          <StyledNavLink to="/projects" active>
            <List>Projects</List>
          </StyledNavLink>
          <StyledNavLink to="/contact_me" active>
            <List>Contact me</List>
          </StyledNavLink>
        </UnorderedList>
        <ContactIcons margin="margin" />
      </HeaderContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
