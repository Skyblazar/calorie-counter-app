import React from "react";
import styled from "styled-components";

import { PercentageList } from "../lists";
import { IPercentage } from "../../../interfaces";

interface TProps {
  calories: number;
  percentages: IPercentage[];
}

const Wrapper = styled.div`
  padding: 1em 1.3em;
  border-radius: 100px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  width: 80vw;
  max-width: 700px;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin: 1em auto;

  h1 {
    font-size: 7em;
  }

  small {
    color: #969696;
  }
`;

export const CalorieBox = ({ calories, percentages }: TProps) => {
  return (
    <Wrapper>
      <h1>
        {calories} <small>kcal</small>
      </h1>

      <PercentageList percentages={percentages} />
    </Wrapper>
  );
};
