import React, { useState, FormEvent, ChangeEvent } from "react";

import { SearchForm, FoodList } from "../../organisms";
import { foodService } from "../../../services";
import { IFood } from "../../../interfaces";
import { PageTemplate } from "../../templates";

export const HomePage = () => {
  const [foods, setFoods] = useState<IFood[] | null>(null);
  const [food, setFood] = useState("");
  const [loading, setLoading] = useState(false);

  const updateFood = (e: ChangeEvent<HTMLInputElement>) => {
    setFood(e.target.value);
  };

  const searchFoods = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    foodService
      .search(food)
      .then((res) => {
        setFoods(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <PageTemplate showActions={true}>
      <SearchForm
        searchFoods={searchFoods}
        updateFood={updateFood}
        loading={loading}
      />
      <FoodList foods={foods} />
    </PageTemplate>
  );
};
