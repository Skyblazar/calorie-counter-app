import React, { FormEvent, ChangeEvent } from "react";
import styled from "styled-components";

import { OutlineButton } from "../../../atoms";

interface TProps {
  updateQuantity: (e: ChangeEvent<HTMLInputElement>) => void;
  addFood: (e: FormEvent<HTMLFormElement>) => void;
}

const Wrapper = styled.form`
  padding: 0 1em;
  text-align: center;

  input {
    margin: 0 1em;
  }
`;

export const QuantityForm = ({ updateQuantity, addFood }: TProps) => {
  return (
    <Wrapper onSubmit={addFood}>
      <input type="number" placeholder="Quantity" onChange={updateQuantity} />
      <OutlineButton type="submit">Done</OutlineButton>
    </Wrapper>
  );
};
