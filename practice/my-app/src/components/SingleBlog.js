import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled(NavLink)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
`;

const SingleBlog = () => {
  return <Container to="/">blog</Container>;
};

export default SingleBlog;
