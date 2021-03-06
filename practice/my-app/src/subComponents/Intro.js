import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 30vh;
  display: flex;

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
  background-size: 100%;
`;

const SubBox = styled.div`
  width: 40%;
  position: relative;
  display: flex;
`;
const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.text};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *last-child {
    color: rgba(0, 0, 0, 0.6);
  }
  font-size: calc(1em + 1vw);
`;
const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "30vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h4>Hi! My name is Kateryna Ueno and I am a Front-end developer</h4>
        </Text>
      </SubBox>
    </Box>
  );
};

export default Intro;
