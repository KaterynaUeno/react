import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { Anchor } from "../AllSvgs";

const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateX(-100%);

  .chain {
    transform: rotate(135deg);
  }
`;

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
`;
const AnchorComponent = (props) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let difference = Math.max(bodyHeight - (scrollPosition + windowSize));

      let differenceP = (difference * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-differenceP}%)`;

      if (window.pageYOffset > 5) {
        hiddenRef.current.style.dispay = "none";
      } else {
        hiddenRef.current.style.dispay = "block";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container>
      <NavLink to="/">
        <PreDisplay href={hiddenRef} className="hidden">
          <Anchor height={30} width={30} fill="currentColor" />
        </PreDisplay>
      </NavLink>
      <Slider ref={ref}>
        {[...Array(props.numbers)].map((x, id) => {
          return (
            <Link
              key={id}
              width={30}
              height={30}
              fill="currentColor"
              className="chain"
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
