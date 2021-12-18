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
  z-index: -1;
  margin-top: 355px;
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
const Content = styled.div``;
const TextBlock = styled.div``;

const Services = () => {
  return (
    <ServicesSection>
      <Background>
        <Title>Our Services:</Title>
        <Line />
        <Triangle />
      </Background>
      <Content>
        <TextBlock></TextBlock>
      </Content>
    </ServicesSection>
  );
};

export default Services;
