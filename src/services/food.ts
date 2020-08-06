import axios, { AxiosResponse } from "axios";

export interface IFood {
  foodCode: number;
  displayName: string;
  portionDefault: number;
  portionAmount: number;
  portionDisplayName: string;
  grains: number;
  wholeGrains: number;
  vegetables: number;
  orangeVegetables: number;
  drkgreenVegetables: number;
  starchyvegetables: number;
  otherVegetables: number;
  fruits: number;
  milk: number;
  meats: number;
  soy: number;
  drybeansPeas: number;
  oils: number;
  solidFats: number;
  addedSugars: number;
  alcohol: number;
  calories: number;
  saturatedFats: number;
}

class FoodService {
  async search(query: string) {
    return axios.get<any, AxiosResponse<IFood[]>>(`/foods/${query}`);
  }
}

export const foodService = new FoodService();
