// src/components/Contato.jsx

export default function Contato({ Email, Linkedin, GitHub, Numero }) {
  return (
    // 1. Adicionado 'w-fit' para o card não esticar 100%
    // 2. Adicionado 'flex' e 'gap-x-6' para alinhar os itens horizontalmente
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 w-fit flex gap-x-6">
      {/* Item 1: Email (Renderiza a tag <a> passada como prop) */}
      <div className="text-xl text-blue-700 font-bold">{Email}</div>

      {/* Item 2: Linkedin */}
      <div className="text-xl text-blue-700 font-bold">{Linkedin}</div>

      {/* Item 3: GitHub */}
      <div className="text-xl text-blue-700 font-bold">{GitHub}</div>

      {/* Item 4: Número de Telefone */}
      <div className="text-xl text-blue-700 font-bold">{Numero}</div>
    </div>
  );
}
