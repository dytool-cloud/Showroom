import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Hero from "@/components/Hero";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

const Index = () => {
  const featuredCars = cars.filter((car) => car.featured);

  return (
    <>
      <Helmet>
        <title>Jetz Auto Garage | Premium & Trusted Car Showroom</title>
        <meta
          name="description"
          content="Jetz Auto Garage - Premium used cars in Surabaya. Selected quality cars, fully inspected and guaranteed with safe and fast transactions."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <Hero />

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Cars</h2>
              <p className="text-muted-foreground text-lg">
                Discover our hand-picked selection of premium vehicles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Index;
