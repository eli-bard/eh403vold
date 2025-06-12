import { Heading } from "@/components/Heading";
import { Biohazard } from "lucide-react";

export default function Calculadoras() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Heading
        title="Doses"
        description="Confira as doses das principais medicações com sua IA favorita (acesso pelo WhatsApp)"
        icon={Biohazard}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <h3>Ainda estamos em construção</h3>
        </div>
      </main>
    </div>
  );
}
