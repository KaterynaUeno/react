import React, { useRef } from "react";
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
`;
const AnchorComponent = () => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);
  return (
    <Container>
      <Slider ref={ref}>
        {[...Array(25)].map((x, id) => {
          return (
            <Link
              key={id}
              width={25}
              height={25}
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
