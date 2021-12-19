import React from "react";
import styled from "styled-components";
import "./style.css";
const RightBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;

  @media only Screen and (max-width: 48em) {
    display: none;
  }
`;
const SvgBlock = ({ svg }) => {
  const SvgIcon = require(`../../assets/${svg}`).default;
  return (
    <RightBlock>
      <img src={SvgIcon} alt="" className="design" />
    </RightBlock>
  );
};

export default SvgBlock;
