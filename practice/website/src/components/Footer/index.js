import styled from "styled-components";
import Github from "../../assets/GitHub-Mark-32px.png";
import Linkedin from "../../assets/linkedin-brands.svg";

const Bottom = styled.div`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftText = styled.div``;
const RightText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    filter: inver(100%);
    margin-left: 1rem;
    transition: all 0.2s ease-in;
  }
  a {
    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(300%) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
    }
  }
`;
const Footer = () => {
  return (
    <Bottom>
      <LeftText>Kateryna Ueno</LeftText>
      <RightText>
        <a href="https://www.linkedin.com/in/kateryna-ueno/">
          <img src={Linkedin} alt="Github" />
        </a>
        <a href="https://github.com/KaterynaUeno">
          <img src={Github} alt="Github" />
        </a>
      </RightText>
    </Bottom>
  );
};

export default Footer;
