import React, { useRef, useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import sound from "../assets/audio/u-said-it-v13-1167.mp3";
const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 8rem;
  top: 3rem;
  z-index: 10;
`;

const play = keyframes`
0%{
  transform: scaleY(1);
}
50% {
  transform: scaleY(2);
}
100% {
  transform: scaleY(1);
}`;
const Line = styled.span`
  background: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.body};
`;
const Sound = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <Box
      onClick={() => {
        handleClick();
      }}
    >
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <audio src={sound} ref={ref} loop />
    </Box>
  );
};

export default Sound;
