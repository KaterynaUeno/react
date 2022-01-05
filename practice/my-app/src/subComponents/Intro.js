import React from "react";
import styled from "styled-components";

const Box = styled.div`
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 30vh;
  display: flex;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  background-size: 100%;
  background-repeat: no-repeat;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
`;

const SubBox = styled.div``;
const Intro = () => {
  return (
    <Box>
      <SubBox>
        <h1>Hello! My name is Kateryna Ueno and I am a Front-end developer</h1>
      </SubBox>
    </Box>
  );
};

export default Intro;
