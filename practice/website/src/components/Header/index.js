import logoq from "../../assets/logoq-removebg-preview.png";
import "./styles.css";
const Header = () => {
  return (
    <header>
      <div>
        <img src={logoq} className="logo"></img>
        <h3>KATOAgency</h3>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About us</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
