import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PlataformaLandingPage = () => {
  return (
    <>
      <Head>
        <title>
          EliHelp | Plataforma para auxiliar médicos e estudantes de medicina
        </title>
        <meta
          name="description"
          content="Médico clínico geral especializando-se em pediatria, autor de ebooks sobre saúde infantil. Recursos para profissionais e pais."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="@/favicon.ico" type="image/x-icon"></link>
      </Head>

      {/* Cabeçalho */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="logo">
              <Image
                src="/imgs/elihelp-logo1.png"
                alt="Dr. Eliabe Roriz Logo"
                width={60}
                height={40}
              />
            </div>
            <div className="text-sm text-gray-600">
              <p className="font-medium">EliHelp</p>
              <p>A ajuda que os médicos e estudantes de medicina precisam</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <nav className="flex space-x-2 md:space-x-4">
              <Link
                href="#plataforma"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Acesse a Plataforma
              </Link>
              <Link
                href="/materiais"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600"
              >
                Materiais Educativos
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Medicina com <span className="text-blue-600">Ciência</span> e{" "}
              <span className="text-green-600">Cuidado</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Recursos para profissionais de saúde e materiais educativos sobre
              saúde infantil e medicina do estilo de vida
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/eh/dashboard-r">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  Acessar Plataforma
                </Button>
              </Link>
              <Link href="/materiais">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                  Ver Materiais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Plataforma */}
      <section id="plataforma" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              <span className="border-b-4 border-blue-600 pb-2">
                Nossa Plataforma
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                  Para Profissionais de Saúde
                </h3>
                <p className="text-gray-700 mb-6">
                  Ferramentas e protocolos atualizados para auxiliar na prática
                  clínica.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Fluxogramas diagnósticos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Dosagens e posologias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Protocolos de atendimento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Artigos comentados</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                  Benefícios Exclusivos
                </h3>
                <p className="text-gray-700 mb-6">
                  Recursos para atualização e melhoria da prática clínica
                  diária.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Guias de conduta atualizados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Ferramentas de acompanhamento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Atualizações constantes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Suporte especializado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href="/eh/dashboard-r">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  Acessar Plataforma
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Materiais Educativos */}
      <section id="materiais" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              <span className="border-b-4 border-purple-600 pb-2">
                Materiais Educativos
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-purple-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                  Guia Prático de Pediatria
                </h3>
                <p className="text-gray-700 mb-4">
                  Um manual completo para os primeiros anos de vida, abordando
                  desde os cuidados com recém-nascidos até as principais doenças
                  infantis.
                </p>
                <Link href="/materiais">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Ver Todos os Materiais
                  </Button>
                </Link>
              </div>

              <div className="bg-purple-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                  Saúde Infantil: Perguntas e Respostas
                </h3>
                <p className="text-gray-700 mb-4">
                  As dúvidas mais comuns respondidas com base em evidências
                  científicas e experiência clínica.
                </p>
                <Link href="/materiais">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Explorar Conteúdo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Link href="/materiais">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                  Ver Todos os Materiais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre o criador</h3>
              <p className="text-gray-300">Dr. Eliabe R. S.</p>
              <p className="text-gray-300">Médico Clínico Geral</p>
              <p className="text-gray-300">Residente de Pediatria</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#plataforma"
                    className="text-gray-300 hover:text-white"
                  >
                    Plataforma
                  </Link>
                </li>
                <li>
                  <Link
                    href="/materiais"
                    className="text-gray-300 hover:text-white"
                  >
                    Materiais
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-gray-300">Email: elihelp.contato@gmail.com</p>
              <p className="text-gray-300">Redes Sociais: midia-aqui</p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} EliHelp. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PlataformaLandingPage;
