import "./style.css";
import wave from "../../assets/wave.svg";
import hand from "../../assets/hand.svg";
import styled from "styled-components";

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: 5px solid purple;
  border-color: purple transparent transparent transparent;
  border-radius: 170%/50px 50px;
`;
const About = () => {
  return (
    <section className="about">
      <img src={wave} alt="" className="wave" />
      <div className="bottom-section">
        <h1>About Us</h1>
        <CurvedLine />
      </div>
    </section>
  );
};

export default About;
