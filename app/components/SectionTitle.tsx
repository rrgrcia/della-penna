import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  light?: boolean;
}

export default function SectionTitle({ children, light = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${
        light ? "text-white" : "text-gray-900"
      }`}>
        {children}
      </h2>
      <div className={`w-24 h-1 mx-auto mt-6 rounded-full ${
        light ? "bg-orange-500" : "bg-orange-600"
      }`} />
    </div>
  );
}

