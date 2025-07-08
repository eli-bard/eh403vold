import Link from "next/link";
import { LucideIcon } from "lucide-react";
import * as icons from "lucide-react";

interface CalculatorCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: keyof typeof icons;
  iconColor: string;
  bgColor: string;
}

export default function CalculatorCard({
  id,
  title,
  description,
  category,
  icon,
  iconColor,
  bgColor,
}: CalculatorCardProps) {
  const IconComponent = icons[icon] as LucideIcon;

  return (
    <Link href={`/calculadoras/${id}`}>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
        <div className="flex items-center mb-3">
          <div className={`p-3 rounded-full ${bgColor} mr-3`}>
            <IconComponent className={`w-5 h-5 ${iconColor}`} />
          </div>
          <span className="text-sm font-medium text-blue-600">{category}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </Link>
  );
}
