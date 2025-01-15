import { ImageResponse } from "@/utils/types/ImageResponseType";
import Image from "next/image";

export const ItemImageInfo = ({ image }: { image: ImageResponse }) => {
  return (
    <div key={image._id} className="border-b py-4">
      <Image
        src={image.url}
        alt={image.name}
        width={80}
        height={80}
        className="object-cover rounded-md"
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
  );
};
