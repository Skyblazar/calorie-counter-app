import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  padding: 1em 1.3em;
  min-width: 140px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  outline: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin-top: 7px;
  background-color: #fff;
  transition: all 0.3s ease 0s;
  border-radius: 100px;

  &:hover {
    background-color: ${(props) => props.theme.color.button};
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    opacity: 0.7;
  }
`;
