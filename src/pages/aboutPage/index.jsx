import React from "react";
import { StyledButton } from "../../components/button";
import Image from "../../asset/images/about_img.svg";
import MobileImage from "../../asset/images/img.svg";
import Contact from "../../components/footer";
import Header from "../../components/header";
import {
  MoreAboutMeContainer,
  MoreAboutMeContentContainer,
  GoldenLine,
  AboutStyledImage,
  ContainerWithMargin,
  SkillButton,
  SkillTitle,
  ParagraphContainer,
  SubTitles,
  Paragraph,
  SkillsContainer,
  ExperienceRow,
  WorkPlacesContainer,
  WorkDetailContainer,
  Company,
  Work,
  WorkDuration,
  CompanyDescription,
  ClientsContainer,
  Clients,
  ClientContentWrapper,
  ParagraphContainer2,
  GoBack,
  ImageContainer,
  AboutIcons,
} from "./style";
import { useNavigate } from "react-router-dom";

const MoreAboutMe = () => {
  const navigate = useNavigate();

  return (
    <MoreAboutMeContainer>
      <Header />
      <GoldenLine />
      <MoreAboutMeContentContainer>
        <GoBack onClick={() => navigate(-1)}> {"<Go Back"} </GoBack>

        <SubTitles>About Me</SubTitles>
        <ContainerWithMargin>
          <ParagraphContainer>
            <Paragraph>
              I started my career in tech as a graphic designer and Brand
              identity designer, helping brands translate their goals and vision
              using appealing and purposeful visual design, I also ventured into
              programing and web design with knowledge in HTML, CSS, Bootstrap
              and wordpress CMS
            </Paragraph>
            <Paragraph>
              I decided to further my carrer as a designer and discovered
              product design which I found and still find interesting, applied
              for an intern role at 2019 as a product designer and have grown to
              expertise over time
            </Paragraph>
          </ParagraphContainer>

          <AboutStyledImage src={Image} loading="lazy" />
          <ImageContainer>
            <img src={MobileImage} loading="lazy" />
            <AboutIcons padding />
          </ImageContainer>

          <ParagraphContainer2>
            <Paragraph color="color">
              I am a skilled , talented and experience designer with over five
              years experience in the design world, with specialisation in User
              Interface and Experience Design,
            </Paragraph>
            <Paragraph color="color">
              I am passionate about building appealing strong user interface
              designs , creating a great experience for users, ensuring product
              owners meet to their goals and focused at solving problems.
            </Paragraph>
            <Paragraph>
              Using design softwares and tools to build digital products,
              ranging from the financial tech, business, health, ecommerce,
              Learning Management System, crypto industry ,B2B, B2Cproduct.
            </Paragraph>
            <Paragraph>
              As a goal oriented designer, I have worked as a team to achieve
              project goals, leading team mates from ideation to production, I
              have however also worked as an individual contributor.
            </Paragraph>
            <Paragraph>
              I am design mentor and advocate with strong desire in seeing young
              designer grow seamlessly in there career path, converner of SHE
              THINKS AND DESIGN, a platform i started to achieve this desire
            </Paragraph>
            <StyledButton primary>View CV</StyledButton>
          </ParagraphContainer2>
          <SkillsContainer>
            <SubTitles> Skills/Tools</SubTitles>
            <div>
              <SkillTitle>User Interface Design</SkillTitle>
              <SkillButton>Figma</SkillButton>
              <SkillButton>Adobe XD</SkillButton>
            </div>
            <div>
              <SkillTitle>User Experience Design</SkillTitle>
              <SkillButton>User research</SkillButton>
              <SkillButton>User persona</SkillButton>
              <SkillButton>Ideation</SkillButton>
              <SkillButton>Userflow</SkillButton>
              <SkillButton>Information Architecture</SkillButton>
              <SkillButton>User stories</SkillButton>
              <SkillButton>Wireframing</SkillButton>
              <SkillButton>Prototyping</SkillButton>
              <SkillButton>Testing</SkillButton>
              <SkillButton>Product documentation</SkillButton>
              <SkillButton>Miro</SkillButton>
              <SkillButton>Whimsicle</SkillButton>
              <SkillButton>Figma jam</SkillButton>
            </div>
            <div>
              <SkillTitle>Branding</SkillTitle>
              <SkillButton>Adobe illustrator</SkillButton>
              <SkillButton>Photoshop</SkillButton>
              <SkillButton>Indesign</SkillButton>
              <SkillButton>Corel draw</SkillButton>
            </div>
          </SkillsContainer>
          <SubTitles>Experience</SubTitles>
          <ExperienceRow>
            <WorkPlacesContainer>
              <Company>Yebox Technologies </Company>
              <CompanyDescription>
                (Product Development company)
              </CompanyDescription>
              <Work>Product Designer</Work>
              <WorkDuration>(Aug 2021 - Present)</WorkDuration>
            </WorkPlacesContainer>
            <WorkDetailContainer>
              <Paragraph>
                I am responsible for the design of all digital products
                conducting UX process on our digital products; to understand if
                the user needs the product. I work with a team of developers,
                testers and project managers
              </Paragraph>
            </WorkDetailContainer>
          </ExperienceRow>
          <ExperienceRow>
            <WorkPlacesContainer>
              <Company>She Thinks & Design</Company>
              <Work>Product Design Lead & Mentor</Work>
              <WorkDuration>(Jan 2021 - Present)</WorkDuration>
            </WorkPlacesContainer>
            <WorkDetailContainer>
              <Paragraph>
                I mentor and guide beginner designers to scale up through the
                design career path, from the fundamental to becoming
                professionals
              </Paragraph>
            </WorkDetailContainer>
          </ExperienceRow>
          <ExperienceRow>
            <WorkPlacesContainer>
              <Company>Genesys Tech Hub </Company>
              <CompanyDescription>
                (Product Development company)
              </CompanyDescription>

              <Work>Product Designer</Work>
              <WorkDuration>(Jan 2020 - Feb 2022)</WorkDuration>
            </WorkPlacesContainer>
            <WorkDetailContainer>
              <Paragraph>
                I build user interface designs, using design thinking approach
                and rightfull UX processes and strategies, I ensure great
                experience on a number of client-facing products that cut across
                both B2B and B2C categories. I also work in teams to achieve
                products goals working along side with developers, other
                designers, project managers, testers and stakeholders.
              </Paragraph>
            </WorkDetailContainer>
          </ExperienceRow>
          <ExperienceRow>
            <WorkPlacesContainer>
              <Company>Genesys Tech Hub</Company>
              <Work>Product Design Intern</Work>
              <WorkDuration>(June 2020 - Aug 2021)</WorkDuration>
            </WorkPlacesContainer>
            <WorkDetailContainer>
              <Paragraph>
                I was exposed to the principles of design and Learnings
                regarding product design, UI component, Design system, Design
                sprint, Design thinking, Scrum and Agile etc as well as the
                rudiments in UX proceess After which I was part of a team in
                building a product applying all I learnt.
              </Paragraph>
            </WorkDetailContainer>
          </ExperienceRow>
          <ExperienceRow>
            <WorkPlacesContainer>
              <Company>Tribesquare</Company>
              <Work>Graphic and Web Design Intern</Work>
              <WorkDuration>(Feb 2019 - Jun 2019 )</WorkDuration>
            </WorkPlacesContainer>
            <WorkDetailContainer>
              <Paragraph>
                I was responsible for designing the company (tech learning
                platform) visual designs for social media adverts, I was also
                exposed to working with other developers in building products
                with HTML, CSS and bootstrap project.
              </Paragraph>
            </WorkDetailContainer>
          </ExperienceRow>
          <ExperienceRow>
            <WorkPlacesContainer>
              <Company>Freelancer</Company>
              <Work>Graphic & Product Designer</Work>
              <WorkDuration>(2016 - Present)</WorkDuration>
            </WorkPlacesContainer>
            <WorkDetailContainer>
              <Paragraph>
                I interface with clients and stakeholders in building digital
                product and visual design using my expertise in User interface
                and Experience design and design principles with focus on
                achieving product goal, meeting and exceeding client expection
              </Paragraph>
            </WorkDetailContainer>
          </ExperienceRow>
          <ClientContentWrapper>
            <SubTitles>Clients</SubTitles>
            <ClientsContainer>
              <Clients>Lawyerpp</Clients>
              <Clients>Uniform finance</Clients>
              <Clients>Quizac</Clients>
              <Clients>Medisyne</Clients>
              <Clients>Blackgold investment</Clients>
              <Clients>Mileekee pay</Clients>
              <Clients>Centerpocket</Clients>
              <Clients>Dibber</Clients>
              <Clients>Creative Ferry</Clients>
            </ClientsContainer>
          </ClientContentWrapper>
          <SubTitles>Activities</SubTitles>
          <Paragraph>
            Monthly host on the design session organised by SHE THINKS AND
            DESIGN initiative
          </Paragraph>
        </ContainerWithMargin>
        <GoBack onClick={() => navigate(-1)}> {"<Go Back"} </GoBack>
      </MoreAboutMeContentContainer>
      <Contact />
    </MoreAboutMeContainer>
  );
};

export default MoreAboutMe;
