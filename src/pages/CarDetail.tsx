import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { cars } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Car not found</p>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppContact = () => {
    const message = `Hi, I'm interested in the ${car.name} (${car.year}). Can you provide more information?`;
    const whatsappNumber = "6289639048578";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>{car.name} | Jetz Auto Garage</title>
        <meta
          name="description"
          content={`${car.year} ${car.name} - ${car.transmission}, ${car.mileage.toLocaleString()} km. Available at Jetz Auto Garage.`}
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img
                    src={car.images[selectedImage]}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {car.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-video overflow-hidden rounded-lg border-2 transition-colors ${
                        selectedImage === index ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${car.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <Badge className="mb-4">{car.brand}</Badge>
                  <h1 className="text-4xl font-bold mb-2">{car.name}</h1>
                  <p className="text-3xl font-bold text-primary">{formatPrice(car.price)}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-muted/30 rounded-lg">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Year</p>
                    <p className="font-semibold">{car.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Model</p>
                    <p className="font-semibold">{car.model}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Mileage</p>
                    <p className="font-semibold">{car.mileage.toLocaleString()} km</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Transmission</p>
                    <p className="font-semibold">{car.transmission}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Color</p>
                    <p className="font-semibold">{car.color}</p>
                  </div>
                </div>

                <Button size="lg" onClick={handleWhatsAppContact} className="w-full">
                  Contact to Buy
                </Button>

                <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold mb-4">Why Choose This Car?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Fully inspected and certified</li>
                    <li>✓ Complete service history available</li>
                    <li>✓ Warranty options available</li>
                    <li>✓ Test drive available</li>
                    <li>✓ Trade-in accepted</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default CarDetail;
