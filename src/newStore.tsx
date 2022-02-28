import { useState, createContext, useEffect } from "react";
import * as React from "react";
import { IFood } from "./interfaces";

interface AppState {
  addedFoods: IFood[];
  totalCalories: number;
  addFood: (food: IFood, quantity: number) => void;
  removeFood: (food: IFood) => void;
  isLoggedin: boolean;
  width: number;
}

const iState = {
  addedFoods: [],
  totalCalories: 0,
  addFood: () => {},
  removeFood: () => {},
  isLoggedin: false,
  width: 0,
};

export const Context = createContext<AppState>(iState);

export const AppProvider: React.FC = ({ children }) => {
  const [totalCalories, settotalCalories] = useState(0);
  const [isLoggedin, settotalisLoggedin] = useState(false);
  const [addedFoods, setaddedFoods] = useState<IFood[]>([]);
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setwidth(window.innerWidth));
    return window.removeEventListener("resize", () => setwidth(window.innerWidth));
  }, []);

  const addFood = (food: IFood, quantity: number) => {
    food.added = true;
    food.quantity = quantity;
    const calories: number = totalCalories;
    const foods: IFood[] = addedFoods;
    settotalCalories(calories + food.calories * food.quantity);
    setaddedFoods([...foods, food]);
  };

  const removeFood = (food: IFood) => {
    food.added = false;
    const calories: number = totalCalories;
    const foods: IFood[] = addedFoods;
    settotalCalories(calories - food.calories * food.quantity);
    setaddedFoods(foods.filter((cFood) => cFood._id !== food._id));
    food.quantity = 0;
  };

  const store = {
    addFood,
    totalCalories,
    addedFoods,
    removeFood,
    isLoggedin,
    settotalisLoggedin,
    width,
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
