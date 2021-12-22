import styled from "styled-components";
import arrow from "../../assets/arrow-up.svg";

const ScrollUp = styled.div`
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  cursor: pointer;

  @media only Screen and (max-width: 48em) {
    display: none;
  }
  img {
    width: 3rem;
    height: 3rem;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;
const ScrollToTop = () => {
  const scroll = () => {
    const element = document.getElementById("home");
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <ScrollUp
      onClick={() => {
        scroll();
      }}
    >
      <img src={arrow} alt="arrowUp" />
    </ScrollUp>
  );
};

export default ScrollToTop;
