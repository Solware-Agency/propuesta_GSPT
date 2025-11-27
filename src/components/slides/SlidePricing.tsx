import Card from "../Card";
import { DollarSign, Calendar, Server, Wrench } from "lucide-react";

const SlidePricing = () => {
  const items = [
    {
      icon: DollarSign,
      title: "Costo Total del Proyecto",
      value: "$800 USD",
    },
    {
      icon: Calendar,
      title: "Forma de Pago (3 cuotas)",
      value:
        "40% para iniciar el desarrollo ($320 USD); 40% veintiún días después del primer pago ($320 USD); 20% veintiún días después del segundo pago ($160 USD).",
    },
    {
      icon: Server,
      title: "Tecnología",
      value: "Página web desarrollada con React + TypeScript, optimizada para rendimiento y SEO. Hosting y dominio no incluidos (pueden contratarse por separado).",
    },
    {
      icon: Wrench,
      title: "Forma de Pago",
      value: "Costo total del proyecto en Dólares Americanos.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Inversión y Condiciones de Pago
        </h2>

        <div className="space-y-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} variant="neuo" className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-primary text-lg sm:text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed pl-0 sm:pl-16 text-justify">
                  {item.value}
                </p>
              </Card>
            );
          })}
        </div>

        <Card variant="glass" className="mt-8">
          <p className="text-center text-foreground/70 text-sm italic text-justify">
            Esta solución le dará a BioSupplies la visibilidad y profesionalismo que necesita en su presencia digital, abriendo la puerta a futuras integraciones como entrega de resultados clínicos y automatización de citas.
          </p>
        </Card>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlidePricing;
