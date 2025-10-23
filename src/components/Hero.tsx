import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Jetz Auto Garage
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Premium Cars. Trusted Service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/inventory">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                View Cars
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-lg">Selected Quality Cars</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-lg">Fully Inspected & Guaranteed</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-lg">Safe and Fast Transactions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
