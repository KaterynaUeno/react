import React from "react";
import styled from "styled-components";
import img from "../assets/images/kari-shea-1SAnrIxw5OY-unsplash.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachement: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`;
const Blog = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
      </Container>
    </MainContainer>
  );
};

export default Blog;
