import React from "react";
import styled from "styled-components";

import { IFood } from "../../../../interfaces";

interface TProps {
  food: IFood;
}

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  padding: 1em 0;
  margin-bottom: 1em;

  div.info {
    p {
      color: #969696;
    }
  }
`;

export const AddedFoodItem = ({ food }: TProps) => {
  const amount = food.quantity * food.portionAmount;
  const charEnd = food.portionDisplayName.length - 1;

  return (
    <Wrapper>
      <div className="info">
        <h3>{food.displayName}</h3>
        <p>
          {amount} {food.portionDisplayName}
          {amount > 1 && food.portionDisplayName[charEnd] !== "s" ? "s" : ""}
        </p>
      </div>
      <div className="calories">
        <p>{(food.calories * food.quantity).toFixed(2)} kcal</p>
      </div>
    </Wrapper>
  );
};
