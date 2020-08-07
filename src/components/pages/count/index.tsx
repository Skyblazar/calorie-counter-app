import React from "react";

import { CalorieBox, FoodList } from "../../organisms";
import { useStore } from "../../../store";
import { getPercentages } from "./utils";

export const CountPage = () => {
  const { addedFoods, totalCalories } = useStore();

  return (
    <div>
      <CalorieBox
        calories={totalCalories}
        percentages={getPercentages(addedFoods)}
      />
      <FoodList foods={addedFoods} isAdded={true} />
    </div>
  );
};
