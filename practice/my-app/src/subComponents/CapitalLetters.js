import React from "react";

import styled from "styled-components";

const Text = styled.h1`
position: fixed;
top: ${(props) => props.top};
left: &{props=>props.left};
right: ${(props) => props.right};
color: rgba(0,0,0,0.1);
font-size: calc(5rem + 5vw);
z-index: 0;
`;

const CapitalLetters = (props) => {
  return (
    <Text top={props.top} left={props.lefy} right={props.right}>
      {props.text}
    </Text>
  );
};
export default CapitalLetters;
