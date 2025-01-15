"use client";
import { useState } from "react";
import { getImagesList } from "@/utils/api/GetListByDates";
import { ImageResponse } from "@/utils/types/ImageResponseType";

export const useImageList = () => {
  const [images, setImages] = useState<ImageResponse[]>([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchImages = async () => {
    const response = await getImagesList(startDate, endDate);
    setImages(response);
  };
  return {
    images,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    fetchImages,
  };
};
