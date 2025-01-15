"use client";
import { useEffect, useState } from "react";
import { getImagesProcessedByHour } from "@/utils/api/getByHour";
import { CountByHour } from "@/utils/types/CountByHourType";

const ImageGroupedList = () => {
  const [groupedData, setGroupedData] = useState<CountByHour[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getImagesProcessedByHour();
      setGroupedData(response);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-md shadow-md mt-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Estadísticas de Imágenes por Hora
      </h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Hora</th>
            <th className="px-4 py-2 text-left">Cantidad de Imágenes</th>
          </tr>
        </thead>
        <tbody>
          {groupedData.map((stat, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{stat._id}</td>
              <td className="px-4 py-2">{stat.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImageGroupedList;
