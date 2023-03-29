import { useState } from 'react';
import './formInput.css';
import styled from 'styled-components';

const Input = styled.input`
  height: 60px;
  width: 485px;
  border-radius: 100px;
  margin: 10px;
  padding: 30px;
  color: #ffffff;
  box-sizing: border-box;
  background: linear-gradient(108.03deg, rgba(196, 34, 198, 0.1) 5.25%, rgba(204, 63, 207, 0.2127) 20%, rgba(223, 128, 226, 0.4894) 56.23%, rgba(237, 176, 240, 0.7223) 86.73%, #F6CEF9 109.94%, #F9D9FC 123.1%);
`;

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    }
    return (
        <div className="FormInput">
            <Input {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === 'confirmPassword'
                    && setFocused(true)}
                focused={focused.toString} />
            <span>{errorMessage}</span>
        </div>
    )
}
export default FormInput