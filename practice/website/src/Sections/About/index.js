import "./style.css";
import wave from "../../assets/wave.svg";
import hand from "../../assets/hand.svg";
const About = () => {
  return (
    <section className="about">
      <img src={wave} alt="" className="wave" />
      <div className="hand">
        <img src={hand} alt="" className="hand" />
      </div>
    </section>
  );
};

export default About;
