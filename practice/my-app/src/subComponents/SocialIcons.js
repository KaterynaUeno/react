import React from "react";
import { NavLink } from "react-router-dom";
import { Github } from "../AllSvgs";
import { Facebook } from "../AllSvgs";
import { Twitter } from "../AllSvgs";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";

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
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;
const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink
          target="_blank"
          to={{ pathname: "https://github.com/KaterynaUeno" }}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank" to="/">
          <Twitter
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank" to="/">
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
