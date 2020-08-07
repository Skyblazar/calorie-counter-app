import React from "react";
import styled from "styled-components";

import { FoodItem } from "../../";
import { IFood } from "../../../../interfaces";
import { AddedFoodItem } from "../../items";

interface TProps {
  foods: IFood[];
  isAdded?: boolean;
  heading?: string;
}

const Wrapper = styled.ul`
  max-width: 600px;
  margin: auto;
  list-style: none;
  margin-bottom: 2em;

  .list-heading {
    color: #969696;
    text-transform: uppercase;
    margin: 2em 0 0.3em 0;
  }
`;

export const FoodList = ({ foods, heading, isAdded = false }: TProps) => {
  if (!foods || foods.length === 0) return null;

  if (isAdded) {
    return (
      <Wrapper>
        {heading && <h3 className="list-heading">{heading}</h3>}
        {foods.map((food) => {
          return <AddedFoodItem key={food._id} food={food} />;
        })}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {heading && <h3 className="list-heading">{heading}</h3>}
      {foods.map((food) => {
        return <FoodItem key={food._id} food={food} />;
      })}
    </Wrapper>
  );
};
