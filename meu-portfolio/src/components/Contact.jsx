// src/components/Contato.jsx

export default function Contato({ Email, Linkedin, GitHub, Numero }) {
  return (
    <div className="bg-white content-center-safe p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border w-full md:w-fit flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
      {/* Item 1: Email */}

      <div className="text-lg md:text-xl text-blue-700 font-bold">{Email}</div>
      {/* Item 2: Linkedin */}
      <div className="text-lg md:text-xl text-blue-700 font-bold">
        {Linkedin}
      </div>

      {/* Item 3: GitHub */}
      <div className="text-lg md:text-xl text-blue-700 font-bold">{GitHub}</div>

      {/* Item 4: Número de Telefone */}
      <div className="text-lg md:text-xl text-blue-700 font-bold">{Numero}</div>
    </div>
  );
}
