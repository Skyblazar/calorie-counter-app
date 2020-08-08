import React from "react";

import { CalorieBox, FoodList } from "../../organisms";
import { useStore } from "../../../store";
import { getPercentages } from "./utils";
import { PageTemplate } from "../../templates";

export const CountPage = () => {
  const { addedFoods, totalCalories } = useStore();

  return (
    <PageTemplate>
      <CalorieBox
        calories={totalCalories}
        percentages={getPercentages(addedFoods)}
      />

      <FoodList heading="Added Foods" foods={addedFoods} isAdded={true} />
    </PageTemplate>
  );
};
