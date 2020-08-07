import React, { FormEvent, ChangeEvent } from "react";
import styled from "styled-components";

import { OutlineButton, OutlineInput } from "../../../atoms";

interface TProps {
  updateQuantity: (e: ChangeEvent<HTMLInputElement>) => void;
  addFood: (e: FormEvent<HTMLFormElement>) => void;
}

const Wrapper = styled.form`
  margin-top: 1em;
  text-align: end;

  input {
    margin: 0 1em;
  }
`;

export const QuantityForm = ({ updateQuantity, addFood }: TProps) => {
  return (
    <Wrapper onSubmit={addFood}>
      <OutlineInput
        type="number"
        placeholder="Quantity"
        onChange={updateQuantity}
      />
      <OutlineButton type="submit">Done</OutlineButton>
    </Wrapper>
  );
};
