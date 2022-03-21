import React from "react";
import Header from "../../components/header";
import Contact from "../../components/footer";
import Medisync from "../../asset/images/medisync2.svg";
import BackArrow from "../../asset/images/back_arrow.png";
import Figma from "../../asset/images/figma.png";
import Define from "../../asset/images/define_img.svg";
import Ideate1 from "../../asset/images/ideate1.svg";
import Ideate2 from "../../asset/images/ideate2.svg";
import UserFlow from "../../asset/images/user_flow.svg";
import WireFrame from "../../asset/images/wire_frame.svg";
import DesignSystem from "../../asset/images/design_sys.svg";
import ChallengeImage from "../../asset/images/challenge_img.png";
import Prototype from "../../asset/images/prototype.png";
import SignIn from "../../asset/images/sign_in.png";
import Newsfeed from "../../asset/images/news_feed.png";
import Chat from "../../asset/images/chat.png";
import Consultation from "../../asset/images/consultation.png";
import Profile from "../../asset/images/profile.png";
import Love from "../../asset/images/love.png";
import Pen from "../../asset/images/pen.png";
import Light from "../../asset/images/light.png";
import Note from "../../asset/images/note.png";
import ResearchImage from "../../asset/images/research_img.svg";
import { Container } from "../firstPage/style";
import {
  Image,
  Title,
  BoldTitle,
  MediumTitle,
  Paragraph1,
  StyledImage,
  Flex,
  Role,
  Client,
  Tools,
  Project,
  Text,
  SubHeadings,
  WhiteSubHeadings,
  ChallengeImg,
  Box,
  Icons,
  List,
  ContainerWithMargin,
  Paragraph2,
  Circle,
  Wrap,
  Heading,
  Heading2,
  Heading3,
  Percent,
  Wrapper,
  Line,
  TextWrap,
  HorizontalLine,
  RestyledImage,
  WhiteHeading,
  DivWrap,
  TextContainer,
  DesginersName,
  AshContainer,
  ThanksNote,
  ReversedDiv,
  PrototypeContainer,
  Heading4,
  RestyledImage2,
  Flex1,
  UnorderedList,
  Div,
  StyledBackArrow,
  StyledFigma,
  Text2,
  ImageContainer,
  HorizontalRule,
} from "./style";
import { useNavigate } from "react-router-dom";

