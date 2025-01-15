"use client";

import { useImageUploadForm } from "@/hooks/useImageUploadForm";

const ImageUploadForm = () => {
  const { setFile, name, setName, message, imageData, handleSubmit } =
    useImageUploadForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 border-2 border-dashed border-gray-300 rounded-md text-center space-y-4">
      <h2 className="text-2xl font-semibold">Sube tu imagen</h2>
      <div>
        <label htmlFor="name" className="mr-2 ">
          ingresa tu nombre
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded px-4 py-2"
        />
      </div>
      <div>
        <input
          type="file"
          accept="image/jpeg, image/jpg"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setFile(e.target.files[0]);
            }
          }}
          className="border rounded px-4 py-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded">
        Upload Image
      </button>
      {message && <p className="text-red-500">{message}</p>}

      {imageData && (
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
            <div className="mt-4">
              <img
                src={imageData.url}
                alt="Imagen Subida"
                className="mx-auto max-h-40 object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default ImageUploadForm;
