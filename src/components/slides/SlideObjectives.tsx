import Card from "../Card";
import { Target, Package, Mail, Search, Palette, Network } from "lucide-react";

const SlideObjectives = () => {
  const objectives = [
    {
      icon: Target,
      text: "Diseñar una página web profesional y responsive (adaptada a móviles) que proyecte confianza, solidez y trayectoria en el sector.",
    },
    {
      icon: Package,
      text: "Crear sección de catálogo digital para presentar productos, equipos y materiales descartables dirigidos a instituciones médicas y laboratorios.",
    },
    {
      icon: Mail,
      text: "Implementar formulario de contacto comercial para facilitar consultas de instituciones médicas, laboratorios y centros de investigación.",
    },
    {
      icon: Search,
      text: "Optimización SEO básica enfocada en búsquedas B2B del sector salud para mejorar visibilidad en buscadores.",
    },
    {
      icon: Palette,
      text: "Diseño profesional alineado con el Manual de Identidad Corporativa de BioSupplies, comunicando integridad, excelencia y compromiso.",
    },
    {
      icon: Network,
      text: "Plataforma escalable con posibilidad de integración futura de sistema de pedidos online y área de aliados comerciales."
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Nuestra Propuesta</h2>

        <Card variant="glass" className="space-y-6">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
                </div>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed pt-2 text-justify">
                  {objective.text}
                </p>
              </div>
            );
          })}
        </Card>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideObjectives;
