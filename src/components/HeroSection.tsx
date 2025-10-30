import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm md:text-base text-muted-foreground font-medium">
              Llaves Bancolombia
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              11 millones de colombianos ya tienen sus llaves
            </h1>
            
            <p className="text-base md:text-lg text-foreground">
              Regístralas en Bre-B y pasa plata al instante. Hazlo en la app Mi Bancolombia.
            </p>
            
            <div className="pt-4">
              <Button variant="cta">
                Registrarse
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={heroImage}
              alt="Pareja colombiana usando banca móvil"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
