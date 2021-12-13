import "./style.css";
import wave from "../../assets/wave.svg";
import spaceman from "../../assets/spaceman-removebg-preview.png";
import person from "../../assets/person-removebg-preview.png";
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
      <div className="rocket">
        <img src={spaceman} alt="rocket" width="200px" height="350px" />
      </div>
      <div className="text">
        <img src={person} alt="rocket" width="310px" height="280px" />
      </div>
      <p>
        We started as a group of young, nerdy entrepreneurs hoping to build a
        for-profit tech company that could be a vehicle for good.
      </p>
    </section>
  );
};

export default About;
