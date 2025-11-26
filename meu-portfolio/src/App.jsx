import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import Contato from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col w-full">
      <Navbar />

      {/* 2. Conteúdo Principal (Hero + Projetos) */}
      <div className="pt-24 px-6 max-w-6xl mx-auto grow w-full">
        <Hero />

        <div className="h-px bg-gray-200 my-16"></div>

        <section id="projetos">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Meus Projetos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
            <ProjectCard
              titulo="Vinicius Almeida Portfolio"
              descricao="Site pessoal apresentando meu perfil e portfólio."
              tecnologia="React + Tailwind"
              link={
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Ver Projeto
                </a>
              }
            />
            <ProjectCard
              titulo="Site Corporativo Lucky Shrub"
              descricao="Páginas para uma empresa de Garden Retail."
              tecnologia="HTML + CSS/Sass + JavaScript"
              link=<a
                href="https://garden-lucky-shrub.vercel.app/home.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Projeto
              </a>
            />
            <ProjectCard
              titulo="Alex Styles Portfolio"
              descricao="Site pessoal para Alex Styles."
              tecnologia="React + Tailwind"
              link={
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Ver Projeto
                </a>
              }
            />
          </div>
        </section>

        {/* 2. SEÇÃO DE CONTATO */}
        <section id="contato" className="pb-20 mx-auto grow w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contatos</h2>

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
        </section>
      </div>

      {/* Footer fica fora da área de largura máxima para esticar 100% */}
      <Footer />
    </div>
  );
}
