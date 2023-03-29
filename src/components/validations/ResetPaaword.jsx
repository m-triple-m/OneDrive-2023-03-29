import React, { useState } from "react";
import styled from "styled-components";
import circleRing from "../../assets/circleRing.png";

import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
} from "./Common";

const ResetPasswordContainer = styled.div`
  height: 92vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ResetPasswordContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${circleRing}) no-repeat center/550px;
`;
const ResetPasswordText = styled.h1`
  height: 174px;
  width: 392px;
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 900;
  font-size: 55px;
  line-height: 85px;
`;

const ResetPasswordContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1rem;
`;
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const HeaderText = styled.h1`
  font-size: 30px;
  font-weight: 900;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;
const SubHeader = styled.h5`
  width: 395px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0em;
  color: #fff;
  z-index: 10;
  margin: 0;
  margin-top: 10px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  margin: 10px 10px;
`;
const RememberMeCheckbox = styled.input`
  margin-right: 5px;
`;

const ErrorMessage = styled.h5`
  color: #c50000df;
  font-family: Inter;
  margin-top: -0.5rem;
  margin-left: 15px;
  margin-bottom: -0.5rem;
`;

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");


  const validateEmail = (email) => {
    const regex = /^([A-Za-z0-9_]+[-.]?[A-Za-z0-9_]+)+@(?!(?:[A-Za-z0-9_]+\.)?([A-Za-z]{1,3})\.)([A-Za-z0-9_]+[-.]?[A-Za-z0-9_]+)+\.([A-Za-z]{2,4})$/;
    return regex.test(email);
  };



  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    if (!value.trim()) {
      setEmailError("The email field cannot be empty.");
    } else if (validateEmail(value)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      // handle form submission
      console.log("Form submitted");
    } else {
      setEmailError("Please enter a valid email address.");
      
    }
  };

  return (
    <ResetPasswordContainer>
      <ResetPasswordContainer1>
        <ResetPasswordText>Welcome to Bitechchain</ResetPasswordText>
      </ResetPasswordContainer1>
      <ResetPasswordContainer2>
        <BoxContainer>
          <TopContainer>
            <HeaderContainer>
              <HeaderText>Reset Password</HeaderText>
              <SubHeader>
                If you forgot your password, well, then we’ll email you
                instructions to reset your password.
              </SubHeader>
            </HeaderContainer>
          </TopContainer>
          <InnerContainer>
            <FormContainer onSubmit={handleSubmit}>
            <Input
                type="text"
                id="userId"
                name="userId"
                onKeyDown={(e) => {
                  if (e.keyCode === 32) e.preventDefault();
                }}
                required
                placeholder="Enter your user id"
              />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                onKeyDown={(e) => {
                  if (e.keyCode === 32) e.preventDefault();
                }}
                required
              />
              {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
              
            </FormContainer>
            <CheckboxContainer>
              <label>
                <RememberMeCheckbox type="checkbox" required />
                Remember me
              </label>
            </CheckboxContainer>
            <SubmitButton type="submit">Send Reset Link</SubmitButton>
           
          </InnerContainer>
        </BoxContainer>
      </ResetPasswordContainer2>
    </ResetPasswordContainer>
  );
};

export default ResetPassword;
