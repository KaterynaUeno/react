import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import LogoComponent from "../subComponents/LogoComponent";
import Card from "../subComponents/Card";
import { WorkData } from "../data/WorkData";

const Main = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Box = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const Work = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main>
        <PowerButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <Box>
          {WorkData.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </Box>
      </Main>
    </ThemeProvider>
  );
};

export default Work;
