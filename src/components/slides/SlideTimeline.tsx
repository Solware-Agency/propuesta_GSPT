import Card from "../Card";

const SlideTimeline = () => {
  const phases = [
    {
      week: "Semana 1",
      title: "Diseño inicial y estructura",
      activities: "Definición del diseño visual, estructura de páginas y arquitectura del sitio.",
    },
    {
      week: "Semana 2",
      title: "Ajustes, textos e imágenes",
      activities: "Integración de contenido, revisión de textos y ajustes visuales.",
    },
    {
      week: "Semana 3",
      title: "Optimización y publicación",
      activities: "Pruebas finales, optimización de rendimiento y lanzamiento.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Tiempos de entrega
        </h2>

        <p className="text-center text-foreground/70 mb-6 italic">
          Dependemos de la entrega de contenido por parte del cliente para cumplir este cronograma.
        </p>

        <div className="space-y-4">
          {phases.map((phase, index) => (
            <Card key={index} variant="glass" className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="text-primary font-bold text-lg">{phase.week}</span>
                <h3 className="text-foreground text-lg sm:text-xl font-semibold">
                  {phase.title}
                </h3>
              </div>
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed pl-0 sm:pl-20 text-justify">
                {phase.activities}
              </p>
            </Card>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware Agency
        </p>
      </div>
    </div>
  );
};

export default SlideTimeline;
