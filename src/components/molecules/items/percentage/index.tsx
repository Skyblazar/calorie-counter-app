import React from "react";
import styled from "styled-components";
import { IPercentage } from "../../../../interfaces";

interface TProps {
  percentage: IPercentage;
}

const Wrapper = styled.li`
  p {
    color: #333;
    margin: 0.3em;
  }

  span.name {
    color: #969696;
  }

  span.value {
    font-weight: bold;
  }
`;

export const PercentageItem = ({ percentage }: TProps) => {
  return (
    <Wrapper>
      <p>
        <span className="name">{percentage.name}: </span>{" "}
        <span className="value">
          {Math.round(percentage.value * 100) / 100}%
        </span>
      </p>
    </Wrapper>
  );
};
