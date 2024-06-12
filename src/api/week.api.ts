import { IWeek } from "../models/week.model";
import { customAxios } from "./customAxios";

export const getWeekList = async () => {
  const response = await customAxios.get<IWeek>("/posts/weeks");

  return response.data;
};
