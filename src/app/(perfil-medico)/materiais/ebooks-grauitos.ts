import { BookMarked, Download } from "lucide-react";

export const ebooksGratuitos = [
  {
    id: 1,
    titulo: "Guia de Primeiros Socorros para Pais",
    descricao:
      "Manual prático com orientações sobre como agir em situações de emergência com crianças.",
    cor: "green",
    badge: "Gratuito",
    icone: BookMarked,
    botaoTexto: "Baixar Ebook",
    botaoIcone: Download,
    botaoVariant: "default" as const,
  },
  {
    id: 2,
    titulo: "O Sono do Bebê: Guia Completo",
    descricao:
      "Técnicas e orientações baseadas em evidências para ajudar no sono do seu bebê.",
    cor: "blue",
    badge: "Gratuito",
    icone: BookMarked,
    botaoTexto: "Baixar Ebook",
    botaoIcone: Download,
    botaoVariant: "default" as const,
  },
  {
    id: 3,
    titulo: "Vacinas: Tudo o que você precisa saber",
    descricao:
      "Guia completo sobre o calendário vacinal, importância e mitos sobre vacinação.",
    cor: "purple",
    badge: "Gratuito",
    icone: BookMarked,
    botaoTexto: "Baixar Ebook",
    botaoIcone: Download,
    botaoVariant: "default" as const,
  },
];
