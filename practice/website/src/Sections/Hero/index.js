import "./styles.css";
import styled, { keyframes } from "styled-components";
import Pink from "../../assets/blobPink.png";
import White from "../../assets/blob white.png";
import Purple from "../../assets/blob purple.png";
import Arrow from "../../assets/Arrow Right.svg";
import Mobile from "../../assets/mobile.svg";

const upAndDown = keyframes`
0% {transform:translateY(-5px);}
50% {transform:translateY(10px);}
100% {transform:translateY(-5px);}
`;
const Blob = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  } ;
`;
const PinkBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(5rem + 5vw);
  z-index: 6;
`;
const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`;
const WhiteBlob = styled.div`
  width: calc(18% + 20vw);
  position: absolute;
  right: 0;
  top: calc(10rem + 10vw);
  z-index: 3;
`;

const MobileImg = styled.img`
  max-width: 100%;
  width: cal(30% + 30vw);
  z-index: 7;
  height: auto;
  animation: ${upAndDown} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    opacity: 0.5;
  }
`;

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Blob>
        <PinkBlob>
          <img src={Pink} alt="" width="400" height="400"></img>
        </PinkBlob>
        <WhiteBlob>
          <img src={White} alt="" width="400" height="400"></img>
        </WhiteBlob>
        <PurpleBlob>
          <img src={Purple} alt="" width="400" height="400"></img>
        </PurpleBlob>
      </Blob>
      <div className="main-content">
        <div className="left-block">
          <div className="topic">
            <span className="circle">Hello, we're a design company</span>
          </div>
          <h1 className="title">
            Experts in Website Design & Development based in London
          </h1>
          <h5 className="subtext">
            We merge imagination and technology to help brands grow in an age of
            digital transformation
          </h5>
          <button className="btn">
            Get in touch &nbsp;
            <img src={Arrow} alt="" className="mobile-img"></img>
          </button>
        </div>
        <MobileImg src={Mobile} alt="" width="400" height="400" />
      </div>
    </div>
  );
};

export default HeroSection;
