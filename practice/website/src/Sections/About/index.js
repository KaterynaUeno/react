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
    <div className="about">
      <img src={wave} alt="" className="wave" />
      <div className="bottom-section">
        <div>
          <h1>About Us</h1>
          <CurvedLine />
        </div>
        <div className="content">
          <img
            src={spaceman}
            alt="spaceman"
            width="200px"
            height="350px"
            className="spaceman"
          />
          <div className="text">
            <img src={person} alt="person" width="310px" height="280px" />
            <h3>
              We started as a group of young, nerdy entrepreneurs hoping to
              build a for-profit tech company that could be a vehicle for good.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
