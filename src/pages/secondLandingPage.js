import React from "react";
import AboutMe from "../components/aboutMe";
import Contact from "../components/letsTalk";
import MockUp from "../components/mockUp";
import WelcomePage from "../components/welcomePage";

const SecondLandingPage = () =>{
    return(
        <div style={{backgroundColor:'black'}}>
            <WelcomePage />
            <AboutMe />
            <MockUp />
            <Contact />
        </div>
    )
}

export default SecondLandingPage;