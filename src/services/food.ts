import axios, { AxiosResponse } from "axios";
import { IFood } from "../interfaces";

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
