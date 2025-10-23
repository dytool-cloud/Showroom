import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Inventory = () => {
  const [brandFilter, setBrandFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<string>("all");

  const brands = ["all", ...Array.from(new Set(cars.map((car) => car.brand)))];
  const years = ["all", ...Array.from(new Set(cars.map((car) => car.year.toString())))];

  const filteredCars = cars.filter((car) => {
    if (brandFilter !== "all" && car.brand !== brandFilter) return false;
    if (yearFilter !== "all" && car.year.toString() !== yearFilter) return false;
    if (priceFilter !== "all") {
      if (priceFilter === "low" && car.price > 800000000) return false;
      if (priceFilter === "mid" && (car.price <= 800000000 || car.price > 1200000000)) return false;
      if (priceFilter === "high" && car.price <= 1200000000) return false;
    }
    return true;
  });

  return (
    <>
      <Helmet>
        <title>Our Cars | Jetz Auto Garage</title>
        <meta
          name="description"
          content="Browse our premium selection of used cars. Quality vehicles fully inspected and ready for you."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Cars</h1>
              <p className="text-muted-foreground text-lg">
                Browse our carefully selected collection of quality vehicles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Select value={brandFilter} onValueChange={setBrandFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand === "all" ? "All Brands" : brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year === "all" ? "All Years" : year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under 800M</SelectItem>
                  <SelectItem value="mid">800M - 1.2B</SelectItem>
                  <SelectItem value="high">Above 1.2B</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No cars found with selected filters.</p>
              </div>
            )}
          </div>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Inventory;
