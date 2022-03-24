import React from "react";
import Header from "../../components/header";
import Contact from "../../components/footer";
import { Container } from "../firstPage/style";
import { useNavigate } from "react-router-dom";
import { RestyledGoBack } from "../projectsPage/style";

const ContactMe = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <RestyledGoBack onClick={() => navigate(-1)}>{"<Go Back"}</RestyledGoBack>
      <Contact />
    </Container>
  );
};

export default ContactMe;
