import "./styles.css";
import styled from "styled-components";
import Pink from "../../assets/blobPink.png";
import White from "../../assets/blob white.png";
import Purple from "../../assets/blob purple.png";
import Arrow from "../../assets/Arrow Right.svg";
const Blob = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
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
            <div className="circle">
              <span>Hello, we're a design company</span>
            </div>
          </div>
          <div className="title">
            Experts inWebsite & Development based in London
          </div>
          <div className="subtext">
            We merge imagination and technology to help brands grow in an age of
            digital transformation
          </div>
          <button className="btn">
            Get in touch &nbsp;
            <img src={Arrow} alt="" width="400" height="400"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
