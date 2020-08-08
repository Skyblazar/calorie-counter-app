import React, { FormEvent, ChangeEvent } from "react";
import styled from "styled-components";

import { Input, Button } from "../../../atoms";

interface TProps {
  updateFood: (e: ChangeEvent<HTMLInputElement>) => void;
  searchFoods: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

const Wrapper = styled.form`
  margin: 2em 0;
  text-align: center;

  ${Input} {
    margin: 0 1em 1em 1em;
  }
`;

export const SearchForm = ({ updateFood, searchFoods, loading }: TProps) => {
  return (
    <Wrapper onSubmit={searchFoods}>
      <Input placeholder="Search Food" onChange={updateFood} />
      <Button type="submit" loading={loading} disabled={loading}>
        Search
      </Button>
    </Wrapper>
  );
};
