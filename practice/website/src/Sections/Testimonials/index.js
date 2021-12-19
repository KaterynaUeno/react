import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Card from "../../components/Card";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
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

const Carousel = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  @media only Screen and (max-width: 48em) {
    width: 90vw;
  }
  .slick-slider .slick-arrow:before {
    color: black;
    font-size: 1.5rem;
    @media only Screen and (max-width: 48em){
    display:none;
  }

  .slick-slider .slick-dots button:before {
    color: pink;
    font-size: 1rem;
  }

  .slick-slide .slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;
const Testimonials = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Section>
      <Title>What our clients say about us</Title>
      <Carousel>
        <Slider {...settings}>
          <Card
            text="This type of company is the first I have had the pleasure to work with and the results have been amazing."
            name="IT Manager, Spine Care Company"
            image="avatar-1"
          />
          <Card
            text="We are very impressed with the level of service provided by Ignite Visibility"
            name="Director of Admission, Army & Navy Academy"
            image="avatar-4"
          />
          <Card
            text="I find it very impressive with how much work they put into each campaign."
            name="Administrator, O'Keefe Ceramics"
            image="avatar-3"
          />
        </Slider>
      </Carousel>
    </Section>
  );
};

export default Testimonials;
