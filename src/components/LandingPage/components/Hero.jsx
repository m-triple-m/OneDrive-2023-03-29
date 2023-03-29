import React from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';
import circle from './assets/circle.png';
import cube from './assets/cube.png';
import shadowCircle from './assets/shadowCircle.png';
import { FaWhatsapp, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';


const HeroText = styled.h1`
  height: 244px;
  width: 650px;
  border-radius: 0;
  font-family: Orbitron;
  font-size: 90px;
  font-weight: 900;
  line-height: 122px;
  letter-spacing: 0em;
  text-align: left;
  text-shadow: 0px 0px 30px 0px #FFF8F8;
`;

const HeroSubText = styled.h3`
  height: 33px;
  width: 307px;
  font-family: Orbitron;
  font-size: 26px;
  font-weight: 800;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;
const ButtonIcon = styled.div`
font-size: 1.6rem;
margin-right: 5px;
border: 1.5px solid;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
color: white;
margin-left: 1rem;
cursor: pointer;
`;



const HeroDescription = styled.p`
  height: 55px;
  width: 602px;
  border-radius: 0;
  font-family: Inter;
  font-size: 16px;
  font-weight: 200;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

const HeroContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1rem;
    padding: 3rem;
`;


const HeroColumn1 = styled.div`
  height: 100%;
  background: url(${circle}) no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;


const HeroColumn2 = styled.div`
  height: 100%;
  background: url(${shadowCircle}) no-repeat center/650px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  padding-left: 2.5rem;

  & > :nth-child(2) {
    margin-top: 30px;
  }
  & > :nth-child(5) {
    margin-top: 30px;
  }
  & > :nth-child(8) {
    margin-top: 30px;
  }
`;

const HeroCard = styled.div`
  height: 197px;
  width: 191px;
  border: 2px solid yellow;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 14px;
  background: url(${cube}) no-repeat center,
  linear-gradient(90deg, rgba(78,7,79,1) 13%, rgba(89,27,91,1) 29%, rgba(142,80,144,1) 59%, rgba(189,136,191,1) 82%, rgba(220,178,223,1) 94%, rgba(244,198,247,1) 100%, rgba(249,217,252,1) 100%);
  background-size: auto;
  background-position: center;
  align-items: center;
  transition: transform 0.2s ease-out; 

  &:hover {
    transform: translateY(-5px); 
  }
`;







const Hero = () => {
    return (
        <HeroContainer>
            <HeroColumn1>
                <HeroText>UNLOCK THE POWER</HeroText>
                <HeroSubText>EXTENDED REALITY</HeroSubText>
                <HeroDescription>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                </HeroDescription>
                <ButtonContainer>
                    <Button>JOIN NOW</Button>
                    <ButtonIcon>
                        <FaWhatsapp color="white" />
                    </ButtonIcon>
                    <ButtonIcon>
                        <FaTwitter color="white" />
                    </ButtonIcon>
                    <ButtonIcon>
                        <FaFacebook color="white" />
                    </ButtonIcon>
                    <ButtonIcon>
                        <FaInstagram color="white" />
                    </ButtonIcon>
                </ButtonContainer>
            </HeroColumn1>

            <HeroColumn2>
                <HeroCard>
                    <h5>BAI Chain</h5>
                </HeroCard>
                <HeroCard>
                    <h5>BAI Chain</h5>
                </HeroCard>
                <HeroCard>
                    <h5>BAI Chain</h5>
                </HeroCard>
                <HeroCard>
                    <h5>BAI Chain</h5>
                </HeroCard>
                <HeroCard>
                    <h5>BAI Chain</h5>
                </HeroCard>
                <HeroCard>
                    <h5>BAI Chain</h5>
                </HeroCard>
                <HeroCard>
                    <h5>BAI Chain</h5>
                </HeroCard>
                <HeroCard>
                    <h5>BAI Chain</h5>
                </HeroCard>
                <HeroCard>
                    <h5>BAI Chain</h5>
                </HeroCard>
            </HeroColumn2>
        </HeroContainer>
    );
};

export default Hero;
