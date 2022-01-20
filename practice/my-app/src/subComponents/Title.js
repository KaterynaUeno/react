import React from "react";
import styled from "styled-components";
const Text = styled.h1``;

const Title = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

export default Title;
