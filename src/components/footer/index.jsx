import React from "react";
import {
  LetsTalkContainer,
  ContentWrapper,
  VerticalLine,
  ContactContainer,
  LetsDiscussContainer,
  ContactText,
  Paragraph,
  ContactInfo,
  FormDescription,
  Div,
  ContactInfoContainer,
  RestyledContactIcons,
  Button,
} from "./style";

const Contact = () => {
  return (
    <LetsTalkContainer>
      <VerticalLine />

      <ContentWrapper>
        <ContactContainer>
          <ContactText>Contact</ContactText>
          <Paragraph>
            I am always looking for great collaborations,
            <br /> lets discuss and make something together
          </Paragraph>
        </ContactContainer>
        <LetsDiscussContainer>
          <FormDescription>
            Have any project in your mind?
            <span style={{ color: "#567DE0" }}> Let’s discuss</span> the project
          </FormDescription>
          <a href="mailto:nzewlifunanya@gmail.com">
            <Button primary>Send me a mail</Button>
          </a>
        </LetsDiscussContainer>
      </ContentWrapper>
      <ContactInfoContainer>
        <Div>
          <Paragraph>Email </Paragraph>
          <ContactInfo>nzewlifunanya@gmail.com</ContactInfo>
        </Div>
        <Div>
          <Paragraph>Phone No: </Paragraph>
          <ContactInfo> +234 9073 168 4689</ContactInfo>
        </Div>
        <RestyledContactIcons padding="padding" />
      </ContactInfoContainer>
    </LetsTalkContainer>
  );
};

export default Contact;
