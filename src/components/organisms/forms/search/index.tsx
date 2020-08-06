import React from "react";
import styled from "styled-components";
import { Input, Button } from "../../../atoms";

const Wrapper = styled.form`
  margin: 2em 0;
  text-align: center;

  ${Input} {
    margin: 0 1em;
  }
`;

export const SearchForm = () => {
  return (
    <Wrapper>
      <Input placeholder="Search Food" />
      <Button type="submit">Search</Button>
    </Wrapper>
  );
};
