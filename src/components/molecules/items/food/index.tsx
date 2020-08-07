import React, { useState, FormEvent, ChangeEvent } from "react";
import styled from "styled-components";

import { IFood } from "../../../../services";
import { FlatButton, OutlineButton } from "../../../atoms";
import { QuantityForm } from "../../../organisms";

interface TProps {
  food: IFood;
}

const Wrapper = styled.li`
  cursor: pointer;
  padding: 1em 1.3em;
  border-radius: 30px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin-top: 1.7em;
  background-color: #fff;
  transition: all 0.3s ease 0s;

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-7px);
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  }

  p {
    color: #9a9a9a;
    margin: 0.3em 0;
  }

  div {
    display: flex;
    align-items: center;
  }

  div.info {
    justify-content: space-between;
  }

  div.actions {
    justify-content: flex-end;
    margin-top: 1em;

    ${FlatButton} {
      margin-right: 1em;
    }
  }
`;

export const FoodItem = ({ food }: TProps) => {
  const [adding, setAdding] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const toggleAdding = () => {
    setAdding(!adding);
  };

  const addFood = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    food.quantity = quantity;
    setAdding(false);
  };

  const updateQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(+(e.target.value || 0));
  };

  if (!food) return null;

  return (
    <Wrapper>
      <span>
        <h3>{food.displayName}</h3>
        <div className="info">
          <p>{`${food.portionAmount} ${food.portionDisplayName}`}</p>
          <h5>{food.calories} calories</h5>
        </div>

        {!adding && (
          <div className="actions">
            <FlatButton>More</FlatButton>
            <OutlineButton onClick={toggleAdding}>Add</OutlineButton>
          </div>
        )}

        {adding && (
          <QuantityForm addFood={addFood} updateQuantity={updateQuantity} />
        )}
      </span>
    </Wrapper>
  );
};
