import create from "zustand";
import { IFood } from "./services";

export const [useStore, api] = create((set, get) => {
  return {
    addedFoods: [] as IFood[],
    totalCalories: 0,
    actions: {
      addFood: (food: IFood) => {
        food.added = true;
        const calories: number = get().totalCalories;
        const foods: IFood[] = get().addedFoods;
        set({
          totalCalories: calories + food.calories,
          addedFoods: [...foods, food],
        });
      },
      removeFood: (food: IFood) => {
        food.added = false;
        const calories: number = get().totalCalories;
        const foods: IFood[] = get().addedFoods;
        set({
          totalCalories: calories - food.calories,
          addedFoods: foods.filter((cFood) => cFood._id !== food._id),
        });
      },
    },
  };
});
