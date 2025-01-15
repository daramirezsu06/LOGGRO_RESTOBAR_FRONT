"use client";
import { postImage } from "@/utils/api/PostImage";
import { CustomAxiosError } from "@/utils/types/CustomAxiosErrorType";
import { ImageResponse } from "@/utils/types/ImageResponseType";
import { AxiosError } from "axios";
import { useState } from "react";

export const useImageUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [imageData, setImageData] = useState<ImageResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !name) {
      setMessage("Debes llenar el nombre y la imagen");
      return;
    }
    if (file && file.type !== "image/jpeg" && file.type !== "image/jpg") {
      setMessage("Por favor, selecciona una imagen JPG o JPEG.");
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    setIsLoading(true);

    try {
      const response = await postImage(formData);
      setImageData(response);
      setMessage("");
    } catch (error) {
      if (error instanceof AxiosError) {
        const customError = error as CustomAxiosError;

        if (customError.response) {
          const errorMessage =
            customError.response.data.message || "Error desconocido";
          setMessage(`Hubo un error al cargar la imagen: ${errorMessage}`);
        } else if (customError.request) {
          setMessage("Hubo un problema con la conexión. Intenta de nuevo.");
        }
      } else {
        setMessage(
          `Hubo un error al cargar la imagen: ${
            error instanceof Error ? error.message : "Error desconocido"
          }`
        );
      }
    } finally {
      setIsLoading(false);
    }
  };
  return {
    file,
    setFile,
    name,
    setName,
    message,
    setMessage,
    imageData,
    handleSubmit,
    isLoading,
  };
};
