import React,{useContext} from "react";
import { useHistory } from "react-router-dom";

import { CalorieBox, FoodList } from "../../organisms";
import { useStore } from "../../../store";
import { getPercentages } from "./utils";
import { PageTemplate } from "../../templates";
import { Context } from "../../../newStore";

export const CountPage = () => {
  const history = useHistory();
  const { addedFoods, totalCalories } = useStore();
  const data = useContext(Context);
  
  
  if (!addedFoods || addedFoods.length === 0) history.replace("/");

  return (
    <PageTemplate>
      <CalorieBox
        calories={Math.round(totalCalories * 100) / 100}
        percentages={getPercentages(addedFoods)}
      />

      <FoodList heading="Added Foods" foods={addedFoods} isAdded={true} />
    </PageTemplate>
  );
};
