import axios, { AxiosResponse } from "axios";

export interface IFood {
  _id: string;
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
  added: boolean;
}

interface ResponsePayload {
  statusCode: number;
  data: IFood[];
}

class FoodService {
  async search(query: string) {
    return axios.get<any, AxiosResponse<ResponsePayload>>(`/foods/${query}`);
  }
}

export const foodService = new FoodService();
