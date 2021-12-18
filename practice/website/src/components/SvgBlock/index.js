import styled from "styled-components";
const RightBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;
`;
const SvgBlock = () => {
  const SvgIcon = require("../../assets/Design.svg").default;
  return (
    <RightBlock>
      <img src={SvgIcon} alt="" />
    </RightBlock>
  );
};

export default SvgBlock;
