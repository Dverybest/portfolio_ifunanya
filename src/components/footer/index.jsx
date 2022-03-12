import React from "react";
import  { StyledButton } from "../button";
import ContactIcons from "../contactIcons";
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
    InputContainer,
    Form,
    InputDescription,
    Input,
    TextArea,
    ContactInfoContainer
 } from "./style";

const Contact = ({image}) => {
    return(
        <LetsTalkContainer>
                <VerticalLine/>
        
                <ContentWrapper>
                    <ContactContainer>
                            <ContactText>Contact</ContactText>
                            <Paragraph>
                                I am always looking for great collaborations, 
                                lets discuss and make something together
                            </Paragraph>
                            <ContactInfoContainer>
                                    <Paragraph>Email </Paragraph>
                                    <ContactInfo>nzewlifunanya@gmail.com</ContactInfo>
                                    
                                    <Paragraph>Phone No: </Paragraph>
                                    <ContactInfo> +234 089 291 1389</ContactInfo>
                                    <ContactIcons padding="padding"/>
                            </ContactInfoContainer>
                    </ContactContainer>
                    
                    <LetsDiscussContainer>   
                            <FormDescription>
                                Have any project in your mind? 
                                <span style={{color:'#567DE0'}}> Let’s discuss</span> the project
                            </FormDescription>
                        <div className="form-container">    
                            <Form >
                                <InputContainer>
                                    <InputDescription>Full Name</InputDescription>
                                    <Input 
                                        type='text' 
                                        placeholder="Enter your full name"
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <InputDescription>Email</InputDescription>
                                    <Input 
                                        type='email' 
                                        placeholder="Enter your email"
                                    />
                                </InputContainer>    
                            </Form>
                            <InputDescription>Message</InputDescription>
                            <TextArea 
                                name="message" rows='10' cols="30"
                                placeholder="Your message" >
                            </TextArea>
                            <StyledButton primary >Send Message</StyledButton> 
                        </div>
                    </LetsDiscussContainer>

                </ContentWrapper>
        </LetsTalkContainer>
    )
}

export default Contact;