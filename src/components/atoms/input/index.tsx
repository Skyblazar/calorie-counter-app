import styled, { css } from "styled-components";

const commonStyle = css`
  padding: 1em 1.3em;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 100px;
  transition: all 0.3s ease 0s;

  ::placeholder {
    color: #ccc;
  }
`;

export const Input = styled.input`
  ${commonStyle};

  width: 80vw;
  max-width: 500px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin-top: 7px;
  background-color: #fff;

  &:hover,
  &:focus {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-7px);
  }
`;

export const OutlineInput = styled.input`
  ${commonStyle};

  border: 0.1px solid rgba(0, 0, 0, 0.1);
`;
