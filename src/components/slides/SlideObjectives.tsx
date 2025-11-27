import Card from "../Card";
import { Home, MapPin, Stethoscope, FlaskConical } from "lucide-react";

const SlideObjectives = () => {
  const sections = [
    {
      icon: Home,
      title: "Página de Inicio",
      items: [
        "Bienvenida clara y profesional",
        "Servicios principales",
        "Enlace directo a WhatsApp o llamada",
        "Sección de testimonios, equipo o beneficios",
        "Diseño visual alineado con identidad médica",
      ],
    },
    {
      icon: MapPin,
      title: "Ubicaciones y Sedes",
      items: [
        "Mapa interactivo",
        "Horarios y contactos por sede",
        "Enlaces directos a Google Maps o WhatsApp",
      ],
    },
    {
      icon: Stethoscope,
      title: "Especialidades Médicas",
      items: [
        "Directorio organizado con detalle de cada especialidad",
        "Posibilidad de ampliar según el crecimiento de la clínica",
      ],
    },
    {
      icon: FlaskConical,
      title: "Exámenes y Procedimientos",
      items: [
        "Lista clara con categorías (laboratorio, imagenología, etc.)",
        "Indicaciones o preparaciones si aplica",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">¿Qué incluye el proyecto?</h2>

        <p className="text-center text-foreground/70 mb-6">
          Una página web profesional enfocada en atraer, informar y facilitar el contacto de pacientes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} variant="neuo" className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-primary font-semibold">{section.title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1 text-xs">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware Agency
        </p>
      </div>
    </div>
  );
};

export default SlideObjectives;
