import Card from "../Card";

const SlideDiagnosis = () => {
  const problems = [
    "No tienen una página web profesional",
    "No muestran con claridad sus servicios ni especialidades",
    "No tienen botones de contacto directo o agendamiento",
    "Pierden pacientes por una imagen digital poco confiable",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          ¿Por qué esta propuesta?
        </h2>

        <Card variant="glass" className="space-y-6">
          <p className="text-foreground text-lg">
            <span className="font-semibold text-primary">El 80% de los pacientes buscan en Google</span> antes de agendar una consulta o examen.
          </p>

          <div className="space-y-3">
            <p className="text-foreground font-semibold">Sin embargo, muchos centros médicos aún:</p>
            <ul className="space-y-2 text-foreground/80">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-foreground/70 italic">
            Esto genera demoras en atención, más llamadas repetitivas y una experiencia poco fluida para el paciente.
          </p>

          <div className="bg-primary/10 p-4 rounded-lg">
            <p className="font-semibold text-primary mb-2">Solución:</p>
            <p className="text-foreground/80">
              Una web médica moderna para convertir visitas en citas, reducir llamadas repetitivas y mejorar la confianza del paciente desde el primer clic.
            </p>
          </div>
        </Card>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware Agency
        </p>
      </div>
    </div>
  );
};

export default SlideDiagnosis;
