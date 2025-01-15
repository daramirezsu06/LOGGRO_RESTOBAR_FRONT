import axios from "axios";
import { baseURL } from "../env";
import { ImageResponse } from "../types/ImageResponseType";

export const postImage = async (formData: FormData): Promise<ImageResponse> => {
  try {
    const response = await axios.post(`${baseURL}/images/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw error;
  }
};
