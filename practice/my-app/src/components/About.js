import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import { Design, Develop } from "../AllSvgs";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponent from "../subComponents/ParticleComponent";

const Main = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main>
        <PowerButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <ParticleComponent theme="dark" />
      </Main>
    </ThemeProvider>
  );
};

export default About;
