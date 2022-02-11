import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develop } from "../AllSvgs";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponent from "../subComponents/ParticleComponent";
import CapitalLetters from "../subComponents/CapitalLetters";

const Main = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled.div`
  border: 2px solid ${(props) => props.theme.texß};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 50vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(1em +1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 0.3rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 1rem;
  }

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;
const MySkills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Main>
        <PowerButton />
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <ParticleComponent theme="light" />
        <Box>
          <Title>
            <Design width={40} height={40} />
            Creator
          </Title>
          <Description>
            I like to transform simple ideas into minimalistic web applications.
          </Description>
          <Description>
            <strong>I create</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile apps</li>
            </ul>
          </Description>
        </Box>
        <Box>
          {" "}
          <Title>
            <Develop width={40} height={40} />
            Frontend Developer
          </Title>
          <Description>
            I am using HTML, CSS and Java Script to create responsive designs.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>HTML, CSS, Java Script, React, Bootstrap, MUI, etc.</p>
          </Description>
        </Box>
        <CapitalLetters text="SKILLS" top="55%" right="30%" />
      </Main>
    </ThemeProvider>
  );
};

export default MySkills;
