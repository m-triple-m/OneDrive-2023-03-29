import React from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';
import { BiRightArrowAlt } from 'react-icons/bi';
import multiCubes from './assets/multiCubes.png';
import circle from './assets/circle.png';
import controller from './assets/controller.png';
import metaBoy from './assets/metaBoy.png';
import mVerse from './assets/mVerse.png';


const AboutHeadingText = styled.h3`
  height: 33px;

  
  width: 307px;
  font-family: Orbitron;
  font-size: 26px;
  font-weight: 800;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: right;
  color: grey;
  margin-top: 50px;
  margin-left:44.5px
`;
const AboutText = styled.h1`
  height: 176px;
  width: 515px;
  font-family: 'Orbitron';
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  line-height: 88px;
  text-align: left;
  margin-top: -10px;
  margin-left: 195px;
  text-shadow: 0px 0px 5px #FFF8F8;

`;

const AboutDescriptionText = styled.p`
  height: 128px;
  width: 602px;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: -20px;
  margin-left: 195px;
  color: #CECECE;
`
const AboutText1 = styled.h1`
  height: 113px;
  width: 264px;
  font-family: 'Orbitron';
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  text-align: left;
  margin-left: 235px;
  margin-top: 50px;

`;
const AboutDescriptionText1 = styled.p`
  Width: 250px;
  Height: 26px;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`
const AboutText2 = styled.h1`
  height: 113px;
  font-family: 'Orbitron';
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  text-align: left;
  margin-left: 100px;
  margin-top: 100px;

`;
const AboutText3 = styled.h1`
  height: 240px;
  width: 680px;
  font-family: 'Orbitron';
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  text-align: left;
  margin-top: -100px;

`;
const AboutText4 = styled.h1`
  height: 240px;
  width: 680px;
  font-family: 'Orbitron';
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  text-align: left;

`;
const AboutDescriptionText2 = styled.p`
  height: 128px;
  width: 654px;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 100px;
  margin-top: -60px;
  color: #ffffff;
`
const AboutDescriptionText3 = styled.p`
  height: 128px;
  width: 654px;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: -20px;
  margin-bottom: -30px;
  color: #ffffff;
`;

const AboutDescriptionText4 = styled.p`
  height: 128px;
  width: 654px;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 20px;
  margin-bottom: -30px;
  color: #ffffff;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-left: 195px;

`;
const ButtonContainer1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -30px;
  margin-left: 100px;

`;

const AnchorLinks = styled.a`
  margin:1rem;
  margin-left: 2rem;
  font-family: Inter;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover{
      filter: contrast(0.6);
  }
`

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1rem;
  padding: 3rem;
`;

const AboutColumn1 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const AboutColumn2 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const AboutColumn3 = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;  
  background: url(${circle}) no-repeat left/500px;
`;

const AboutColumn4 = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: url(${multiCubes}) no-repeat center/350px;
`;
const AboutColumn5 = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  background: url(${controller}) no-repeat center/600px;
`;
const AboutColumn6 = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const AboutColumn7 = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const AboutColumn8 = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: url(${metaBoy}) no-repeat center/550px;
`;
const AboutColumn9 = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  background: url(${mVerse}) no-repeat center/600px;
`;
const AboutColumn10 = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutColumn1>
          <AboutHeadingText>
            ABOUT US
          </AboutHeadingText>
          <AboutText>
            WELCOME TO BIWORLD
          </AboutText>
          <AboutDescriptionText>
            Lorem ipsum dolor sit amet,
            consectetuer adi-piscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna.
            Lorem ipsum dolor sit amet, consectetuer adi-piscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            Lorem ipsum dolor sit amet, consectetuer adi-piscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          </AboutDescriptionText>
          <ButtonContainer>
            <Button>JOIN NOW</Button>
            <AnchorLinks>EXPLORE TOKEN <BiRightArrowAlt /></AnchorLinks>
          </ButtonContainer>
        </AboutColumn1>

        <AboutColumn2>
          <AboutText1>
            262+
            <AboutDescriptionText1>
              Apps & services and growing.
            </AboutDescriptionText1>
          </AboutText1>

          <AboutText1>
            $59B+
            <AboutDescriptionText1>
              Digital assets under management.
            </AboutDescriptionText1>
          </AboutText1>
        </AboutColumn2>

        <AboutColumn3>
          <AboutText2>
            BAI CHAIN
          </AboutText2>
          <AboutDescriptionText2>
            Lorem ipsum dolor sit amet,
            consectetuer adi-piscing elit,
            sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna.
            Lorem ipsum dolor sit amet, consectetuer adi-piscing elit.
          </AboutDescriptionText2>
          <ButtonContainer1>
            <Button>READ MORE</Button>
          </ButtonContainer1>
        </AboutColumn3>
        <AboutColumn4></AboutColumn4>

        <AboutColumn5></AboutColumn5>
        <AboutColumn6>
          <AboutText3>
            Biworld Gaming is Premier Crash Game
          </AboutText3>
          <AboutDescriptionText3>
            Biworld Gaming is a fair gaming platform built on blockchain technology. Play and enjoy extremely fun game.
          </AboutDescriptionText3>
          <Button>START NOW</Button>
        </AboutColumn6>

        <AboutColumn7>
          <AboutText2>
            Play to Earn
          </AboutText2>
          <AboutDescriptionText2>
            Biworld Gaming is a fair gaming platform built on blockchain technology. Play and enjoy extremely fun game.
          </AboutDescriptionText2>
          <ButtonContainer1>
            <Button>READ MORE</Button>
          </ButtonContainer1>
        </AboutColumn7>
        <AboutColumn8></AboutColumn8>

        <AboutColumn9></AboutColumn9>
        <AboutColumn10>
          <AboutText4>
            Metabit
            <AboutDescriptionText4>
            Lorem ipsum dolor sit amet, consectetuer adi-piscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
            Lorem ipsum dolor sit amet, consectetuer adi-piscing elit.
          </AboutDescriptionText4>
          <Button>START NOW</Button>
          </AboutText4>
          
          
        </AboutColumn10>



      </AboutContainer>
    </>
  )
}



export default About