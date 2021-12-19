import React from "react";
import styled from "styled-components";

const Picture = styled.div`
  margin-top: 20px;
  background-color: pink;
  color: white;
  height: calc(5rem + 10vw);
  width: calc(9rem + 40vw);
  border-radius: 20px;
  margin-top: cal(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;
const Image = styled.div`
  width: 40%;
  height: 40%;
  background: url (${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Text = styled.h4``;
const Name = styled.h3``;
const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.jpg`).default;
  return (
    <Picture>
      <Image img={Avatar} width="200" height="200" />
      <Text>{text}</Text>
      <Name>{name}</Name>
    </Picture>
  );
};

export default Card;
