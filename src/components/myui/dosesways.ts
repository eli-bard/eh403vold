interface JeitosdeDoses {
  id: string;
  title: string;
  description: string;
  category: string;
}

export const dosesways: JeitosdeDoses[] = [
  {
    id: "calcdoses",
    title: "Aprenda a calcular doses de medicamentos",
    description:
      "Aprenda a calcular a dose das medicações através da fórmula da Pri que resume as regras de 3.",
    category: "Online",
  },
  {
    id: "consultameds",
    title: "Consultar doses",
    description:
      "Consulte a dose das principais medicações, além de orientações sobre o uso em pediatria",
    category: "Online",
  },
];
