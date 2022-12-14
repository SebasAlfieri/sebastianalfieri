import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: 70%;
  }
`

const AboutText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 60%;
  text-align: center;
  background-color: #fff;
  padding-left: 5%;
  padding-right: 5%;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border: 2px solid #435058;

  @media (min-width: 768px) {
    width: 60%;
    height: 30%;
  }
`

const AboutImg = styled.div`
  background-image: url("./images/photo.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size:contain;
  border-radius: 50%;
  width:30%;
  height: 50%;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 5vh;
    width:20%;
    height: 40%;
  }
`

function About() {

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    document.title = `About me!`;
  }, []);

  return (
  <AboutContainer>
    <AboutImg data-aos="fade-up"
     data-aos-duration="1000"></AboutImg>
    <AboutText data-aos="fade-up"
     data-aos-duration="2000">
      I am a web developer from Buenos Aires, Argentina. Highly motivated to create and grow in the programming world. If you're looking for someone who enjoys developing new websites, as well as someone who wishes to be in an enviroment that'll let him improve his abilities, you can count on me.
    </AboutText>
  </AboutContainer>
  )
}

export default About