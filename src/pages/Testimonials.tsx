import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    car: "Mercedes-Benz E-Class 2020",
    rating: 5,
    review: "Excellent service! The team was very professional and helpful throughout the entire process. The car I purchased is in perfect condition, exactly as described. Highly recommended!",
    date: "March 2024"
  },
  {
    name: "Sarah Wijaya",
    car: "BMW 5 Series 2021",
    rating: 5,
    review: "I was impressed by the quality of cars available and the transparency in pricing. No hidden costs, everything was clear from the beginning. Very satisfied with my purchase!",
    date: "February 2024"
  },
  {
    name: "Ahmad Rahman",
    car: "Audi A6 2019",
    rating: 5,
    review: "Best car showroom in Surabaya! The staff took time to understand my needs and helped me find the perfect car. The after-sales service is also excellent. Thank you!",
    date: "January 2024"
  },
  {
    name: "Linda Kusuma",
    car: "Lexus ES 2021",
    rating: 5,
    review: "Professional and trustworthy. I felt confident throughout the buying process. The car was thoroughly inspected and came with complete documentation. Couldn't be happier!",
    date: "December 2023"
  },
  {
    name: "David Tan",
    car: "Porsche Cayenne 2020",
    rating: 5,
    review: "Outstanding experience from start to finish. The team went above and beyond to ensure I was satisfied. The quality of their vehicles is truly premium. Highly recommended!",
    date: "November 2023"
  },
  {
    name: "Maya Putri",
    car: "Range Rover Sport 2019",
    rating: 5,
    review: "I've bought several cars over the years, but this was by far the best experience. The team is knowledgeable, honest, and truly cares about customer satisfaction. Five stars!",
    date: "October 2023"
  }
];

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials | Jetz Auto Garage</title>
        <meta
          name="description"
          content="Read what our satisfied customers say about their experience with Jetz Auto Garage. Real reviews from real customers."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
              <p className="text-muted-foreground text-lg">
                Don't just take our word for it. Here's what our satisfied customers have to say about their experience with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.review}"</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.car}</p>
                      <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-2xl mx-auto mt-16 text-center p-8 bg-primary/10 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Want to Share Your Experience?</h2>
              <p className="text-muted-foreground mb-6">
                We&apos;d love to hear about your experience with Jetz Auto Garage. Your feedback helps us improve and helps others make informed decisions.
              </p>
            </div>
          </div>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Testimonials;
