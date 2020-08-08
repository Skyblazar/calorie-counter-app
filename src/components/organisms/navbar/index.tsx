import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../../atoms";
import { useStore } from "../../../store";

interface TProps {
  showActions?: boolean;
}

const Wrapper = styled.nav`
  max-width: 1300px;
  margin: 0 auto 2em auto;
  padding: 2em;
  color: #333533;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navbar = ({ showActions = false }: TProps) => {
  const history = useHistory();
  const totalCalories = useStore((state) => state.totalCalories);

  const navigateToCount = () => {
    history.push("/count");
  };

  return (
    <Wrapper>
      <h1>Calorie Counter</h1>
      {totalCalories > 0 && showActions && (
        <Button onClick={navigateToCount}>Calculate</Button>
      )}
    </Wrapper>
  );
};
