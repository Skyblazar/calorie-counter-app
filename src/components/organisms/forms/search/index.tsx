import React, { FormEvent, ChangeEvent } from "react";
import styled from "styled-components";

import { Input, Button } from "../../../atoms";

interface TProps {
  updateFood: (e: ChangeEvent<HTMLInputElement>) => void;
  searchFoods: (e: FormEvent<HTMLFormElement>) => void;
}

const Wrapper = styled.form`
  margin: 2em 0;
  text-align: center;

  ${Input} {
    margin: 0 1em;
  }
`;

export const SearchForm = ({ updateFood, searchFoods }: TProps) => {
  return (
    <Wrapper onSubmit={searchFoods}>
      <Input placeholder="Search Food" onChange={updateFood} />
      <Button type="submit">Search</Button>
    </Wrapper>
  );
};
