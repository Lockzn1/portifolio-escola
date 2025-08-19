import "./globals.css";

export const metadata = {
  title: "BioTech Solutions",
  description: "Startup fictícia focada em soluções para Anemia Falciforme",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#CCD5FF] text-gray-900">
        {/* Navbar */}
        <header className="bg-[#2D728F] text-white shadow-md sticky top-0 z-50">
          <nav className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="font-bold text-xl">BioTech</h1>
            <ul className="flex space-x-6">
              <li><a href="#genetica" className="hover:text-[#FFBFA0]">Genética</a></li>
              <li><a href="#sequenciamento" className="hover:text-[#FFBFA0]">Sequenciamento</a></li>
              <li><a href="#quimica" className="hover:text-[#FFBFA0]">Química</a></li>
              <li><a href="#fisica" className="hover:text-[#FFBFA0]">Física</a></li>
              <li><a href="#matematica" className="hover:text-[#FFBFA0]">Matemática</a></li>
              <li><a href="#conclusao" className="hover:text-[#FFBFA0]">Conclusão</a></li>
            </ul>
          </nav>
        </header>

        {children}

        {/* Rodapé */}
        <footer className="bg-[#77567A] text-white py-6 mt-12 text-center">
          <p>© 2025 BioTech Solutions — Projeto acadêmico fictício</p>
        </footer>
      </body>
    </html>
  );
}
