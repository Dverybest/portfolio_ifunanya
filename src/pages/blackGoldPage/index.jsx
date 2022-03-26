import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Contact from "../../components/footer";
import BlackGoldImg from "../../asset/images/black_gold.svg";
import BlackArrow from "../../asset/images/black_back_arrow.png";
import Figma from "../../asset/images/figma.png";
import Flower from "../../asset/images/flower.svg";
import Research1 from "../../asset/images/research1.svg";
import Research2 from "../../asset/images/research2.svg";
import Research3 from "../../asset/images/research3.svg";
import Research4 from "../../asset/images/research4.svg";
import Persona from "../../asset/images/persona.svg";
import Table from "../../asset/images/table.svg";
import Architecture from "../../asset/images/architecture.svg";
import GoldUserflow from "../../asset/images/gold_user_flow.svg";
import VisualDesign from "../../asset/images/visual_design.svg";
import Prototype1 from "../../asset/images/gold_prototype1.svg";
import Prototype2 from "../../asset/images/gold_prototype2.svg";
import Prototype3 from "../../asset/images/gold_prototype3.svg";
import { Container } from "../homePage/style";
import {
  ContainerWithMargin,
  ImageContainer,
  Image,
  MediumTitle,
  StyledBackArrow,
  Flex,
  Role,
  Paragraph1,
  Client,
  Tools,
  Text,
  AshContainer,
  ThanksNote,
  DesignersName,
  StyledFigma,
  List,
  NextProject,
} from "../medisyncPage/style";
import {
  MeddiumHeader,
  Paragraph,
  RestyledFlex,
  Box,
  ImageTag,
  TableImage,
  RestyledUl,
  RestyledProject,
  Percent,
  FlexBox,
  FlexImage,
  BoxParagraph,
  SubHeading2,
  Div,
  DottedLine,
  FlexContainer,
  SubHeading3,
  Ul,
  PList,
  FlowerImage,
  RestyledSubHeading,
  DesktopImage,
  MobileImage,
} from "./style";

