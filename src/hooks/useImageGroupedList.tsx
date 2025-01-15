import { useEffect, useState } from "react";
import { getImagesProcessedByHour } from "@/utils/api/getByHour";
import { CountByHour } from "@/utils/types/CountByHourType";

export const useImageGroupedList = () => {
  const [groupedData, setGroupedData] = useState<CountByHour[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getImagesProcessedByHour();
      setGroupedData(response);
    };
    fetchData();
  }, []);

  return {
    groupedData,
  };
};
