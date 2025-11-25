// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Lado Esquerdo: Informações do Footer */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="font-bold text-lg">Vinicius Almeida Portfolio</h4>
          <p className="text-gray-400 text-sm mt-1">
            © 2025 Desenvolvido com React e Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
