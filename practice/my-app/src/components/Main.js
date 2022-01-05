import React, { useState } from "react";
import "./main.css";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import Logo from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import { YinYang } from "../AllSvgs";

const MainContainer = styled.div`
background: &{props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;

h2,h3,h4,h5.h6{
  font-family: "Karla", sans-serif;
  font-weight: 500;
}`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;
const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;

const Work = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  left: calc(1rem + 2vw);
  top: 50%;
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;
const Bottom = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const About = styled(NavLink)`
  color: ${(props) => props.theme.text};

  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;

const MySkills = styled(NavLink)`
  color: ${(props) => props.theme.text};

  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;

const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > :last-child {
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  background-color: #000;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;
const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <Logo />
        <PowerButton />
        <SocialIcons />
        <DarkDiv click={click} />
        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={170}
            height={170}
            fill="currentColor"
          />
          {/* <span>Click here</span> */}
        </Center>
        <Contact
          target="_blank"
          to={{ pathname: "mailto:katerynaueno@gmail.com" }}
        >
          <h3>Say hi...</h3>
        </Contact>
        <BLOG to="/blog">
          <h3>Blog</h3>
        </BLOG>
        <Work to="/work">
          <h3>Work</h3>
        </Work>
        <Bottom>
          <About to="/about">
            <h3>About me</h3>
          </About>
          <MySkills to="/skills">
            <h3>My skills</h3>
          </MySkills>
        </Bottom>
      </Container>
    </MainContainer>
  );
};

export default Main;
