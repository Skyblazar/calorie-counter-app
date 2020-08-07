import React from "react";
import styled from "styled-components";

import { Button } from "../../atoms";
import { useStore } from "../../../store";

const Wrapper = styled.nav`
  max-width: 1300px;
  margin: 2em auto;
  padding: 0 1em;
  color: #333533;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navbar = () => {
  const totalCalories = useStore((state) => state.totalCalories);

  return (
    <Wrapper>
      <h1>Calorie Counter</h1>
      {totalCalories > 0 && <Button>Calculate</Button>}
    </Wrapper>
  );
};
