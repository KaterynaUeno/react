import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import SvgBlock from "../../components/SvgBlock";
import TextBlock from "../../components/TextBlock";
import Tube from "../../assets/3dtube.png";
import Cone from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ServicesSection = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 0px;
  position: relative;
  color: #f4ebf2;
  opacity: 0.9;
`;
const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100%;
  background-color: #171f47;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`;
const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
  margin-top: 1rem;
  position: relative;

  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    border: solid 2px #ebcdf9;
    transform: translate(-50%);
  }
`;
const Line = styled.span`
  border-left: 4px solid #f4ebf2;
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;
const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid #f4ebf2;
`;
const Content = styled.div`
  display: flex;
  margin: 10rem 10rem;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 12rem;
    }
  }
`;

const Obj = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  width: 20cw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only Screen and (max-width: 48em) {
    opacity: 0.1;
  }
`;

const Services = () => {
  const ref = useRef(null);
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  useEffect(() => {
    const element = ref.current;
    const line = document.getElementById("line");
    const triangle = document.getElementById("triangle");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("services"),
        start: "top top+=180",
        end: "bottom bottom",
        pin: element,
        pinReparent: true,
        markers: true,
      },
    });
    tl.fromTo(
      document.getElementById("line"),
      {
        height: "15rem",
      },
      {
        height: "3rem",
        duration: 2,
        scrollTrigger: {
          trigger: line,
          start: "top top+=200",
          scrub: true,
        },
      }
    );

    revealRefs.current.forEach((el, index) => {
      tl.from(el.childNodes[0], {
        x: -300,
        opacity: 0,
        duration: 2,
        ease: "power2",

        scrollTrigger: {
          trigger: el,
          id: `section -${index + 1}`,
          start: "top center+=100",
          end: "bottom bottom-=200",
          scrub: true,
          snap: true,
        },
      })
        .to(el.childNodes[1], {
          transform: "scale(0)",
          duration: 2,
          ease: "power2.inOut",

          scrollTrigger: {
            trigger: el.childNodes[1],
            id: `section -${index + 1}`,
            start: "top center",
            end: "bottom center",
            scrub: true,
            snap: true,
          },
        })
        .from(el.childNodes[2], {
          y: 400,
          duration: 2,
          ease: "power2",

          scrollTrigger: {
            trigger: el,
            id: `section -${index + 1}`,
            start: "top center+=100",
            end: "bottom center -=200",
            scrub: true,
            snap: true,
          },
        })
        .to(el, {
          opacity: 0,
          duration: 2,
          ease: "power2",

          scrollTrigger: {
            trigger: el,
            id: `section -${index + 1}`,
            start: "top top +=200",
            end: "center top +=300",
            scrub: true,
            snap: true,
          },
        });
    });
  }, []);
  return (
    <ServicesSection id="services">
      <Background ref={ref}>
        <Title>Our Services:</Title>
        <Line id="line" />
        <Triangle id="triangle" />
      </Background>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Design"
          title="We build award-winning designs"
          subtext="Our clients highly recommend our services"
        />
        <Obj>
          <img src={Tube} alt="" width="200" height="200" />
        </Obj>
        <SvgBlock svg="Design.svg" />
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Develop"
          title="We develop high quality Web and App"
          subtext="We find a solution for any challenge"
        />
        <Obj>
          <img src={Cone} alt="" width="200" height="200" />
        </Obj>
        <SvgBlock svg="Develop.svg" />
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Support"
          title="We provide support for your digital presence"
          subtext="Once your system is online, we will stay on hand to help you use it and provide technical support to your business"
        />
        <Obj>
          <img src={Capsule} alt="" width="200" height="200" />
        </Obj>
        <SvgBlock svg="Support.svg" />
      </Content>
    </ServicesSection>
  );
};

export default Services;
