import React, { useState } from "react";
import logoq from "../../assets/logoq-removebg-preview.png";
import "./styles.css";
import styled from "styled-components";
const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: var(--nav);
  color: var(--navtext);
  position: relative;
  z-index: 500;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;
`;

const Nav = styled.nav`
  width: 25rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: 500;
    color: var(--navtext);
    line-height: 1.5;
  }
  @media only Screen and (max-width: 48em){
  display: none;
`;

const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--navtext);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
`;
const HamburgerBtn = styled.button`
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  cursor: pointer;
  display: none;
@media only Screen and (max-width: 48em){
  display: inline-block;
}
  &::before,
  &::after {
    content: "";
    background-color: var(--navtext);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.2s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")}

`;
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #171f47;
  border-radius: 20px;
  margin: 0.5rem;
  overflox-x: hidden;
  opacity: ${(props) => (props.clicked ? 0.9 : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};

  a {
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClcik = () => {
    setClick(!click);
  };
  return (
    <Headers>
      <Logo>
        <img src={logoq} className="logo"></img>
        <h3 className="title">KatoAgency</h3>
      </Logo>
      <Nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About us</a>
        <a href="#contact">
          <Button>Contact us</Button>
        </a>
      </Nav>
      <HamburgerBtn onClick={() => handleClcik()} clicked={click}>
        <span></span>
      </HamburgerBtn>
      <MobileMenu clicked={click}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About us</a>
        <a href="#contact">
          <Button>Contact us</Button>
        </a>
      </MobileMenu>
    </Headers>
  );
};

export default Header;