import Card from "../Card";

const SlideDiagnosis = () => {
  const challenges = [
    {
      title: "Sin Presencia Digital Efectiva",
      description:
        "Actualmente BioSupplies no cuenta con una presencia digital efectiva, representando una pérdida de visibilidad nacional e internacional en el sector de distribución de equipos y materiales para patología y diagnóstico biomédico.",
    },
    {
      title: "Catálogo Sin Difusión Digital",
      description:
        "No existe una plataforma para presentar de forma clara y profesional el catálogo de productos, equipos y materiales descartables que distribuye la empresa.",
    },
    {
      title: "Sin Canal de Contacto Comercial",
      description:
        "No hay un canal digital propio para que instituciones médicas, laboratorios y centros de investigación puedan consultar sobre productos, realizar pedidos o solicitar información comercial.",
    },
    {
      title: "Baja Visibilidad en Búsquedas",
      description:
        "Sin presencia web, se pierde relevancia en buscadores como Google (SEO) y los clientes potenciales no encuentran fácilmente información sobre productos, servicios de distribución o contacto comercial."
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Necesidad Detectada
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <Card key={index} variant="neuo" className="space-y-3">
              <h3 className="text-primary">{challenge.title}</h3>
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed text-justify">
                {challenge.description}
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

export default SlideDiagnosis;
