import React from "react";
import styled from "styled-components";

import { IPercentage } from "../../../../interfaces";

interface TProps {
  percentages: IPercentage[];
}

const Wrapper = styled.ul`
  max-width: 600px;
  margin: auto;
  list-style: none;
  margin-bottom: 2em;
`;

export const PercentageList = ({ percentages }: TProps) => {
  if (!percentages || percentages.length === 0) return null;

  return (
    <Wrapper>
      {percentages.map((percentage) => {
        return (
          <li>
            <span>{percentage.name}: </span> <span>{percentage.value} %</span>
          </li>
        );
      })}
    </Wrapper>
  );
};
