import React, {useState} from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import NavButton from "../Button/NavButton";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1.2rem;
`;

const BrandLogoContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 70px;
  width: 40px;
  padding-left: 2.5rem;
  border-radius: 0px;
`;

const AssessibilityContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 2.5rem;
`;

const AnchorLinks = styled(Link)`
  margin: 1rem;
  font-family: Orbitron;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
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

const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <section className="navbar">
      <NavbarContainer>
        <BrandLogoContainer>
          <LogoImage src={logo} alt="Brand Logo" />
        </BrandLogoContainer>

        <AssessibilityContainer>
          <AnchorLinks to="/about">ABOUT US</AnchorLinks>
          <AnchorLinks to="/projects">OUR PROJECTS</AnchorLinks>
          <AnchorLinks to="/contact">CONTACT US</AnchorLinks>
          {isLoggedIn ? (
            <AnchorLinks onClick={handleLoginClick}>LOGOUT</AnchorLinks>
          ) : (
            <AnchorLinks to="/login">LOGIN</AnchorLinks>
          )}
          {isLoggedIn ? (
            <NavButton>MY ACCOUNT</NavButton>
          ) : (
            <NavButton><AnchorLinks to="/register">START NOW</AnchorLinks></NavButton>
          )}
        </AssessibilityContainer>
      </NavbarContainer>
    </section>
  );
};

export default Navbar;