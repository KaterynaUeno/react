import styled from "styled-components";
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
  background-color: #171f47;
  background-size: auto 85vh;
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
    left: 25%;
    bottom: 0;
    border: solid 2px #ebcdf9;
    transfor: translate(-50%);
  }
`;
const Line = styled.span``;
const Triangle = styled.span``;

const Services = () => {
  return (
    <ServicesSection>
      <Background>
        <Title>Our Services:</Title>
        <Line />
        <Triangle />
      </Background>
    </ServicesSection>
  );
};

export default Services;
