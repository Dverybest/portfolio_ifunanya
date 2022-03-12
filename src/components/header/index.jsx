import React from "react";
// import { NavLink } from "react-router-dom";
import ContactIcons from "../contactIcons";
import { 
    HeaderContainer,
    HeaderContentWrapper,
    Paragraph,List,
    UnorderedList 
} from "./style";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContentWrapper>
                <Paragraph>Designer_ifuy</Paragraph>
                <UnorderedList>
                    <List>About me</List>
                    <List>Projects</List>
                    <List>Contact me</List>
                </UnorderedList>
                <ContactIcons flex="flex" display="display" margin="margin"/>
            </HeaderContentWrapper>
        </HeaderContainer>
    )
}

export default Header;