import styled from "styled-components";
import "./style.css";
const RightBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
`;
const SvgBlock = () => {
  const SvgIcon = require("../../assets/Design.svg").default;
  return (
    <RightBlock>
      <img src={SvgIcon} alt="" className="design" />
    </RightBlock>
  );
};

export default SvgBlock;
