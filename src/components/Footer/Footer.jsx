import React from "react";
import styled from "styled-components";
import footerBg from "../../assets/footerBg.png";
import logo from "../../assets/logo.png";
import { FaWhatsapp, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterBG = styled.div`
  position: relative;
  height: 400px;
  width: 100vw;
  background: url(${footerBg});
  margin: -8px;
`;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
  padding: 5rem;
  align-items: center;
`;

const FooterGrid1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -50px;
`;

const FooterGrid2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -50px;
`;

const FooterGrid3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -50px;
`;

const FooterGrid4 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -50px;
`;

const FooterGrid5 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -50px;
`;

const FooterGrid6 = styled.div`
  display: flex;
  width: 80%;
  border: 1px solid #ffffff;
  justify-content: center;
  margin: 0 auto;
  margin-top: 150px;
`;
const FooterGrid7 = styled.h6`
  height: 57px;
  width: 400px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0 auto;
`;

const GridContent1 = styled.div`
  height: 80px;
  width: 50px;
  background: url(${logo}) no-repeat;
`;

const GridContent2 = styled.p`
  position: absolute;
  height: 120px;
  width: 330px;
  font-family: Poppins;
  text-align: left;
  margin-top: 100px;
`;

const GridContent3 = styled.h3`
  position: absolute;
  height: 47px;
  width: 250px;
  font-family: Orbitron;
  font-size: 20px;
  font-weight: 800;
  line-height: 25px;
  letter-spacing: 0em;
  margin-left: 1rem;
  text-align: left;
`;

const GridContent4 = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const GridContent5 = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: left;
  margin-top: 50px;
`;
const AnchorLinks = styled(Link)`
  margin: 1rem;
  font-family: Orbitron;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  color: #ffffffc8;
  letter-spacing: 0.05em;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;
const ButtonIcon = styled.div`
  font-size: 1.6rem;
  border: 1.5px solid;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: white;
  margin-left: 0.7rem;
  margin-top: 60px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterBG>
      <FooterContainer>
        <FooterGrid1>
          <GridContent1></GridContent1>
          <GridContent2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            facilisis blandit posuere lectus tortor. Orci blandit id diam in
            gravida.
          </GridContent2>
        </FooterGrid1>
        <FooterGrid2>
          <GridContent3>Social Accounts</GridContent3>
          <GridContent4>
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
          </GridContent4>
        </FooterGrid2>
        <FooterGrid3>
          <GridContent3>Product</GridContent3>
          <GridContent5>
            <AnchorLinks>Blockchain</AnchorLinks>
            <AnchorLinks>Dex</AnchorLinks>
            <AnchorLinks>Social Network</AnchorLinks>
            <AnchorLinks>Gaming</AnchorLinks>
          </GridContent5>
        </FooterGrid3>
        <FooterGrid4>
          <GridContent3>About Bitechchain</GridContent3>
          <GridContent5>
            <AnchorLinks to='/'>Home</AnchorLinks>
            <AnchorLinks>About Us</AnchorLinks>
            <AnchorLinks>Roadmap</AnchorLinks>
            <AnchorLinks>Contact Us</AnchorLinks>
          </GridContent5>
        </FooterGrid4>
        <FooterGrid5>
          <GridContent3>Support</GridContent3>
          <GridContent5>
            <AnchorLinks>FAQs</AnchorLinks>
            <AnchorLinks>Terms & Conditions</AnchorLinks>
            <AnchorLinks>Privacy Policy</AnchorLinks>
          </GridContent5>
        </FooterGrid5>
      </FooterContainer>
      <FooterGrid6></FooterGrid6>
      <FooterGrid7>
        2022 © Biworld Group Limited Company. All Rights Reserved Lic. No. :
        3851783561
      </FooterGrid7>
    </FooterBG>
  );
};

export default Footer;
