import React from "react";
import AboutMe from "../../components/aboutMe";
import Contact from "../../components/footer";
import Header from "../../components/header";
import MockUp from "../../components/mockUp";
import WelcomePage from "../../components/welcome";

const SecondLandingPage = () =>{
    return(
        <div style={{backgroundColor:'black'}}>
            <Header/>
            <WelcomePage />
            <AboutMe />
            <MockUp />
            <Contact />
        </div>
    )
}

export default SecondLandingPage;