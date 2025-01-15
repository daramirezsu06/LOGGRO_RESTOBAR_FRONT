"use client";
import { useState } from "react";
import { getImagesList } from "@/utils/api/GetListByDates";
import { ImageResponse } from "@/utils/types/ImageResponseType";

const ImageList = () => {
  const [images, setImages] = useState<ImageResponse[]>([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchImages = async () => {
    const response = await getImagesList(startDate, endDate);
    setImages(response);
  };

  return (
    <div>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border rounded px-4 py-2"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border rounded px-4 py-2"
      />
      <button
        onClick={fetchImages}
        className="bg-green-500 text-white px-4 py-2 rounded">
        Fetch Images
      </button>

      <div className="bg-white p-6 rounded-md shadow-md mt-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Imágenes Subidas
        </h2>
        <div className="space-y-4">
          {images.map((image) => (
            <div key={image._id} className="border-b py-4">
              <div className="flex items-center space-x-4">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <p className="text-lg font-medium">{image.name}</p>
                  <p className="text-gray-500">
                    {new Date(image.uploadDate).toLocaleString()}
                  </p>
                  <a
                    href={image.url}
                    target="_blank"
                    className="text-blue-500 hover:underline">
                    Ver Imagen
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

   
    </div>
  );
};

export default ImageList;
