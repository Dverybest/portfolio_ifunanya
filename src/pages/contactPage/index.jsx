import React from "react";
import Header from "../../components/header";
import Contact from "../../components/footer";
import { Container } from "../firstPage/style";
import { StyledLink } from "../aboutPage/style";
import { RestyledGoBack } from "../projectsPage/style";

const ContactMe = () => {
  return (
    <Container>
      <Header />
      <StyledLink to="/">
        <RestyledGoBack> {"<Go Back"} </RestyledGoBack>
      </StyledLink>
      <Contact />
    </Container>
  );
};

export default ContactMe;
