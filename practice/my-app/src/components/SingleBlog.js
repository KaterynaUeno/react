import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled(NavLink)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
`;
const SingleBlog = (props) => {
  const [name, tags, date, imgSrc, link] = props.blog;
  return (
    <Container target="-blank" to={{ pathname: link }}>
      <Image img={imgSrc} />
    </Container>
  );
};

export default SingleBlog;
