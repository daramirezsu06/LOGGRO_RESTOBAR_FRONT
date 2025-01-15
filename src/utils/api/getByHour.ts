import axios from "axios";
import { baseURL } from "../env";
import { CountByHour } from "../types/CountByHourType";

export const getImagesProcessedByHour = async (): Promise<CountByHour[]> => {
  try {
    const response = await axios.get(`${baseURL}/images/grouped-by-hour`);
    return response.data;
  } catch (error) {
    console.error("Error al optener los datos", error);
    throw error;
  }
};
