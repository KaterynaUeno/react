import "./style.css";
const TextBlock = ({ title, topic, subtext }) => {
  return (
    <div className="left-block">
      <div className="topic">
        <span className="circle">{topic}</span>
      </div>
      <h1 className="title">{title}</h1>
      <h5 className="subtext">{subtext}</h5>
    </div>
  );
};

export default TextBlock;
