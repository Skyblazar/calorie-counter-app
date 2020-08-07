import create from "zustand";
import { IFood } from "./interfaces";

interface AppState {
  addedFoods: IFood[];
  totalCalories: number;
  actions: {
    addFood: (food: IFood, quantity: number) => void;
    removeFood: (food: IFood) => void;
  };
}

export const [useStore, api] = create<AppState>((set, get) => {
  return {
    addedFoods: [] as IFood[],
    totalCalories: 0,
    actions: {
      addFood: (food, quantity) => {
        food.added = true;
        food.quantity = quantity;
        const calories: number = get().totalCalories;
        const foods: IFood[] = get().addedFoods;
        set({
          totalCalories: calories + food.calories,
          addedFoods: [...foods, food],
        });
      },
      removeFood: (food) => {
        food.added = false;
        food.quantity = 0;
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
