// src/components/ProjectCard.jsx

export default function ProjectCard({
  titulo,
  descricao,
  tecnologia,
  link,
  imagem,
}) {
  return (
    // Um card com fundo branco, bordas arredondadas e sombra
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
      {/* Área da Imagem */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={imagem}
          alt={`Preview do projeto ${titulo}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* O Título */}
      <h3 className="text-xl font-bold text-[#899AD0] mb-2">{titulo}</h3>

      {/* A Descrição */}
      <p className="text-gray-600 mb-4 text-sm">{descricao}</p>

      {/* O Link */}
      <p className="text-blue-700 mb-5 text-sm">{link}</p>

      {/* A etiqueta da tecnologia */}
      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
        {tecnologia}
      </span>
    </div>
  );
}
