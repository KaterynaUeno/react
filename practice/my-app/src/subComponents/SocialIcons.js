import React from "react";
import { NavLink } from "react-router-dom";
import { Github } from "../AllSvgs";
import { Facebook } from "../AllSvgs";
import { Twitter } from "../AllSvgs";
import styled from "styled-components";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 5;
  margin-bottom: 1rem;
`;

const Line = styled.span`
  width: 1.5px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;
const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <NavLink
          target="_blank"
          to={{ pathname: "https://github.com/KaterynaUeno" }}
        >
          <Github width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank" to="/">
          <Twitter width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank" to="/">
          <Facebook width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
