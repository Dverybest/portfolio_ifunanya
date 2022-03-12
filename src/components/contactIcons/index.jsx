import React from "react";
import Dribble from './akar-icons_dribbble-fill.svg';
import Behance from './behance.svg';
import Linkedin from './linkedin.svg';
import Twitter from './twitter.svg';
import { ContactIconsWrapper,ContactIconsImage } from "./style";


const ContactIcons = ({flex,display,position,bottom,left,transform,margin,padding}) => {
    return (
        <ContactIconsWrapper 
            flex={flex} display={display} position={position}
            bottom={bottom} left={left} transform={transform}
        >

            <ContactIconsImage src={Dribble} margin={margin} padding={padding}/>
            <ContactIconsImage src={Behance} margin={margin} padding={padding}/>
            <ContactIconsImage src={Linkedin} margin={margin} padding={padding}/>
            <ContactIconsImage src={Twitter} margin={margin} padding={padding}/>
        </ContactIconsWrapper>
    )
}

export default ContactIcons;