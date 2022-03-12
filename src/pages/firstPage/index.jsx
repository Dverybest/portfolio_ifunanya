import React from "react";
import AboutMe from "../../components/aboutMe";
import Contact from "../../components/footer";
import WelcomePage from "../../components/welcome";
import Header from '../../components/header';
import CaseStudy from "../../components/caseStudy";

const FirstLandingPage = () =>{
    return(
        <div style={{backgroundColor: 'black'}}>
            <Header />
            <WelcomePage />
            <AboutMe />
            <CaseStudy />
            <Contact />
        </div>
    )
}

export default FirstLandingPage;