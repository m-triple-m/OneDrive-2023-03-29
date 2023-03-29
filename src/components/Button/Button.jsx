import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  height: 50px;
  width: 160px;
  border-radius: 100px;
  color: #ffffff;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(#611bb5 100%, #ffffff 0%);
  border: none;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0px 13px 27px rgba(0, 0, 0, 0.25));
    border-radius: 27px;
    background-color: #3b7fff;
    }
  }
`;


const Button = (props) => {
    return (
        <ButtonWrapper>{props.children}</ButtonWrapper>
    )
}

export default Button;
