import React, { useState, FormEvent, ChangeEvent } from "react";

import { SearchForm, FoodList } from "../../organisms";
import { foodService } from "../../../services";
import { IFood } from "../../../interfaces";

export const HomePage = () => {
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
    <div>
      <SearchForm searchFoods={searchFoods} updateFood={updateFood} />
      <FoodList foods={foods} />
    </div>
  );
};
