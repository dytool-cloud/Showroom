import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{car.name}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>{car.year}</span>
          <span>•</span>
          <span>{car.mileage.toLocaleString()} km</span>
          <span>•</span>
          <span>{car.transmission}</span>
        </div>
        <p className="text-2xl font-bold text-primary">{formatPrice(car.price)}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to={`/car/${car.id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
