import React, { useState, FormEvent, ChangeEvent } from "react";
import styled from "styled-components";

import { useStore } from "../../../../store";
import { FlatButton, OutlineButton } from "../../../atoms";
import { QuantityForm } from "../..";
import { IFood } from "../../../../interfaces";

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

  button.close {
    min-width: 0;
    padding: 1em;
    background-color: #a70000;
    color: #fff;
    margin-bottom: 0.3em;

    &:hover {
      background-color: #610000;
    }
  }

  p {
    color: #9a9a9a;
    margin: 0.3em 0;
  }

  div,
  header {
    display: flex;
    align-items: center;
  }

  header,
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
  const { addFood, removeFood } = useStore((state) => state.actions);

  const [adding, setAdding] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const toggleAdding = () => {
    setAdding(!adding);
  };

  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addFood(food, quantity);
    setAdding(false);
  };

  const remove = () => {
    removeFood(food);
    setQuantity(0);
  };

  const updateQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +(e.target.value || 0);
    setQuantity(value > 0 ? value : 0);
  };

  if (!food) return null;

  return (
    <Wrapper>
      <span>
        <header>
          <h3>{food.displayName}</h3>
          {food.quantity > 0 && (
            <FlatButton className="close" onClick={remove}>
              Remove
            </FlatButton>
          )}
        </header>

        <div className="info">
          <p>{`${food.portionAmount} ${food.portionDisplayName}`}</p>
          <h5>{food.calories} kcal</h5>
        </div>

        {!adding && (
          <div className="actions">
            <FlatButton>More</FlatButton>
            <OutlineButton onClick={toggleAdding}>
              <span>Add</span>
              {food.quantity > 0 && <span>: {food.quantity}</span>}
            </OutlineButton>
          </div>
        )}

        {adding && (
          <QuantityForm addFood={add} updateQuantity={updateQuantity} />
        )}
      </span>
    </Wrapper>
  );
};
