import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 bg-white shadow-md z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          Vinicius <span className="text-gray-800">Almeida</span>
        </h1>

        {/* --- MENU DESKTOP --- */}
        <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
          <li className="cursor-pointer hover:text-blue-600">
            <a href="#hero">Sobre</a>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            <a href="#projetos">Projetos</a>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            <a href="#contato">Contato</a>
          </li>
        </ul>

        {/* --- BOTÃO HAMBÚRGUER (MOBILE) --- */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <span className="text-2xl font-bold">✖</span>
          ) : (
            <span className="text-2xl font-bold">☰</span>
          )}
        </button>
      </div>

      {/* --- MENU MOBILE (A GAVETA) --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <ul className="flex flex-col p-4 text-gray-600 font-medium space-y-4 text-center">
            <li className="hover:text-blue-600">
              <a href="#hero" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </a>
            </li>
            <li className="hover:text-blue-600">
              <a href="#projetos" onClick={() => setIsMenuOpen(false)}>
                Projetos
              </a>
            </li>
            <li className="hover:text-blue-600">
              <a href="#contato" onClick={() => setIsMenuOpen(false)}>
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
