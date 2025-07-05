import Head from "next/head";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowLeft, Gift, DollarSign } from "lucide-react";
// import { CardEbook } from "@/components/specs/comp-pais-e-pacientes/CardEbook";
// import { ebooksGratuitos } from "@/app/(perfil-medico)/materiais/ebooks-grauitos";
// import { ebooksPagos } from "@/app/(perfil-medico)/materiais/ebooks-pagos";

export default function PaisEPacientes() {
  return (
    <>
      <Head>
        <title>
          Materiais para Pais, Pacientes e Colegas | Dr. Eliabe Roriz
        </title>
        <meta
          name="description"
          content="Materiais educativos e ebooks gratuitos para pais e pacientes sobre saúde infantil e cuidados médicos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src="/eliabe-roriz-profile.jpg"
                alt="Dr. Eliabe Roriz"
              />
              <AvatarFallback>ERS</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-bold">Dr. Eliabe Roriz Silva</p>
              <p className="text-gray-600">MÉDICO: CRM-GO 32249</p>
              <p className="text-xs text-gray-500">
                Clínico Geral | NÃO ESPECIALISTA
              </p>
            </div>
          </div>

          <nav className="flex items-center space-x-1 md:space-x-4">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Voltar ao site
            </Link>
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              EliHelp
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="mb-4 bg-white/80 backdrop-blur-sm"
            >
              <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
              Materiais Educativos
            </Badge>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Orientações para <span className="text-blue-600">Pais</span>,{" "}
              <span className="text-green-600">Pacientes</span> e{" "}
              <span className="text-purple-600">Médicos</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ebooks gratuitos e materiais premium para ajudar no cuidado com a
              saúde infantil e familiar.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Ebooks Gratuitos */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full mb-4">
              <Gift className="h-5 w-5 mr-2" />
              <h2 className="text-2xl font-bold">
                Materiais <span className="text-green-600">Gratuitos</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Baixe agora mesmo sem custo algum
            </p>
          </div>

          {/* Em comentário até desenvolvermos os ebooks */}
          <div className="text-center">Ainda estamos desenvolvendo</div>
          {/*
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooksGratuitos.map((ebook) => (
              <CardEbook
                key={ebook.id}
                titulo={ebook.titulo}
                descricao={ebook.descricao}
                cor={ebook.cor}
                badge={ebook.badge}
                icone={ebook.icone}
                botaoTexto={ebook.botaoTexto}
                botaoIcone={ebook.botaoIcone}
                botaoVariant={ebook.botaoVariant}
              />
            ))}
          </div>
           */}
        </div>
      </section>

      {/* Seção de Ebooks Pagos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full mb-4">
              <DollarSign className="h-5 w-5 mr-2" />
              <h2 className="text-2xl font-bold">
                Materiais <span className="text-yellow-600">Premium</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Ebooks completos disponíveis para compra
            </p>
          </div>
          {/* Em comentário até desenvolvermos os ebooks */}
          <div className="text-center">Ainda estamos desenvolvendo</div>
          {/* 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooksPagos.map((ebook) => (
              <CardEbook
                key={ebook.id}
                titulo={ebook.titulo}
                descricao={ebook.descricao}
                cor={ebook.cor}
                badge={ebook.badge}
                icone={ebook.icone}
                botaoTexto={ebook.botaoTexto}
                botaoIcone={ebook.botaoIcone}
                botaoVariant={ebook.botaoVariant}
              />
            ))}
          </div>
           */}
        </div>
      </section>

      {/* Seção de Aviso */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              <span className="border-b-2 border-red-600 pb-2">
                Aviso Importante
              </span>
            </h3>
            <p className="text-gray-600 mb-4">
              Os materiais disponíveis nesta página têm caráter exclusivamente
              informativo e educativo. Eles não substituem a consulta médica ou
              o acompanhamento profissional.
            </p>
            <p className="text-gray-600">
              Em caso de dúvidas sobre a saúde da criança ou necessidade de
              orientação específica, procure um profissional de saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Dr. Eliabe Roriz Silva
              </h4>
              <p className="text-gray-300">MÉDICO: CRM-GO 32249</p>
              <p className="text-gray-300">Clínico Geral | NÃO ESPECIALISTA</p>
              <p className="text-gray-300">Residente de Pediatria - HEMU/GO</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Página Inicial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/p"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Plataforma EliHelp
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                Conforme Resolução CFM
              </h4>
              <p className="text-sm text-gray-400">
                Este site segue rigorosamente as normas do Conselho Federal de
                Medicina (Resolução CFM nº 2.336/2023) sobre publicidade médica.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Dr. Eliabe Roriz Silva - CRM-GO
              32249. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
