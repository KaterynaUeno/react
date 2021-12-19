import styled from "styled-components";
import SvgBlock from "../../components/SvgBlock";
import TextBlock from "../../components/TextBlock";
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
  margin: 1rem 1rem;
  align-items: center;
  justify-content: space-between;
`;

const Services = () => {
  return (
    <ServicesSection>
      <Background>
        <Title>Our Services:</Title>
        <Line />
        <Triangle />
      </Background>

      <Content>
        <TextBlock
          topic="Design"
          title="We build award-winning designs"
          subtext="Our clients highly recommend our services"
        />
        <SvgBlock svg="Design.svg" />
      </Content>
      <Content>
        <TextBlock
          topic="Develop"
          title="We develop high quality Web and App"
          subtext="We find a solution for any challenge"
        />
        <SvgBlock svg="Develop.svg" />
      </Content>
      <Content>
        <TextBlock
          topic="Support"
          title="We provide support for your digital presence"
          subtext="Once your system is online, we will stay on hand to help you use it and provide technical support to your business"
        />
        <SvgBlock svg="Support.svg" />
      </Content>
    </ServicesSection>
  );
};

export default Services;
