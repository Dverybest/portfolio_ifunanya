import React from "react";
import Facebook from '../images/headerImages/facebook.png';
import Twitter from '../images/headerImages/twitter.png';
import Instagram from '../images/headerImages/instagram.png';
import './letsTalk.css';
import Button from "./button";

const Contact = ({image}) => {
    return(
        <div className="lets-talk-container">
            <div>
                <img src={image} className='lets-talkk-text'/>
                {/* <div className="vertical-line"/> */}
                <div className="footer-container">
                    <div className="contact-container">
                            <p className="contact">Contact</p>
                            <p className="text-below-contact">
                                I am always looking for great collaborations, 
                                lets discuss and make something together
                            </p>
                    </div>
                    
                    <div className="lets-discuss-container">   
                            <p className="contact-intro">
                                Have any project in your mind? 
                                <span style={{color:'#567DE0'}}> Let’s discuss</span> the project
                            </p>
                        <div className="form-container">    
                            <div className="form" >
                                <div className="fullname-container">
                                    <p >Full Name</p>
                                    <input type='text' 
                                    placeholder="Enter your full name"/>
                                </div>
                                <div className="email-container">
                                    <p>Email</p>
                                    <input type='email' 
                                    placeholder="Enter your email"/>
                                </div>    
                            </div>
                            <p className="message">Message</p>
                            <textarea name="message" rows='10' cols="30"
                            placeholder="Your message" >

                            </textarea>
                            <Button className='send-msg-btn' btnText='Send Message' />
                            
                            {/* <div className="mail-container" >
                                    <p className="email-text">Email </p>
                                    <p className="email">nzewlifunanya@gmail.com</p>
                                    
                                    <p className="phone-no-text">Phone No: </p>
                                    <p className="phone-no"> +234 089 291 1389</p>

                                    <img src={Facebook} />
                                    <img src={Twitter} />
                                    <img src={Instagram} />
                            </div> */}
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Contact;