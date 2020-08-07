import React from "react";
import styled from "styled-components";

import { IFood } from "../../../../services";
import { FoodItem } from "../../";

interface TProps {
  foods: IFood[];
}

const Wrapper = styled.ul`
  max-width: 600px;
  margin: auto;
  list-style: none;
  margin-bottom: 2em;
`;

export const FoodList = ({ foods }: TProps) => {
  if (!foods || foods.length === 0) return null;

  return (
    <Wrapper>
      {foods.map((food) => {
        return <FoodItem key={food._id} food={food} />;
      })}
    </Wrapper>
  );
};
