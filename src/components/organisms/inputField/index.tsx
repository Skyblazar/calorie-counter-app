import React, { ChangeEvent, ComponentElement, useState } from "react";
import styled from "styled-components";

interface Props {
  type: string;
  placeholder: string;
  name: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: any;
  icon?: JSX.Element;
}
interface BgcolProps {
  bgCol: boolean;
}

const Input = styled.input`
  padding: 0.8em 0.5em;
  width: 320px;
  height: 50px;
  color: #559871;
  font-size: 1.1rem;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  letter-spacing: 0.1em;
  background-color: #eaf1ed;
  border: none;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  &:focus {
    outline: none;
    border: solid #185331 2px;
  }
  &::-webkit-input-placeholder {
    color: #559871;
    opacity: 0.6;
  }
`;
const Inputcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
`;

const Img = styled.div`
  background-color: ${({ bgCol }: BgcolProps) => (bgCol ? "#185331" : "#5fb784")};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 1.2em;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  flex-grow: 1;
`;

export const InputField: React.FC<Props> = ({ type, placeholder, name, handleChange, value, icon }) => {
  const [bgColor, setbgColor] = useState(false);
  const onhandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };
  const focused = () => {
    setbgColor(true);
  };
  const notFocused = () => {
    setbgColor(false);
  };
  return (
    <Inputcontainer>
      <Img bgCol={bgColor}>{icon}</Img>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onhandleChange}
        onFocus={focused}
        onBlur={notFocused}
      />
    </Inputcontainer>
  );
};
