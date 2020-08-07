import React from "react";
import styled from "styled-components";

import { CalorieBox, FoodList } from "../../organisms";
import { useStore } from "../../../store";
import { getPercentages } from "./utils";

const Wrapper = styled.div``;

export const CountPage = () => {
  const { addedFoods, totalCalories } = useStore();

  return (
    <Wrapper>
      <CalorieBox
        calories={totalCalories}
        percentages={getPercentages(addedFoods)}
      />

      <FoodList heading="Added Foods" foods={addedFoods} isAdded={true} />
    </Wrapper>
  );
};
