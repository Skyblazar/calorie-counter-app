import styled, { css, keyframes } from "styled-components";
import {Link as LinkR} from "react-router-dom"

interface TProps {
  loading?: boolean;
}

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

const loadingKeyframes = keyframes`
  0% {
    opacity: 1
  }

  50% {
    opacity: 0.3
  }

  100% {
    opacity: 1
  }
`;

const loadingStyle = css`
  animation: ${loadingKeyframes} 1s infinite linear;
`;

export const Button = styled.button<TProps>`
  ${commonStyle};

  min-width: 140px;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin-top: 7px;
  background-color: #fff;

  ${(props) => props.loading && loadingStyle};

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


export const NavLink = styled(LinkR)`
  color: #fff;
  /* justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center; */
  font-weight: bold;
  text-decoration: none;
`