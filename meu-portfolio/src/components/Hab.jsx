// 1. Importando os ícones
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Portfolio() {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
    { name: "Sass", icon: FaSass, color: "text-pink-500" },
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-400" },
  ];

  return (
    <div className="h-auto mb-25 bg-gray-100 p-10">
      {/* Título */}
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Minhas Habilidades
      </h2>

      {/* Container da Barra Horizontal */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* 3. O Loop que cria os ícones (Aqui acontece a mágica) */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-28 h-28 cursor-pointer border border-gray-100"
          >
            {/* O Ícone vindo do array */}
            <skill.icon className={`text-5xl mb-2 ${skill.color}`} />

            {/* O Nome */}
            <span className="text-sm font-bold text-gray-600">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
