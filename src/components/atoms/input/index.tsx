import styled from "styled-components";

export const Input = styled.input`
  padding: 1em 1.3em;
  width: 80vw;
  max-width: 500px;
  font-weight: bold;
  /* border: 0.1px solid rgba(0, 0, 0, 0.05); */
  border: none;
  outline: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin-top: 7px;
  background-color: #fff;
  transition: all 0.3s ease 0s;
  border-radius: 100px;

  &:hover,
  &:focus {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-7px);
  }

  ::placeholder {
    color: #ccc;
  }
`;
