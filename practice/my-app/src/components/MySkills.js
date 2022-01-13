import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";

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
  border: 2px solid ${(props) => props.theme.tetx};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 50vh;
  z-index: 3;
  line-height: 1.5;
`;
const MySkills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Main>
        <Box>1</Box>
        <Box>2</Box>
      </Main>
    </ThemeProvider>
  );
};

export default MySkills;
