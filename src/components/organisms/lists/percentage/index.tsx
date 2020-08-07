import React from "react";
import styled from "styled-components";

import { IPercentage } from "../../../../interfaces";
import { PercentageItem } from "../../../molecules";

interface TProps {
  percentages: IPercentage[];
}

const Wrapper = styled.ul`
  list-style: none;
  margin: 2em;
  display: flex;
  flex-wrap: wrap;
`;

export const PercentageList = ({ percentages }: TProps) => {
  if (!percentages || percentages.length === 0) return null;

  return (
    <Wrapper>
      {percentages.map((percentage) => {
        return <PercentageItem percentage={percentage} />;
      })}
    </Wrapper>
  );
};
