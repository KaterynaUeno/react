import styled from "styled-components";
import Twitter from "../../assets/twitter-square-brands.svg";
import Facebook from "../../assets/facebook-square-brands.svg";
import Linkedin from "../../assets/linkedin-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";

const ContactSection = styled.div`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
  position: relative;
  color: white;

  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    border: solid 2px #ebcdf9;
    transform: translate(-50%);
  }
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(300%) hue-rotate(580deg);
      }
    }
    &:not(:last-child) {
      margin-right: 3rem;
    }
  }
  img {
    width: 3rem;
    height: 3rem;
  }
`;
const Contact = () => {
  return (
    <ContactSection>
      <Title>Get in touch</Title>
      <Icon>
        <a href="https://en-gb.facebook.com/">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://twitter.com/">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/">
          <img src={Linkedin} alt="Linkedin" />
        </a>
      </Icon>
    </ContactSection>
  );
};

export default Contact;
