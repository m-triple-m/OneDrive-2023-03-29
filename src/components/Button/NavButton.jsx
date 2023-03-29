import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  height: 50px;
  width: 160px;
  border: 2px solid yellow;
  border-color:linear-gradient(180deg, #8A12F1 0%, #E2DF13 43.75%, #F1711A 70.83%, #DA3095 100%)
  border-radius: 100px;
  color: #ffffff;
  font-family: 'Orbitron', sans-serif;
  cursor: pointer;
  background-color: transparent;
  border-radius: 100px;
`;


const NavButton = (props) => {
  return (
    <ButtonWrapper>{props.children}</ButtonWrapper>
  )
}

export default NavButton