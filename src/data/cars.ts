export interface Car {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: "Automatic" | "Manual";
  color: string;
  image: string;
  images: string[];
  featured: boolean;
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Mercedes-Benz E-Class",
    brand: "Mercedes-Benz",
    model: "E 250",
    year: 2020,
    price: 850000000,
    mileage: 35000,
    transmission: "Automatic",
    color: "Black",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2070"
    ],
    featured: true,
  },
  {
    id: 2,
    name: "BMW 5 Series",
    brand: "BMW",
    model: "530i M Sport",
    year: 2021,
    price: 920000000,
    mileage: 28000,
    transmission: "Automatic",
    color: "White",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070",
      "https://images.unsplash.com/photo-1617886322207-08799d28dbfe?q=80&w=2069",
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Audi A6",
    brand: "Audi",
    model: "A6 45 TFSI",
    year: 2019,
    price: 780000000,
    mileage: 42000,
    transmission: "Automatic",
    color: "Gray",
    image: "https://images.unsplash.com/photo-1610768764270-790fbec18178?q=80&w=2071",
    images: [
      "https://images.unsplash.com/photo-1610768764270-790fbec18178?q=80&w=2071",
    ],
    featured: true,
  },
  {
    id: 4,
    name: "Lexus ES",
    brand: "Lexus",
    model: "ES 300h",
    year: 2021,
    price: 890000000,
    mileage: 25000,
    transmission: "Automatic",
    color: "Silver",
    image: "https://images.unsplash.com/photo-1623869675781-80aa31be4d4a?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1623869675781-80aa31be4d4a?q=80&w=2070",
    ],
    featured: false,
  },
  {
    id: 5,
    name: "Porsche Cayenne",
    brand: "Porsche",
    model: "Cayenne S",
    year: 2020,
    price: 1450000000,
    mileage: 32000,
    transmission: "Automatic",
    color: "Red",
    image: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?q=80&w=2070",
    ],
    featured: false,
  },
  {
    id: 6,
    name: "Range Rover Sport",
    brand: "Land Rover",
    model: "Range Rover Sport HSE",
    year: 2019,
    price: 1250000000,
    mileage: 38000,
    transmission: "Automatic",
    color: "Black",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070",
    ],
    featured: false,
  },
];
