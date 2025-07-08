"use client";

import { useState } from "react";
import { Heading } from "@/components/generalui/Heading";
import CalculatorCard from "@/components/myui/CalculatorCard";
import { calculators } from "@/components/myui/calculators";
import { Calculator, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Calculadoras() {
  const [categoryFilter, setCategoryFilter] = useState<string>("Todas");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = ["Todas", ...new Set(calculators.map((c) => c.category))];

  const filteredCalculators = calculators.filter((calculator) => {
    const matchesCategory =
      categoryFilter === "Todas" || calculator.category === categoryFilter;
    const matchesSearch =
      calculator.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      calculator.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Heading
        title="Calculadoras"
        description="Aprenda e confira seus cálculos com calculadoras eficientes e rápidas"
        icon={Calculator}
        iconColor="text-yellow-500"
        bgColor="bg-violet-500/10"
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          {/* Filtro de busca */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Buscar calculadoras..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filtro de categoria */}
          <div className="flex items-center w-full md:w-auto">
            <Filter className="mr-2 text-gray-500" size={18} />
            <select
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm w-full"
              value={categoryFilter}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredCalculators.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Nenhuma calculadora encontrada com os filtros atuais.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCalculators.map((calculator) => (
              <CalculatorCard key={calculator.id} {...calculator} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
