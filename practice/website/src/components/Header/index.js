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

// const Nav = styled.nav`
//   width: 25rem;
//   max-width: 40rem;
//   display: flex;
//   align-items: center;
//   justify-content: spece-between;

//   a {
//     font-weight: 500;
//     color: var(--navtext);
//     line-height: 1.5;
//   }
// `;

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
  background-color: white;
  width: 2rem;
  height: 2px;
  cursor: pointer;

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
    transition: all 0.3s;
  }
  &::before {
    top: 0.5rem;
    transform: rotate(0);
  }
  &::after {
    top: 0.5rem;
    transform: rotate(0);
  }
`;
const Header = () => {
  return (
    <Headers>
      <Logo>
        <img src={logoq} className="logo"></img>
        <h3 className="title">KatoAgency</h3>
      </Logo>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About us</a>
        <a href="#contact">
          <Button>Contact us</Button>
        </a>
      </nav>
      <HamburgerBtn>
        <span></span>
      </HamburgerBtn>
    </Headers>
  );
};

export default Header;
