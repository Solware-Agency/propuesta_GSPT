import Card from "../Card";
import { Smartphone, Search, Share2, FileText } from "lucide-react";

const SlideWebsite = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Diseño Responsive",
      desc: "Optimizado para móvil, tablet y escritorio",
    },
    {
      icon: Search,
      title: "SEO Básico",
      desc: "Para aparecer en buscadores",
    },
    {
      icon: Share2,
      title: "Integración",
      desc: "Redes sociales y WhatsApp",
    },
    {
      icon: FileText,
      title: "Textos Base",
      desc: "Incluidos (el cliente puede ajustar)",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Detalles Técnicos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} variant="neuo" className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-foreground/70">{feature.desc}</p>
                </div>
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

export default SlideWebsite;
