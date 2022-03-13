import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/aboutme">
            <List>About me</List>
          </NavLink>
          <List>Projects</List>
          <List>Contact me</List>
        </UnorderedList>
        <ContactIcons margin="margin" />
      </HeaderContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
