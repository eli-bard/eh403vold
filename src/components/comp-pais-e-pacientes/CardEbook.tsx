import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface CardEbookProps {
  titulo: string;
  descricao: string;
  cor: string;
  badge: string;
  icone: LucideIcon;
  botaoTexto: string;
  botaoIcone: LucideIcon;
  botaoVariant: "default" | "outline";
}

export function CardEbook({
  titulo,
  descricao,
  cor,
  badge,
  icone: Icone,
  botaoTexto,
  botaoIcone: BotaoIcone,
  botaoVariant,
}: CardEbookProps) {
  const colorClasses = {
    green: {
      bg: "bg-green-100",
      text: "text-green-800",
      border: "border-green-100",
      button: "bg-green-600 hover:bg-green-700",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      border: "border-blue-100",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-800",
      border: "border-purple-100",
      button: "bg-purple-600 hover:bg-purple-700",
    },
    yellow: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      border: "border-yellow-100",
      button: "border-yellow-600 text-yellow-600 hover:bg-yellow-50",
    },
    red: {
      bg: "bg-red-100",
      text: "text-red-800",
      border: "border-red-100",
      button: "border-red-600 text-red-600 hover:bg-red-50",
    },
    pink: {
      bg: "bg-pink-100",
      text: "text-pink-800",
      border: "border-pink-100",
      button: "border-pink-600 text-pink-600 hover:bg-pink-50",
    },
  };

  return (
    <Card
      className={`hover:shadow-lg transition-shadow ${
        colorClasses[cor as keyof typeof colorClasses].border
      }`}
    >
      <CardHeader>
        <div
          className={`${
            colorClasses[cor as keyof typeof colorClasses].bg
          } p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}
        >
          <Icone
            className={`h-6 w-6 ${
              colorClasses[cor as keyof typeof colorClasses].text
            }`}
          />
        </div>
        <CardTitle
          className={colorClasses[cor as keyof typeof colorClasses].text}
        >
          {titulo}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{descricao}</p>
        <Badge
          className={
            badge === "Gratuito"
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-yellow-100 text-yellow-800"
          }
        >
          {badge}
        </Badge>
      </CardContent>
      <CardFooter>
        <Button
          variant={botaoVariant}
          className={`w-full ${
            botaoVariant === "default"
              ? colorClasses[cor as keyof typeof colorClasses].button
              : colorClasses[cor as keyof typeof colorClasses].button
          }`}
        >
          <BotaoIcone className="h-4 w-4 mr-2" />
          {botaoTexto}
        </Button>
      </CardFooter>
    </Card>
  );
}
