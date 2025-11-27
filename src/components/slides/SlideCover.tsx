import Card from "../Card";

const SlideCover = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card variant="glass" className="max-w-3xl w-full text-center space-y-6">

        {/* Title */}
        <h1 className="text-foreground">
          Propuesta de Desarrollo Web
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-primary font-semibold">
          Centro Médico
        </p>

        {/* Metadata */}
        <div className="space-y-2 text-foreground/70">
          <p><span className="font-semibold">Fecha:</span> 27 / 11 / 2025</p>
          <p><span className="font-semibold">Proveedor:</span> Solware Agency</p>
          <p><span className="font-semibold">Cliente:</span> Salud para todos</p>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware Agency
        </p>
      </Card>
    </div>
  );
};

export default SlideCover;
