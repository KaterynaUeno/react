import styled from "styled-components";
import Twitter from "../../assets/twitter-square-brands.svg";
import Facebook from "../../assets/facebook-square-brands.svg";
import Linkedin from "../../assets/linkedin-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";

const ContactSection = styled.div``;
const Title = styled.h1``;
const Icon = styled.div``;
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
