import Card from "../Card";
import { Shield, Wrench, Image, CheckCircle2 } from "lucide-react";

const SlideWarranty = () => {
  const clientNeeds = [
    "Logo y paleta de colores",
    "Información médica: especialidades, exámenes, contacto",
    "Validación de textos y estructura",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Garantía y Requerimientos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="neuo" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-primary font-semibold text-lg">Garantía</h3>
            </div>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Cambios menores incluidos</span>
              </li>
              <li className="flex items-start gap-2">
                <Wrench className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Nuevas secciones o funciones se cotizan aparte</span>
              </li>
            </ul>
          </Card>

          <Card variant="neuo" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Image className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-primary font-semibold text-lg">
                ¿Qué necesita aportar el cliente?
              </h3>
            </div>
            <ul className="space-y-2 text-foreground/80">
              {clientNeeds.map((need, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{need}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware Agency
        </p>
      </div>
    </div>
  );
};

export default SlideWarranty;
