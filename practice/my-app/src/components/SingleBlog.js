import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Container = styled(NavLink)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 26rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.text};
  background-filter: blur(3px);
  box-shadow: 0 0 2px 0 rgba(0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Container}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Container}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const Hashtag = styled.div`
  padding: 0.5rem 0;
`;

const Tag = styled.span`
  padding-right: 0.5rem;
`;

const Date = styled.span`
  padding: 0.5rem 0;
`;
const SingleBlog = (props) => {
  const { name, id, link, imgSrc, date, tags } = props.blog;
  return (
    <Container target="_blank" to={{ pathname: link }}>
      <Image img={imgSrc} />
      <Title>{name}</Title>
      <Date>{date}</Date>
      <Hashtag>
        {tags.map((tag, id) => {
          return <Tag key={id}>#{tag}</Tag>;
        })}
      </Hashtag>
    </Container>
  );
};

export default SingleBlog;
