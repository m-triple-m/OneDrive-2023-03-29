import React, { useState } from "react";
import styled from "styled-components";
import circleRing from "../../assets/circleRing.png";

import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  RegisterLink,
} from "./Common";

const LoginContainer = styled.div`
  height: 92vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const LoginContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${circleRing}) no-repeat center/550px;
`;
const LoginText = styled.h1`
  height: 174px;
  width: 392px;
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 900;
  font-size: 55px;
  line-height: 85px;
`;

const LoginContainer2 = styled.div`
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
  width: 283px;
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const regex =
      /^([A-Za-z0-9_]+[-.]?[A-Za-z0-9_]+)+@(?!(?:[A-Za-z0-9_]+\.)?([A-Za-z]{1,3})\.)([A-Za-z0-9_]+[-.]?[A-Za-z0-9_]+)+\.([A-Za-z]{2,4})$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/;
    return regex.test(password) && password.length >= 8;
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

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);

    if (!value.trim()) {
      setPasswordError("The password field cannot be empty.");
    } else if (validatePassword(value)) {
      setPasswordError("");
    } else {
      setPasswordError("Please enter a valid password.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {
      // handle form submission
      console.log("Form submitted");
    } else {
      setEmailError("Please enter a valid email address.");
      setPasswordError("Please enter a valid password.");
    }
  };

  return (
    <LoginContainer>
      <LoginContainer1>
        <LoginText>Welcome to Bitechchain</LoginText>
      </LoginContainer1>
      <LoginContainer2>
        <BoxContainer>
          <TopContainer>
            <HeaderContainer>
              <HeaderText>Login</HeaderText>
              <SubHeader>Sign in using your username and password</SubHeader>
            </HeaderContainer>
          </TopContainer>
          <InnerContainer>
            <FormContainer onSubmit={handleSubmit}>
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
              <Input
                type="password"
                id="password"
                name="password"

                value={password}
                onChange={handlePasswordChange}
                onKeyDown={(e) => {
                  if (e.keyCode === 32) e.preventDefault();
                }}
                required
                placeholder="Password"
                
              />
              {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
            </FormContainer>
            <CheckboxContainer>
              <label>
                <RememberMeCheckbox type="checkbox" required />
                Remember me
              </label>
              <MutedLink to="/reset">Forget password?</MutedLink>
            </CheckboxContainer>
            <SubmitButton type="submit">Login</SubmitButton>
            <p>
              New on our platform?
              <RegisterLink to="/register"> Register</RegisterLink>
            </p>
          </InnerContainer>
        </BoxContainer>
      </LoginContainer2>
    </LoginContainer>
  );
};

export default Login;
