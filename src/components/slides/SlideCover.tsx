import Card from "../Card";

const SlideCover = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card variant="glass" className="max-w-3xl w-full text-center space-y-6">

        {/* Title */}
        <h1 className="text-foreground">
          Web para BIOSUPPLIES
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-primary font-semibold">
          Propuesta presentada por Solware
        </p>

        {/* Description */}
        <p className="text-foreground/80 max-w-2xl mx-auto leading-relaxed text-justify">
          Empresa venezolana de distribución de productos, equipos y materiales para patología
          y diagnóstico biomédico. Una propuesta para establecer una presencia digital profesional
          que fortalezca la confianza, mejore la visibilidad y facilite el contacto comercial.
        </p>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </Card>
    </div>
  );
};

export default SlideCover;
