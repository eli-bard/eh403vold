import { BookMarked, ShoppingCart } from "lucide-react";

export const ebooksPagos = [
  {
    id: 1,
    titulo: "Alimentação Saudável para Crianças",
    descricao:
      "Dicas e receitas para uma alimentação balanceada e nutritiva para crianças de 1 a 10 anos.",
    cor: "yellow",
    badge: "Disponível na Amazon",
    icone: BookMarked,
    botaoTexto: "Comprar na Amazon",
    botaoIcone: ShoppingCart,
    botaoVariant: "outline" as const,
  },
  {
    id: 2,
    titulo: "Desenvolvimento Infantil: 0 a 5 anos",
    descricao:
      "Marcos do desenvolvimento e sinais de alerta para cada fase do crescimento.",
    cor: "red",
    badge: "Disponível na Amazon",
    icone: BookMarked,
    botaoTexto: "Comprar na Amazon",
    botaoIcone: ShoppingCart,
    botaoVariant: "outline" as const,
  },
  {
    id: 3,
    titulo: "Guia Completo de Amamentação",
    descricao:
      "Técnicas, benefícios e soluções para desafios comuns na amamentação.",
    cor: "pink",
    badge: "Disponível na Amazon",
    icone: BookMarked,
    botaoTexto: "Comprar na Amazon",
    botaoIcone: ShoppingCart,
    botaoVariant: "outline" as const,
  },
];
