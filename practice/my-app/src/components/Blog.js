import React from "react";
import styled from "styled-components";
import img from "../assets/images/kari-shea-1SAnrIxw5OY-unsplash.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { Blogs } from "../data/BlogData";
import SingleBlog from "../components/SingleBlog";

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachement: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem+2vw);
`;
const Blog = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <Center>
          <Grid>
            {Blogs.map((blog) => {
              return <SingleBlog key={blog.id} blog={blog} />;
            })}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default Blog;
