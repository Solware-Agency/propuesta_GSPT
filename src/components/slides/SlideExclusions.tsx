import Card from "../Card";
import { XCircle } from "lucide-react";

const SlideExclusions = () => {
  const exclusions = [
    "Agendamiento automático o portal de pacientes",
    "Integraciones con sistemas médicos",
    "Producción de fotos/videos",
    "Posicionamiento avanzado (SEO o campañas pagas)",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          ¿Qué no está incluido por ahora?
        </h2>

        <Card variant="glass" className="space-y-6">
          <ul className="space-y-4">
            {exclusions.map((exclusion, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center mt-1">
                  <XCircle className="w-5 h-5 text-red-500" aria-hidden="true" />
                </div>
                <p className="text-foreground/80 text-base leading-relaxed pt-1">
                  {exclusion}
                </p>
              </li>
            ))}
          </ul>

          <div className="bg-primary/10 p-4 rounded-lg mt-6">
            <p className="text-foreground/80 italic text-center">
              Todos estos módulos pueden agregarse más adelante si el cliente lo requiere.
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

export default SlideExclusions;