const Medysinc = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <ImageContainer>
        <Image src={Medisync} />
        <StyledBackArrow src={BackArrow} onClick={() => navigate("/")} />
      </ImageContainer>
      <ContainerWithMargin>
        <Flex>
          <Role>
            <Title>ROLE/TEAM</Title>
            <Paragraph1>
              I worked as a user interface and experience designer, I conducted
              design process through research and ideation as well as created
              low and highfidelity prototype for both to create a final result
              for our users
            </Paragraph1>
          </Role>
          <Client>
            <BoldTitle>CLIENT/DATE/DURATION</BoldTitle>
            <Paragraph1>
              I took a period of one month to bring about the deliverables
            </Paragraph1>
          </Client>
          <Tools>
            <MediumTitle>TOOLS</MediumTitle>
            <StyledFigma src={Figma} />
          </Tools>
        </Flex>
        <Project>
          <BoldTitle>PROJECT STATUS</BoldTitle>
          <Paragraph1>In Development</Paragraph1>
        </Project>
        <SubHeadings>The Challenge</SubHeadings>
        <Text>
          The practice of medicine often presents us with a diagnostic dilemma.
          In developed nations with systems such as the NHS (National Health
          Service in England), the robustness of the system ensures there is a
          network of specialists who can be consulted to solve these problems.
          Unfortunately this is not the same for many developing nations.
          Clinicians when faced with these difficult cases would have to rely on
          their own brilliance to solve these problems as there is no network to
          fall back to. These heroic acts are often beset with failures and poor
          patient outcomes.
        </Text>
        <ChallengeImg src={ChallengeImage} />
        <SubHeadings>The Goal</SubHeadings>
        <Text2>
          To create a system that enable networking among medical specialist to
          enable sharing of knowledge and consultation among them to enhance
          more productivity and problem solving in any medical case
        </Text2>
        <Text>The system should:</Text>
        <UnorderedList>
          <List>
            Create a social network for medical practioners to interact
          </List>
          <List>
            Enable specialists ask other specialists questions to tackle medical
            cases
          </List>
          <List>
            Allow for mentorship between junior and senior medical practitioners
          </List>
        </UnorderedList>
        <WhiteSubHeadings>User Centered Design Process</WhiteSubHeadings>
        <Text2>
          I went through these design processes to ensure proper understanding
          of the client expectations and research on user needs, using design
          methods indicated below to create a highly usable and accesible
          product
        </Text2>
        <Flex1>
          <Box color="blue">
            <Icons src={Love} />
            <MediumTitle>Empathise</MediumTitle>
            <UnorderedList>
              <List>Stalkholder Interview</List>
              <List>User Research</List>
            </UnorderedList>
          </Box>
          <Box color="green">
            <Icons src={Pen} />
            <MediumTitle>Define</MediumTitle>
            <UnorderedList>
              <List>User Persona</List>
            </UnorderedList>
          </Box>
          <Box color="navy">
            <Icons src={Light} />
            <MediumTitle>Ideate</MediumTitle>
            <UnorderedList>
              <List>User stories</List>
              <List>Feature breakdown</List>
              <List>Information Architecture</List>
              <List>User-flow diagram</List>
            </UnorderedList>
          </Box>
          <Box color="purple">
            <Icons src={Note} />
            <MediumTitle>Prototype</MediumTitle>
            <UnorderedList>
              <List>Low fidelity prototype</List>
              <List>High fidelity prototype</List>
            </UnorderedList>
          </Box>
        </Flex1>
        <Wrap>
          <HorizontalRule />
          <Circle>1</Circle>
          <HorizontalRule />
        </Wrap>
        <Heading>Empathise</Heading>
        <Paragraph2>
          This process is to enable me understand the product and the users of
          the product
        </Paragraph2>
        <Heading2>Stalkholder Interview</Heading2>
        <Paragraph2>
          I was part of a meeting with the product owners to understand their
          expectations, pains and needs of the project to be in the same page
          and feel there emotions regarding the product, I asked the following
          question
        </Paragraph2>
        <UnorderedList>
          <List>What are the possible problem that inspired this idea</List>
          <List>What are the goal of the product</List>
          <List>
            Explain the expected workflow and feature expectation of the product
          </List>
          <List>Who are your competitors</List>
          <List>Who are the target audience</List>
          <List>What is your unique selling point</List>
          <List>What are your expectations of the product</List>
        </UnorderedList>
        <Heading2>Research (Qualitative Analysis)</Heading2>
        <Paragraph2>
          I had an interview with a medical specialist, who was part of the
          product team, we had conversation regarding the medical industry in
          relation to the idea and these are my findings:
        </Paragraph2>
        <StyledImage src={ResearchImage} />
        <Heading3>Problem</Heading3>
        <UnorderedList>
          <List>Lack of quick access to senior specialist in the industry</List>
          <List>
            Specialist not able to get medical advise regarding a matter
          </List>
          <List>Specialist not able to get guided in a medical situation</List>
          <List>
            No forum where specialist can meet and share knowledge on medical
            topics
          </List>
          <List>
            Low mentorship relationship between junior and senior specialist
          </List>
        </UnorderedList>
        <Heading3>Solutin</Heading3>
        <UnorderedList>
          <List>
            A system where specialist can discuss about health and medical
            issues
          </List>
          <List>
            Easy online appointment booking and consultation among specialist
          </List>
          <List>
            Junior specialist being able to request for mentorship from senior
            specialists
          </List>
          <List>Specialist can have chat conversations personaly</List>
        </UnorderedList>
        <Heading3>Target Audience</Heading3>
        <Paragraph2>
          The target audience are Medical Students and Specialists( both Junior
          and senior level)
        </Paragraph2>
        <Heading2>Online Survey (Quatitative Analysis)</Heading2>
        <Paragraph2>
          Condicted an online survey to know what medical specialists needs and
          problems
        </Paragraph2>
        <HorizontalLine />
        <Flex>
          <Wrapper>
            <Percent color="blue">70%</Percent>
            <TextWrap>
              <Line color="blue" />
              <Paragraph2>
                Have difficulty easily accessing other specialist from other
                locations that are not nearby
              </Paragraph2>
            </TextWrap>
          </Wrapper>
          <Wrapper>
            <Percent color="green">90%</Percent>
            <TextWrap>
              <Line color="green" />
              <Paragraph2>
                Would want an avenue to be able to connect with specialist round
                the world
              </Paragraph2>
            </TextWrap>
          </Wrapper>
          <Wrapper>
            <Percent color="orange">80%</Percent>
            <TextWrap>
              <Line color="orange" />
              <Paragraph2>
                Would want to book appointment with other specialist for medical
                advice
              </Paragraph2>
            </TextWrap>
          </Wrapper>
        </Flex>
        <Wrap>
          <HorizontalRule />
          <Circle>2</Circle>
          <HorizontalRule />
        </Wrap>
        <Heading>Define</Heading>
        <Paragraph2>
          This process is to enable me understand the product and the users of
          the product
        </Paragraph2>
        <Heading2>User Persona</Heading2>
        <Paragraph2>
          Having conducted an interview and survey i came up with these user
          persona to represent the users
        </Paragraph2>
        <StyledImage src={Define} />
        <Wrap>
          <HorizontalRule />
          <Circle>3</Circle>
          <HorizontalRule />
        </Wrap>
        <WhiteHeading>Ideate</WhiteHeading>
        <Heading2>User Stories</Heading2>
        <Paragraph2>
          Having interviewed potential users and translated findings into
          personas to guide the way, i brainstormed user stories, xhoose the key
          stories and determined the app featues requirements, so as to
          determine the the MVP objectives
        </Paragraph2>
        <StyledImage src={Ideate1} />
        <RestyledImage src={Ideate2} />
        <Heading2>User Flow Diagram</Heading2>
        <Paragraph2>
          I translated the user stories and key feature requirements into a
          basic flowthat would be our user’s path through the pp{" "}
        </Paragraph2>
        <StyledImage src={UserFlow} />
        <Wrap>
          <HorizontalRule />
          <Circle>4</Circle>
          <HorizontalRule />
        </Wrap>
        <WhiteHeading>Prototype</WhiteHeading>
        <Paragraph2>
          This process is to enable me understand the product and the users of
          the product
        </Paragraph2>
        <Heading2>Wire Frame</Heading2>
        <Paragraph2>
          I translated the user stories and key feature requirements into a
          basic flowthat would be our user’s path through the pp{" "}
        </Paragraph2>
        <StyledImage src={WireFrame} />
        <Heading2>Design System</Heading2>
        <Paragraph2>
          I translated the user stories and key feature requirements into a
          basic flowthat would be our user’s path through the pp{" "}
        </Paragraph2>
        <StyledImage src={DesignSystem} />
        <Heading2>Prototype</Heading2>
        <Paragraph2>
          I translated the user stories and key feature requirements into a
          basic flowthat would be our user’s path through the pp{" "}
        </Paragraph2>
      </ContainerWithMargin>
      <Div>
        <StyledImage src={Prototype} />
      </Div>
      <PrototypeContainer>
        <ReversedDiv>
          <TextContainer>
            <Heading2>Sign Up/Sign in</Heading2>
            <Paragraph2>
              Users can sign up and sign in to the application providing the
              neccesary details asked
            </Paragraph2>
          </TextContainer>
          <RestyledImage2 src={SignIn} />
        </ReversedDiv>
        <DivWrap>
          <TextContainer>
            <Heading2>Newsfeed</Heading2>
            <Paragraph2>
              User can share knowledge and information regarding his fields and
              get comments and likes
            </Paragraph2>
          </TextContainer>
          <RestyledImage2 src={Newsfeed} />
        </DivWrap>
        <ReversedDiv>
          <TextContainer>
            <Heading2>Consultation</Heading2>
            <Paragraph2>
              Users can consult other specialists for medical advice and
              guidance, as well as specialists can set availability
            </Paragraph2>
          </TextContainer>
          <RestyledImage2 src={Consultation} />
        </ReversedDiv>
        <DivWrap>
          <TextContainer>
            <Heading2>Chat</Heading2>
            <Paragraph2>
              User can have direct chats and scheduked consultation with other
              specialists
            </Paragraph2>
          </TextContainer>
          <RestyledImage2 src={Chat} />
        </DivWrap>
        <ReversedDiv>
          <TextContainer>
            <Heading2>Profile</Heading2>
            <Paragraph2>
              User can edit his profile as well as others can view profile of
              specialists
            </Paragraph2>
          </TextContainer>
          <RestyledImage2 src={Profile} />
        </ReversedDiv>
        <Heading4>Project Status</Heading4>
        <Paragraph2>The project is currently on Development</Paragraph2>
      </PrototypeContainer>
      <AshContainer>
        <ThanksNote>Thank you for reading through</ThanksNote>
        <DesginersName>Designer_ifuy</DesginersName>
      </AshContainer>
      <Contact />
    </Container>
  );
};

export default Medysinc;
