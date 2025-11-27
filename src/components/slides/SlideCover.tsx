import Card from "../Card";

const SlideCover = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card variant="glass" className="max-w-3xl w-full text-center space-y-6">

        {/* Title */}
        <h1 className="text-foreground">
          Propuesta de Desarrollo Web
        </h1>

        {/* Client Name */}
        <p className="text-xl sm:text-2xl text-primary font-semibold">
          Grupo Salud Para Todos
        </p>
      </Card>
    </div>
  );
};

export default SlideCover;
