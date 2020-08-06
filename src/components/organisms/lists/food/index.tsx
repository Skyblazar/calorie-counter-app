import React from "react";
import styled from "styled-components";

import { IFood } from "../../../../services";

interface TProps {
  foods: IFood[];
}

const Wrapper = styled.ul`
  max-width: 600px;
  margin: auto;
  list-style: none;
`;

export const FoodList = ({ foods }: TProps) => {
  if (!foods || foods.length === 0) return null;

  return (
    <Wrapper>
      {foods.map((food) => {
        return <li key={food._id}>{food.displayName}</li>;
      })}
    </Wrapper>
  );
};
