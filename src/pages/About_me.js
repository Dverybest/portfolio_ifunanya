import React from "react";
import Five from '../images/about-images/5.png';
import About from '../images/about-images/About-me.png';
import './About_me.css';

const AboutMe = () => {
    return(
        <div>
             <img src={About} className='about-me' />
            <div className="about-container">
               
                <div className="line-five-container">
                    <div className="bigger-line"> <div className="smaller-line"/> </div>
                    <div className="five-container">
                        <img src={Five} />
                        <p>
                            Years Experience Working
                        </p>
                        
                    </div>
                </div>
                <div className="about-text">
                    <p>Product Designer and Digital Creative Directior,<br/>
                    I Specialized in User Interface/Experience Design,</p>
                    
                    <p>I am  an experienced and Intermediate User interface designer, 
                        passionate about building appealing strong user interface designs , 
                        creating a great experience for users, ensuring product owners meet to 
                        their goals and focused at  solving problems
                    </p>

                    <p>I am experienced and skilled in using design softwares and tools to build digital products, 
                        ranging from the financial tech, business, health and crypto industry.
                    </p>

                    <p>I have a five years experience as a designer, starting up as a graphic designer, 
                        through brand identity design and now specialise in user interface/experience  design
                    </p>

                    <p>As a  goal oriented designer, I have worked as a team to achive project goals, 
                        leading team mates from ideation to production, I have however also worked as an 
                        individual contributor.
                    </p>

                    <p>I also show great interest in women in tech, and 
                        have a tone of ladies I mentor in the design path.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default AboutMe;