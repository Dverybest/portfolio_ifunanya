import React from "react";
import Dribbble from "../../asset/images/akar-icons_dribbble-fill.svg";
import Behance from "../../asset/images/behance.svg";
import Linkedin from "../../asset/images/linkedin.svg";
import Twitter from "../../asset/images/twitter.svg";
import { ContactIconsWrapper, ContactIconsImage } from "./style";

const ContactIcons = ({ className, margin, padding }) => {
  return (
    <ContactIconsWrapper className={className}>
      <a href="https://dribbble.com/ifuy" target="_blank">
        <ContactIconsImage src={Dribbble} margin={margin} padding={padding} />
      </a>
      <a href="https://www.behance.net/ifunanyanzewi" target="_blank">
        <ContactIconsImage src={Behance} margin={margin} padding={padding} />
      </a>
      <a href="https://www.linkedin.com/in/ifunanyanzewi/" target="_blank">
        <ContactIconsImage src={Linkedin} margin={margin} padding={padding} />
      </a>
      <a href="https://twitter.com/IfunanyaNzewi" target="_blank">
        <ContactIconsImage src={Twitter} margin={margin} padding={padding} />
      </a>
    </ContactIconsWrapper>
  );
};

export default ContactIcons;
