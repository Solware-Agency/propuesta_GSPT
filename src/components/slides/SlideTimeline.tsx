import Card from "../Card";

const SlideTimeline = () => {
  const phases = [
    {
      week: "Día 1-2",
      title: "Kickoff y Levantamiento de Contenido",
      activities:
        "Reunión inicial, recopilación de requisitos, definición de servicios y especialidades a destacar.",
    },
    {
      week: "Día 3-6",
      title: "Diseño del Layout Visual",
      activities:
        "Diseño de la estructura visual, paleta de colores, tipografías y validación con el cliente.",
    },
    {
      week: "Día 7-12",
      title: "Desarrollo y Pruebas",
      activities:
        "Construcción de las páginas, integración de formularios, optimización SEO y pruebas de funcionamiento.",
    },
    {
      week: "Día 13-14",
      title: "Revisión Final y Publicación",
      activities: "Ajustes finales según feedback del cliente, optimización final y publicación del sitio web.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Timeline de Desarrollo (2 semanas hábiles)
        </h2>

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
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideTimeline;
