import { ImageResponse } from "@/utils/types/ImageResponseType";
import Image from "next/image";

export const Uploadedimage = ({ imageData }: { imageData: ImageResponse }) => {
  return (
    <div className="mt-8 bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-medium">Imagen Subida Exitosamente</h3>
      <div className="mt-4">
        <p>
          <strong>Nombre:</strong> {imageData.name}
        </p>
        <p>
          <strong>Fecha de Subida:</strong>{" "}
          {new Date(imageData.uploadDate).toLocaleString()}
        </p>
        <p>
          <strong>Imagen:</strong>{" "}
          <a
            href={imageData.url}
            target="_blank"
            className="text-blue-500 underline">
            Ver imagen
          </a>
        </p>
        <Image
          src={imageData.url}
          alt="Imagen Subida"
          className="mx-auto max-h-40 object-contain"
          width={160} 
          height={160} 
        />
      </div>
    </div>
  );
};
