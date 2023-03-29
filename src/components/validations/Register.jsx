import React, { useState, useEffect } from "react";
import styled from "styled-components";
import circleRing from "../../assets/circleRing.png";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  RegisterLink,
} from "./Common";

const RegisterContainer = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const RegisterContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${circleRing}) no-repeat center/550px;
`;

const RegisterText = styled.h1`
  height: 174px;
  width: 392px;
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 900;
  font-size: 55px;
  line-height: 85px;
`;

const RegisterContainer2 = styled.div`
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

const ErrorMessage = styled.h5`
  color: #c50000df;
  font-family: Inter;
  margin-top: -0.5rem;
  margin-left: 15px;
  margin-bottom: -0.5rem;
`;

const SelectCountry = styled.select`
  height: 60px;
  width: 485px;
  outline: none;
  margin: 0.5rem 0;
  padding: 0 10px;
  color: #888888b9;
  border-radius: 50px;
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

const Register = () => {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  //First Name
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  //last name
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  //email
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  //password
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  //confirm password
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  //country
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  //First Name validate
  const firstNameVerify = (text) => {
    const regex = /^(?!.*(\w)\1\1)[A-Za-z0-9]{2,15}$/i;

    if (text.length < 2) {
      return "First name should be more than 2 characters";
    } else if (!regex.test(text)) {
      if (/(\w)\1\1/.test(text)) {
        return "No character can be used more than 2 times";
      } else if (/[^\w\s]/.test(text)) {
        return "No special characters allowed";
      } else {
        return "Invalid input";
      }
    } else {
      return true;
    }
  };
  //Last name validate
  const LastNameVerify = (text) => {
    const regex = /^(?!.*([a-zA-Z])\1\1)[a-zA-Z]+$/i;
    if (text.trim().length === 0) {
      return "Last name cannot be empty";
    } else if (text === ".") {
      return true;
    } else if (text.endsWith(".")) {
      return "Last name should not be ending with .";
    } else if (!regex.test(text)) {
      return "Last name should only contain alphabetical characters";
    } else {
      return true;
    }
  };
  //email validate
  const validateEmail = (email) => {
    const regex = /^([A-Za-z0-9_]+[-.]?[A-Za-z0-9_]+)+@(?!(?:[A-Za-z0-9_]+\.)?([A-Za-z]{1,3})\.)([A-Za-z0-9_]+[-.]?[A-Za-z0-9_]+)+\.([A-Za-z]{2,4})$/;
    return regex.test(email);
  };
  //password validate
  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/;
    return regex.test(password) && password.length >= 8;
  };

  //handle First name
  const handleFirstNameChange = (event) => {
    const { value } = event.target;
    const capitalizedValue = capitalizeFirstLetter(value);
    setFirstName(capitalizedValue);
    if (!capitalizedValue.trim()) {
      setFirstNameError("The firstname field cannot be empty.");
    } else if (validateEmail(capitalizedValue)) {
      setFirstNameError("");
    } else {
      setFirstNameError(firstNameVerify(capitalizedValue));
    }
  };
  //handle last name
  const handleLastNameChange = (event) => {
    const { value } = event.target;
    const capitalizedValue = capitalizeFirstLetter(value);
    setLastName(capitalizedValue);
    if (!capitalizedValue.trim()) {
      setLastNameError("The Lastname field cannot be empty.");
    } else if (validateEmail(capitalizedValue)) {
      setLastNameError("");
    } else {
      setLastNameError(LastNameVerify(capitalizedValue));
    }
  };

  //handle emailname
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
  //handle password
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

  //handle confirm password
  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);

    if (!value.trim()) {
      setConfirmPasswordError("The confirm password field cannot be empty.");
    } else if (value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };
  //country
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const handleCountrySelect = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    const selectedCountryObject = countries.find((c) => c.name === country);
    setSelectedCountryCode(selectedCountryObject.callingCodes[0]);
  };
  const handlePhoneNumberChange = (event) => {
    const phoneNumber = event.target.value;
    setPhoneNumber(phoneNumber);
    const phoneNumberObj = parsePhoneNumberFromString(
      phoneNumber,
      selectedCountryCode
    );
    if (phoneNumberObj) {
      const formattedPhoneNumber = phoneNumberObj.formatInternational();
      setPhoneNumber(formattedPhoneNumber);
    }
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstNameError(
      firstNameVerify(firstName) || "Please enter a valid first name."
    );
    setLastNameError(
      LastNameVerify(lastName) || "Please enter a valid first name."
    );

    if (
      validateEmail(email) &&
      validatePassword(password) &&
      firstNameVerify(firstName) === true &&
      LastNameVerify(lastName) === true
    ) {
      // handle form submission
      console.log("Form submitted");
    } else {
      setEmailError("Please enter a valid email address.");
      setPasswordError("Please enter a valid password.");
    }
  };

  return (
    <RegisterContainer>
      <RegisterContainer1>
        <RegisterText>Welcome to Bitechchain</RegisterText>
      </RegisterContainer1>
      <RegisterContainer2>
        <BoxContainer>
          <TopContainer>
            <HeaderContainer>
              <HeaderText>REGISTER</HeaderText>
              <SubHeader>Fill the details below.</SubHeader>
            </HeaderContainer>
          </TopContainer>
          <InnerContainer>
            <FormContainer onSubmit={handleSubmit}>
              <Input placeholder="Sponsor" required />
              <Input
                placeholder="Username"
                required
                onKeyDown={(e) => {
                  if (e.keyCode === 32) e.preventDefault();
                }}
              />
              <Input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Firstname"
                value={firstName}
                onChange={handleFirstNameChange}
                onKeyDown={(e) => {
                  if (e.keyCode === 32) e.preventDefault();
                }}
                required
              />
              {firstNameError && <ErrorMessage>{firstNameError}</ErrorMessage>}
              <Input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Lastname"
                value={lastName}
                onChange={handleLastNameChange}
                onKeyDown={(e) => {
                  if (e.keyCode === 32) e.preventDefault();
                }}
                required
              />
              {lastNameError && <ErrorMessage>{lastNameError}</ErrorMessage>}
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
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                onKeyDown={(e) => {
                  if (e.keyCode === 32) e.preventDefault();
                }}
                required
              />
              {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onKeyDown={(e) => {
                  if (e.keyCode === 32) e.preventDefault();
                }}
                required
              />
              {confirmPasswordError && (
                <ErrorMessage>{confirmPasswordError}</ErrorMessage>
              )}
              <SelectCountry
                id="country"
                name="country"
                value={selectedCountry}
                onChange={handleCountrySelect}
                required
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country.alpha2Code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </SelectCountry>
              <span>{selectedCountryCode}</span>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={phoneNumber}
                placeholder="Enter phone number"
                onChange={handlePhoneNumberChange}
                required
              />
            </FormContainer>
            <SubmitButton type="submit">Login</SubmitButton>
            <p>
              Already have an account?
              <RegisterLink to="/login"> Login</RegisterLink>
            </p>
          </InnerContainer>
        </BoxContainer>
      </RegisterContainer2>
    </RegisterContainer>
  );
};

export default Register;
