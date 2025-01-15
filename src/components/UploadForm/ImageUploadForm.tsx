"use client";

import { useImageUploadForm } from "@/hooks/useImageUploadForm";
import { Uploadedimage } from "@/components/UploadForm/uploadedimage";

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

      {imageData && <Uploadedimage imageData={imageData} />}
    </form>
  );
};

export default ImageUploadForm;
