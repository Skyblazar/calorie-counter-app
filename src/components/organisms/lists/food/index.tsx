import React from "react";
import styled from "styled-components";

import { FoodItem } from "../../";
import { IFood } from "../../../../interfaces";
import { AddedFoodItem } from "../../items";

interface TProps {
  foods: IFood[];
  isAdded?: boolean;
}

const Wrapper = styled.ul`
  max-width: 600px;
  margin: auto;
  list-style: none;
  margin-bottom: 2em;
`;

export const FoodList = ({ foods, isAdded = false }: TProps) => {
  if (!foods || foods.length === 0) return null;

  if (isAdded) {
    return (
      <Wrapper>
        {foods.map((food) => {
          return <AddedFoodItem key={food._id} food={food} />;
        })}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {foods.map((food) => {
        return <FoodItem key={food._id} food={food} />;
      })}
    </Wrapper>
  );
};
