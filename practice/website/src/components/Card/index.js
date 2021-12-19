import React from "react";
import styled from "styled-components";

const Picture = styled.div`
  margin-top: 100px;
  background-color: #3f4666;
  color: white;
  height: calc(23rem + 10vw);
  width: calc(9rem + 40vw);
  border-radius: 20px;
  margin-top: cal(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
  position: relative;

  @media only Screen and (max-width: 48em) {
    height: calc(5rem + 10vw);
    width: calc(5rem + 39vw);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only Screen and (max-width: 32em) {
    height: calc(5rem + 10vw);
    width: calc(5rem + 34vw);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Image = styled.div`
  width: 40%;
  height: 40%;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: absolute;
  left: 50%;
  bottom: 70%;
  transform: translate(-50%);
  border-radius: 40%;
  filter: drop-shadow(0px -3px 3px #3f4666);

  @media only Screen and (max-width: 48em) {
    bottom: 95%;
  }
`;
const Text = styled.h4`
  padding: 0 calc(1rem + 1vw);
  font-size: calc(0.6rem + 0.5vw);
  text-align: center;
`;
const Name = styled.h3`
  color: pink;
  padding-top: 1rem;
  font-size: calc(0.5rem + 1vw);
`;

const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.jpg`).default;
  return (
    <Picture>
      <Image img={Avatar} alt="" height="300" width="400" />
      <Text>{text}</Text>
      <Name>{name}</Name>
    </Picture>
  );
};

export default Card;
