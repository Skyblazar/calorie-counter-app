import styled, { css } from "styled-components";

const commonStyle = css`
  padding: 1em 1.3em;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  outline: none;
  transition: all 0.3s ease 0s;
  border-radius: 100px;
  min-width: 100px;

  &:disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`;

export const Button = styled.button`
  ${commonStyle};

  min-width: 140px;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin-top: 7px;
  background-color: #fff;

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

export const FlatButton = styled.button`
  ${commonStyle};

  border: none;
  background-color: #f7f7f7;

  &:hover {
    background-color: #dedede;
  }
`;

export const OutlineButton = styled.button`
  ${commonStyle};

  border: 1px solid #f1f0f0;
  background-color: #fff;

  &:hover {
    background-color: ${(props) => props.theme.color.button};
    color: #fff;
  }
`;
