"use client";
import { useImageList } from "@/hooks/useImageList";
import { ItemImageInfo } from "./ItemImageInfo";

const ImageList = () => {
  const { images, startDate, setStartDate, endDate, setEndDate, fetchImages } =
    useImageList();

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
        Buscar Imagenes
      </button>

      <div className="bg-white p-6 rounded-md shadow-md mt-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Imágenes Subidas
        </h2>
        <div className="space-y-4">
          {images.map((image, index) => <ItemImageInfo image={image} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default ImageList;
