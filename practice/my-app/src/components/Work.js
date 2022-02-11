import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import LogoComponent from "../subComponents/LogoComponent";
import Card from "../subComponents/Card";
import { WorkData } from "../data/WorkData";
import { YinYang } from "../AllSvgs";
import CapitalLetters from "../subComponents/CapitalLetters";

const Main = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 300vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Box = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const Rotate = styled.span`
display: block;
position: fixed;
right: 1rem;
bottom: 1rem;
width 80px;
height: 80px;
z-index: 1;
`;
const Work = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <Main>
        <PowerButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <Box ref={ref}>
          {WorkData.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </Box>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>
        <CapitalLetters text="WORK" top="10%" right="20%" />
      </Main>
    </ThemeProvider>
  );
};

export default Work;
