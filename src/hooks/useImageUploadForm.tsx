"use client";
import { postImage } from "@/utils/api/PostImage";
import { useState } from "react";

export const useImageUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [imageData, setImageData] = useState<any | null>(null);

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

    const response = await postImage(formData);
    setImageData(response);
    setMessage("");
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
  };
};
