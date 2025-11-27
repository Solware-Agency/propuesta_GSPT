import Card from "../Card";
import { Award, DollarSign, TrendingUp, Settings } from "lucide-react";

const SlideImpact = () => {
  const impacts = [
    {
      icon: Award,
      title: "Credibilidad Profesional",
      description: "Una presencia digital moderna fortalece la confianza de instituciones médicas, laboratorios y centros de investigación en la trayectoria de BioSupplies.",
    },
    {
      icon: DollarSign,
      title: "Mayor Visibilidad B2B",
      description: "Posicionamiento en buscadores (SEO) especializado en el sector salud aumenta el alcance a clientes institucionales a nivel nacional.",
    },
    {
      icon: TrendingUp,
      title: "Acceso Comercial Facilitado",
      description: "Instituciones médicas y laboratorios encuentran fácilmente información sobre productos, catálogo, cobertura y canales de contacto comercial.",
    },
    {
      icon: Settings,
      title: "Base para Crecimiento",
      description: "Plataforma escalable lista para futuras integraciones como sistema de pedidos online, área de aliados y portal de clientes.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Impacto Esperado</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <Card key={index} variant="neuo" className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-primary text-lg sm:text-xl">{impact.title}</h3>
                </div>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed text-justify">
                  {impact.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideImpact;
