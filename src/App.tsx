import React, { useState, FormEvent, ChangeEvent } from "react";

import { SearchForm, FoodList } from "./components/organisms";
import { IFood, foodService } from "./services";

export const App = () => {
  const [foods, setFoods] = useState<IFood[]>([]);
  const [food, setFood] = useState("");

  const updateFood = (e: ChangeEvent<HTMLInputElement>) => {
    setFood(e.target.value);
  };

  const searchFoods = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    foodService
      .search(food)
      .then((res) => {
        setFoods(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <h1>App</h1>
      <SearchForm searchFoods={searchFoods} updateFood={updateFood} />
      <FoodList foods={foods} />
    </div>
  );
};
