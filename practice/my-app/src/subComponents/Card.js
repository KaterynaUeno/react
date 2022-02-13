import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.div`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;

const Tags = styled.div`
  border-top: solid 2px ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};
const Card = (props) => {
  const { id, name, description, tags } = props.data;
  return (
    <Box key={id} variants={item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((tag, id) => {
          return <Tag key={id}>#{tag}</Tag>;
        })}
      </Tags>
    </Box>
  );
};

export default Card;
