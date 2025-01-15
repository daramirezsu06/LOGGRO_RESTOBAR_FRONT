import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-orange-500 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" >
          <h1 className="text-xl font-bold">Restobar Carga tus imágenes</h1>
        </Link>

        <nav className="space-x-4">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
          <Link href="/SearchBydate" className="hover:underline">
            Por Fechas
          </Link>
          <Link href="/statistics" className="hover:underline">
            Estadisticas
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
