import styled from "styled-components";
import Github from "../../assets/GitHub-Mark-32px.png";
import Linkedin from "../../assets/linkedin-brands.svg";
const Bottom = styled.div``;
const LeftText = styled.h1``;
const RightText = styled.h1``;
const Footer = () => {
  return (
    <Bottom>
      <LeftText>Kateryna Ueno</LeftText>
      <RightText>Find me </RightText>
      <a href="https://github.com/KaterynaUeno">
        <img src={Github} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/kateryna-ueno/">
        <img src={Linkedin} alt="Github" />
      </a>
    </Bottom>
  );
};

export default Footer;
