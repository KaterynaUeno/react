import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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
  transform: translateY(50%);

  .chain {
    color: black;
    transform: rotate(135deg);
  }
`;
const AnchorComponent = () => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let difference = Math.max(bodyHeight - (scrollPosition + windowSize));

      let differenceP = (difference * 100) / (bodyHeight - windowSize);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container>
      <Slider ref={ref}>
        {[...Array(50)].map((x, id) => {
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
        <Anchor height={30} width={30} />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
