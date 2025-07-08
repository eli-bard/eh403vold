import { icons } from "lucide-react";

interface Calculadoras {
  id: string;
  title: string;
  icon: keyof typeof icons;
  iconColor: string;
  bgColor: string;
  description: string;
  category: string;
}

export const calculators: Calculadoras[] = [
  // NEONATOLOGIA
  {
    id: "idadedorn",
    title: "Idade do RN",
    icon: "Baby",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-100",
    description:
      "Calcule a idade em horas/dias e a idade gestacional corrigida do RN",
    category: "Neonatologia",
  },
  {
    id: "capurro",
    title: "Capurro",
    icon: "Baby",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-100",
    description:
      "Calcule a idade gestacional corrigida pelo método de Capurro somático",
    category: "Neonatologia",
  },
  {
    id: "fototerapia",
    title: "Icterícia neonatal",
    icon: "Baby",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-100",
    description: "Veja os níveis de indicação de fototerapia conforme o exame",
    category: "Neonatologia",
  },
  {
    id: "rodwell",
    title: "Rodwell",
    icon: "Baby",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-100",
    description: "Calcule o risco infeccioso do RN",
    category: "Neonatologia",
  },
  {
    id: "apgar",
    title: "APGAR",
    icon: "Baby",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-100",
    description: "Verifique o APGAR do RN",
    category: "Neonatologia",
  },
  {
    id: "ofertasucin",
    title: "Ofertas conforme leite UCIN",
    icon: "Baby",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-100",
    description:
      "Calcule ofertas calórica, proteica, de cálcio e de fósforo conforme o volume e o tipo de leite que o RN está recebendo",
    category: "Neonatologia",
  },
  {
    id: "hvdaneo",
    title: "HV da neonatologia",
    icon: "Baby",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-100",
    description: "Monte sua HV da neonatologia com cálcio, sódio e potássio",
    category: "Neonatologia",
  },
  // PEDIATRIA
  {
    id: "holliday",
    title: "Fórmula de Holliday-Segar",
    icon: "Baby",
    iconColor: "text-green-500",
    bgColor: "bg-green-100",
    description:
      "Calcule o volume que seu paciente pode receber como manutenção em 24h",
    category: "Pediatria",
  },
];
