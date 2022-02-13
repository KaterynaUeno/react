import React, { useRef } from "react";
import styled from "styled-components";
import sound from "../assets/audio/u-said-it-v13-1167.mp3";
const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 8rem;
  top: 3rem;
  z-index: 10;
`;
const Sound = () => {
  const ref = useRef(null);
  return (
    <Box>
      Sound
      <audio src={sound} ref={ref} loop></audio>
    </Box>
  );
};

export default Sound;
