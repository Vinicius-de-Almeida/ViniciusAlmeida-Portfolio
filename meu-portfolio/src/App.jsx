import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Footer from "./components/Footer.jsx";
import Contato from "./components/Contact.jsx";
import Hab from "./components/Hab.jsx";
import { useInView } from "react-intersection-observer";

// imagens
import imgPort from "./assets/Port.jpg";
import imgLucky from "./assets/Lucky.jpg";
import imgVorti from "./assets/Vorti.jpg";

export default function App() {
  const options = { triggerOnce: true, threshold: 0.1 };
  const { ref: heroRef, inView: heroInView } = useInView(options);
  const { ref: habRef, inView: habInView } = useInView(options);
  const { ref: projetosRef, inView: projetosInView } = useInView(options);
  const { ref: contatoRef, inView: contatoInView } = useInView(options);

  return (
    <div className="bg-linear-to-br from-[#23283C] to-[#1a1f36] min-h-screen flex flex-col w-full">
      <Navbar />

      {/* 2. Conteúdo Principal (Hero + Projetos + Hab) */}
      <div className="pt-24 px-6 max-w-6xl mx-auto grow w-full">
        <div
          id="hero"
          ref={heroRef}
          className={`transition-opacity duration-1000 ${
            heroInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Hero />
        </div>

        <div className="h-px bg-gray-200 my-16"></div>

        <div
          ref={habRef}
          className={`transition-opacity duration-1000 ${
            habInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Hab />
        </div>

        <section
          id="projetos"
          ref={projetosRef}
          className={`m-10 transition-opacity duration-1000 ${
            projetosInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-[#899AD0] mb-8">
            Meus Projetos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
            <ProjectCard
              titulo="Vinicius Almeida Portfolio"
              descricao="Site pessoal apresentando meu perfil e portfólio."
              tecnologia="React + Tailwind"
              imagem={imgPort}
              link={
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Ver Projeto
                </a>
              }
            />
            <ProjectCard
              titulo="Lucky Shrub"
              descricao="Site para uma empresa de Garden Design."
              tecnologia="HTML + CSS/Sass + JavaScript"
              imagem={imgLucky}
              link={
                <a
                  href="https://garden-lucky-shrub.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </a>
              }
            />
            <ProjectCard
              titulo="Virtu Board"
              descricao="Gerenciador de tarefas Kanban para a empresa Virtu"
              tecnologia="React + Tailwind"
              imagem={imgVorti}
              link={
                <a
                  href="https://vorti-board.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </a>
              }
            />
          </div>
        </section>

        {/* 2. SEÇÃO DE CONTATO */}
        <section id="contato">
          <div
            ref={contatoRef}
            className={`pb-20 m-10 flex flex-col items-center transition-opacity duration-1000 ${
              contatoInView ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold text-[#899AD0] mb-8">Contatos</h2>
            <Contato
              Email={
                <a
                  href="mailto:vca.almeida.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email
                </a>
              }
              Linkedin={
                <a
                  href="https://www.linkedin.com/in/vcalmeida/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              }
              GitHub={
                <a
                  href="https://github.com/Vinicius-de-Almeida"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              }
              Numero="(+55) 91 99362-1696"
            />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
