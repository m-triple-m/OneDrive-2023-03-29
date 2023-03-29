import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -7rem -7rem 5rem 0;

`;

export const FormContainer = styled.form`
  width: 480px;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled(Link)`
  font-size: 12px;
  color: rgba(200, 200, 200 0.8);
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  margin-bottom: 0.75rem;
  padding: 0 1rem;
`;

export const BoldLink = styled(Link)`
  font-size: 12px;
  color: #3f0e6d;
  font-weight: 500;
  text-decoration: none;
`;
export const RegisterLink = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  color: #F650FF;
`;

export const Input = styled.input`
  height: 60px;
  width: 485px;
  outline: none;
  margin: 0.5rem 0;
  padding: 0 10px;
  border-radius: 50px;
  color: #fff;
  font-size: 15px;
  border-bottom: 1px solid transparent;
  transition: all 200ms ease-in-out;

  &::placeholder {
    color: #c8c8c8a4;
  }

  background: linear-gradient(
    108.03deg,
    rgba(196, 34, 198, 0.1) 5.25%,
    rgba(204, 63, 207, 0.2127) 20%,
    rgba(223, 128, 226, 0.4894) 56.23%,
    rgba(237, 176, 240, 0.7223) 86.73%,
    #f6cef9 109.94%,
    #f9d9fc 123.1%
  );
  
  &:hover {
    box-shadow: 1px 1px 1px #ccc;
  }
`;

export const SubmitButton = styled.button`
  height: 60px;
  width: 500px;
  border-radius: 100px;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0 10px;
  margin-top: 0.7rem;
  margin-left: 10px;
  background: linear-gradient(
    182.4deg,
    #611bb5 2.54%,
    rgba(255, 255, 255, 0) 222.36%
  );

  &:hover {
    box-shadow: 1px 1px 2px #ccc;
  }
`;

const Common = () => {
  return <div>Common</div>;
};

export default Common;
