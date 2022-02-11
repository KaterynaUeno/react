import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponent from "../subComponents/ParticleComponent";

const Main = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Box = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 50vh;
  z-index: 3;
  ine-height: 1.5;

  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1vw);
  background-filter: blur(5px);

  position: absolute;
  left: calc(7rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  h2 {
    font-style: italic;
  }
`;
const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main>
        <PowerButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <ParticleComponent theme="dark" />

        <Box>
          <h2>A little about me</h2>
          <br></br>I am front-end developer who has graduated from the bootcamp
          Le Wagon and who loves to create great websites.
          <br></br>I have been studing React by myself and trying to implement
          interesting features to make user-friendly apps.
          <br></br>
          You can get connected with me via social links.
        </Box>
      </Main>
    </ThemeProvider>
  );
};

export default About;
