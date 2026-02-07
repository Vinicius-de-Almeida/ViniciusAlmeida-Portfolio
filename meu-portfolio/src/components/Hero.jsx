// src/components/Hero.jsx
import perfil from "../assets/perfil.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 gap-10">
      {/* Lado Esquerdo: Texto */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-6xl md:text-6x1 font-bold text-[#899AD0] leading-tight">
          Vinicius Almeida{" "}
          <span className=" text-4xl text-blue-200">
            {" "}
            Desenvolvedor FullStack
          </span>
        </h1>
        <p className="text-lg text-[#D1D1FF]">
          <strong className="font-bold text-[#899AD0]">
            Desenvolvedor FullStack
          </strong>{" "}
          com domínio de{" "}
          <strong className="font-bold text-[#899AD0]">
            HTML, CSS, Sass, JavaScript, React, Tailwind, Java SpringBoot.
          </strong>
          , integrando lógica de programação a sólidos princípios de design.
          Sempre em constante evolução para criar mais interfaces modernas,
          rápidas e responsivas. Busco unir minha sensibilidade visual à técnica
          para entregar experiências de usuário excepcionais e funcionais.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30">
            <a href="#contato">Entre em contato</a>
          </button>
          <a
            href="#projetos"
            className="border-2 border-gray-300 text-blue-600 px-6 py-3 rounded-lg font-bold hover:border-blue-600 transition-colors shadow-lg hover:shadow-blue-500/30 flex items-center justify-center"
          >
            Ver Projetos
          </a>
        </div>
      </div>

      {/* Lado Direito: Imagem */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={perfil}
          alt="Foto de Perfil"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
        />
      </div>
    </section>
  );
}
