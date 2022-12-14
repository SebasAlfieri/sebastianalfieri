import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';


const ContactMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

    
  @media (min-width: 768px) {
    width: 70%;
  }
`

const ContactContainer = styled.div`
  display:flex;
  flex-direction: column;
  background-color: #435058;
  color:#F1F2EE;
  width: 90%;
  height: 70%;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;

    @media (min-width: 768px) {
      width: 60%;
      height: 60%;
  }
`

const ContactTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  height: 20%;
  width: 100%;
  border-bottom: 2px solid #2f383d;
`

const ContactBoxContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
`

const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  font-size: 10rem;
  transition: 0.1s;

  &:hover{
    font-size: 11em;
    color: #DCF763;
  }

  &:active{
    font-size: 13rem;
    color: #ffffff;
  }
`

const ContactBoxAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  font-size: 10rem;
  transition: 0.1s;
  color:#F1F2EE;

  &:hover{
    font-size: 11em;
    color: #DCF763;
  }

  &:active{
    font-size: 13rem;
    color: #ffffff;
  }
`

const HoverContainer = styled.div`
  color: rgba(255, 0, 0, 0);
  position: absolute;
  bottom: 15vh;

  @media (min-width: 768px) {
    color: black;
  }
`

const ClickContainer = styled.div`
  position: absolute;
  bottom: 7vh;
  background-color: white;
  border: 1px solid black;
  padding: 5px;
  border-radius: 25px;
  
  @media (min-width: 768px) {
      bottom: 7vh;
  }
`

function Contact() {

  const [isHovering, setIsHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    document.title = `Contact`;
  }, []);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
    setClicked(true);
    navigator.clipboard.writeText("sebasalfieri@gmail.com")
  };

  return (
    <ContactMainContainer>
      <ContactContainer data-aos="fade-left">
        <ContactTitle>Contact Me!</ContactTitle>
        <ContactBoxContainer>
          <ContactBox style={{borderRight:"2px solid #2f383d"}}
          onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} 
          onClick={handleClick}>
            <IoMdMail/>
          </ContactBox>
          <ContactBoxAnchor href={"https://wa.me/5491122251843"} target="_blank"><IoLogoWhatsapp/></ContactBoxAnchor>
          </ContactBoxContainer>
      </ContactContainer>
      {isHovering && <HoverContainer>Click to copy e-mail to clipboard</HoverContainer>}
      {clicked && <ClickContainer>Copied "sebasalfieri@gmail.com" to clipboard!</ClickContainer>}
    </ContactMainContainer>
  )
}

export default Contact