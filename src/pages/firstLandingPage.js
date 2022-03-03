import React from "react";
import AboutMe from "../components/aboutMe";
import Contact from "../components/letsTalk";
import Portfolio from "../components/portfolio";
import WelcomePage from "../components/welcomePage";
import LetsTalk from '../images/letTalk.png'

const FirstLandingPage = () =>{
    return(
        <div style={{backgroundColor: 'black'}}>
            <WelcomePage />
            <AboutMe />
            <Portfolio />
            <Contact src={LetsTalk}/>
        </div>
    )
}

export default FirstLandingPage;