import "./style.css";
import wave from "../../assets/wave.svg";
import spaceman from "../../assets/spaceman-removebg-preview.png";
import person from "../../assets/person-removebg-preview.png";
import styled, { keyframes } from "styled-components";

const upAndDown = keyframes`
0%{transform:translateY(-5px)};
50%{transform:translateY(10px)};
100%{transform:translateY(-5px)}`;

const Spaceman = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${upAndDown} 3s ease infinite;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: 5px solid purple;
  border-color: purple transparent transparent transparent;
  border-radius: 170%/50px 50px;
`;
const About = () => {
  return (
    <div className="about">
      <img src={wave} alt="" className="wave" />
      <div className="bottom-section">
        <div>
          <h1 id="animation">About Us</h1>
          <CurvedLine />
          {/* <img src={person} alt="person" width="310px" height="280px" /> */}
        </div>
      </div>
      <div className="content">
        <Spaceman>
          <img
            src={spaceman}
            alt="spaceman"
            width="200px"
            height="350px"
            className="spaceman"
          />
        </Spaceman>
        <div className="text">
          <h3>
            We started as a group of young, nerdy entrepreneurs hoping to build
            a for-profit tech company that could be a vehicle for good.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
