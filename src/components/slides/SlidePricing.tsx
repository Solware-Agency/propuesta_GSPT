import Card from "../Card";
import { Euro, CreditCard } from "lucide-react";

const SlidePricing = () => {

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Inversión</h2>

        <Card variant="glass" className="space-y-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Euro className="w-10 h-10 text-primary" aria-hidden="true" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-primary">750 €</h3>
            <p className="text-foreground/70">Valor total del proyecto</p>
          </div>

          <div className="border-t border-foreground/10 pt-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mt-1">
                <CreditCard className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div className="space-y-3">
                <h3 className="text-primary font-semibold text-lg">Forma de Pago</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-semibold mt-1">40%</span>
                    <span>al iniciar el proyecto: <span className="font-semibold">300 €</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-semibold mt-1">30%</span>
                    <span>período de correcciones: <span className="font-semibold">225 €</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-semibold mt-1">30%</span>
                    <span>al terminar el proyecto: <span className="font-semibold">225 €</span></span>
                  </li>
                </ul>
                <p className="text-sm text-foreground/60 italic mt-4">
                  Método: Transferencia Bolívares a tasa Euros
                </p>
              </div>
            </div>
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

export default SlidePricing;
