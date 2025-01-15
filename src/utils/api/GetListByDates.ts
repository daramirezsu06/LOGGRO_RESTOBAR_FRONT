import axios from "axios";
import { baseURL } from "../env";
import { ImageResponse } from "../types/ImageResponseType";

export const getImagesList = async (
  startDate: string,
  endDate: string
): Promise<ImageResponse[]> => {
  try {
    const response = await axios.get(
      `${baseURL}/images/search?startDate=${startDate}&endDate=${endDate}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al optener la lsita de imagenes:", error);
    throw error;
  }
};
