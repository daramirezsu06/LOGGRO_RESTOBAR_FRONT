import ImageUploadForm from "@/components/forms/ImageUploadForm";
import Link from "next/link";

const Home = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Bienvenido a Restobar</h2>
      <h4 className="text-1xl font-bold text-center">Carga tus imágenes</h4>
      <ImageUploadForm />
      <div className="flex flex-row justify-center gap-4 items-center mt-8">
        <Link href="/SearchBydate" >
          <button className="text-xl font-medium  bg-orange-500 p-2 rounded-md">
            Buscar por Fechas
          </button>
        </Link>
        <Link href="/statistics" >
          <button className="text-xl font-medium  bg-orange-500 p-2 rounded-md">
            Estadísticas
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
