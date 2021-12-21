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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 0.5rem calc(0.5rem + 0.5vw);
    margin-bottom: 1rem;
    background-color: white;
    border: 0.2px solid black;
    border-radius: 4px;
    color: black;
    &:active,
    &:focus {
      background-color: #3f4666;
      color: white;
    }
    &::placeholder {
      color: pink;
    }
    &[name="name"] {
      margin-right: 1rem;
    }
  }
  textarea {
    padding: 0.5rem calc(0.5rem + 0.5vw);
    margin-bottom: 1rem;
    background-color: white;
    border: 0.2px solid black;
    border-radius: 4px;
    color: black;
    &:active,
    &:focus {
      background-color: #3f4666;
      color: white;
    }
    &::placeholder {
      color: pink;
    }
  }

  button {
    padding: 0.8rem 2rem;
    background-color: pink;
    border-radius: 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(1.1);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
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
      <Form>
        <Row>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
        </Row>
        <textarea
          name="message"
          cols="30"
          rows="2"
          placeholder="Your message"
        ></textarea>
        <div style={{ margin: "0 auto" }}>
          <button>Submit</button>
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;
