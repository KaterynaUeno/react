import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import Logo from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import { YinYang } from "../AllSvgs";
import Intro from "../subComponents/Intro";
import { motion } from "framer-motion";

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
  border: none;
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
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
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
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
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
        <Logo theme={click ? "dark" : "light"} />
        <PowerButton />
        <SocialIcons theme={click ? "dark" : "light"} />
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
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hi...
          </motion.h3>
        </Contact>
        <BLOG to="/blog">
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Blog
          </motion.h3>
        </BLOG>
        <Work to="/work" click={click}>
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Work
          </motion.h3>
        </Work>
        <Bottom>
          <About to="/about" click={click}>
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About me
            </motion.h3>
          </About>
          <MySkills to="/skills">
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              My skills
            </motion.h3>
          </MySkills>
        </Bottom>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
