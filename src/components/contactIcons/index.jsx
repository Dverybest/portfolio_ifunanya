import React from "react";
import Dribble from "../../asset/images/akar-icons_dribbble-fill.svg";
import Behance from "../../asset/images/behance.svg";
import Linkedin from "../../asset/images/linkedin.svg";
import Twitter from "../../asset/images/twitter.svg";
import { ContactIconsWrapper, ContactIconsImage } from "./style";

const ContactIcons = ({ className, margin, padding }) => {
  return (
    <ContactIconsWrapper className={className}>
      <ContactIconsImage src={Dribble} margin={margin} padding={padding} />
      <ContactIconsImage src={Behance} margin={margin} padding={padding} />
      <ContactIconsImage src={Linkedin} margin={margin} padding={padding} />
      <ContactIconsImage src={Twitter} margin={margin} padding={padding} />
    </ContactIconsWrapper>
  );
};

export default ContactIcons;
