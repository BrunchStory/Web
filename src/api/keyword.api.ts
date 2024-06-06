import { IKeyword } from "../models/keyword.model";
import { customAxios } from "./customAxios";

export const fetchKeyword = async () => {
  const response = await customAxios.get<IKeyword[]>("/posts/keywords");
  return response.data;
};