const BlackGold = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <ImageContainer>
        <Image src={BlackGoldImg} loading="lazy" />
        <StyledBackArrow src={BlackArrow} onClick={() => navigate(-1)} />
      </ImageContainer>
      <ContainerWithMargin>
        <Flex>
          <Role>
            <MediumTitle>ROLE/TEAM</MediumTitle>
            <Paragraph1>User Interface and experience Designer</Paragraph1>
          </Role>
          <Client>
            <MediumTitle>CLIENT/DATE/DURATION</MediumTitle>
            <Paragraph1>A month and 1 week</Paragraph1>
          </Client>
          <Tools>
            <MediumTitle>TOOLS</MediumTitle>
            <StyledFigma src={Figma} loading="lazy" />
          </Tools>
        </Flex>
        <RestyledProject>
          <MediumTitle>PROJECT Link</MediumTitle>
          <Paragraph1>Blackgoldsite</Paragraph1>
        </RestyledProject>
        <RestyledSubHeading>The Challenge</RestyledSubHeading>
        <Text>
          Financial investment is a huge part of wealth creation and financial
          growth, as this one habit of the rich. A number of people make money
          but as a result of indiscipline and poor money management lose money
          instead, some other don’t know where and how to invest there money
          ignorant of the various opportunities in the investment industry
        </Text>
        <FlowerImage src={Flower} loading="lazy" />
        <RestyledSubHeading>About Project</RestyledSubHeading>
        <Text>
          This product is aim at encouraging money investment and provides users
          with different investment opportunities (cutting across different
          marketplace), where they can invest and make returns on investment
        </Text>
        <RestyledSubHeading>The Goal</RestyledSubHeading>
        <RestyledUl>
          <List>
            To build a seamless and user friendly application where users can
            see different investment opportunities on different marketplace and
            industry
          </List>
          <List>
            To build a solution where users can keep track of there investment
            and returns on investments
          </List>
          <List>
            To build a system where users can manage there investment and grow
            there money
          </List>
        </RestyledUl>
        <SubHeading2>My Design Process</SubHeading2>
        <FlexContainer>
          <Div>
            <SubHeading3>EMPATHIZE</SubHeading3>
            <Ul>
              <PList>User Interviews</PList>
              <PList>User research</PList>
              <PList>Competitive Analysis</PList>
            </Ul>
          </Div>
          <DottedLine />
          <Div>
            <SubHeading3>DEFINE</SubHeading3>
            <Ul>
              <PList>User persona</PList>
              <PList>Empathy Map</PList>
            </Ul>
          </Div>
          <DottedLine id="hide" />
          <Div>
            <SubHeading3>IDEATE</SubHeading3>
            <Ul>
              <PList>Information Architecture</PList>
              <PList>Userflow</PList>
            </Ul>
          </Div>
          <DottedLine />
          <Div>
            <SubHeading3>PROTOTYPE</SubHeading3>
            <Ul>
              <PList>Wireframe</PList>
              <PList>UI design</PList>
              <PList>Prototype</PList>
            </Ul>
          </Div>
          <DottedLine id="hide" />
          <Div>
            <SubHeading3>TEST</SubHeading3>
            <Ul>
              <PList>Feedbacks</PList>
              <PList>Conclusion</PList>
            </Ul>
          </Div>
        </FlexContainer>
        <RestyledSubHeading white>
          Research (Interviews and competitive analysis)
        </RestyledSubHeading>
        <Text>
          To better understand the project , I had a conversation with the
          product owners to have more insight to there expections, as well as
          did a personal research on the industry and the competitors,
          interviewed a few persons regarding their thoughts on investments and
          here are my findings
        </Text>
        <FlexBox>
          <FlexImage src={Research1} loading="lazy" />
          <FlexImage src={Research2} loading="lazy" />
        </FlexBox>
        <DesktopImage src={Research3} loading="lazy" />
        <MobileImage src={Research4} loading="lazy" />
        <RestyledFlex>
          <Box color="purple">
            <Percent>90%</Percent>
            <BoxParagraph>
              of people would want to grow their income
            </BoxParagraph>
          </Box>
          <Box color="navy">
            <Percent>70%</Percent>
            <BoxParagraph>
              of people don’t invest because they are not aware about investment
              opportunities
            </BoxParagraph>
          </Box>
          <Box color="blue">
            <Percent>70%</Percent>
            <BoxParagraph>Knows that it is important to invest</BoxParagraph>
          </Box>
          <Box color="yellow">
            <Percent>80%</Percent>
            <BoxParagraph>wants to be able to manage their money</BoxParagraph>
          </Box>
        </RestyledFlex>
        <MeddiumHeader>User Persona</MeddiumHeader>
        <Paragraph>
          Having conducted research and interviews, i define the main goals and
          developed a representative of the target as the persona, creatinga
          persona will help me understand the users needs and experience
        </Paragraph>
        <ImageTag src={Persona} loading="lazy" />

        <TableImage>
          <MeddiumHeader>Empathy Map</MeddiumHeader>
          <Paragraph>
            An empathy map is a simple, easy to digest visual that captures
            knowledges about a user’s behaviours and attitudes, It is a useful
            tool to helps better understand the users
          </Paragraph>
          <ImageTag src={Table} loading="lazy" />
        </TableImage>
        <MeddiumHeader>Information Architecture</MeddiumHeader>
        <ImageTag src={Architecture} loading="lazy" />
        <MeddiumHeader>Userflow</MeddiumHeader>
        <ImageTag src={GoldUserflow} loading="lazy" />
      </ContainerWithMargin>
      <ImageTag src={VisualDesign} loading="lazy" />
      <ContainerWithMargin>
        <MeddiumHeader>Prototype</MeddiumHeader>
      </ContainerWithMargin>
      <ImageTag src={Prototype1} loading="lazy" />
      <ImageTag src={Prototype2} loading="lazy" />
      <ImageTag src={Prototype3} loading="lazy" />
      <AshContainer primary>
        <ThanksNote>Thank you for reading through</ThanksNote>
        <DesignersName>Designer_ifuy</DesignersName>
        <NextProject onClick={() => navigate("/medisync")}>
          {"Next Project >"}
        </NextProject>
      </AshContainer>
      <Contact />
    </Container>
  );
};

export default BlackGold;
