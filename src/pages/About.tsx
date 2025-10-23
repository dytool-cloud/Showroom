import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Award, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Jetz Auto Garage</title>
        <meta
          name="description"
          content="Learn about Jetz Auto Garage - your trusted partner for premium used cars in Surabaya. Experience, quality, and customer satisfaction."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">About Jetz Auto Garage</h1>

              <div className="aspect-video mb-12 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=2070"
                  alt="Jetz Auto Garage showroom"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-muted-foreground mb-6">
                  Welcome to Jetz Auto Garage, Surabaya&apos;s premier destination for luxury and premium used cars.
                  With over a decade of experience in the automotive industry, we have built our reputation on trust, 
                  quality, and exceptional customer service.
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  Our mission is simple: to provide our customers with the finest selection of pre-owned vehicles, 
                  each carefully inspected and certified to meet our rigorous standards. We understand that purchasing 
                  a car is a significant investment, and we're committed to making your experience as smooth and 
                  satisfying as possible.
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  At Jetz Auto Garage, we don&apos;t just sell cars – we build lasting relationships with our customers.
                  Our knowledgeable team is always ready to assist you in finding the perfect vehicle that matches 
                  your needs, lifestyle, and budget.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
                  <p className="text-muted-foreground">
                    Every car undergoes comprehensive inspection and certification
                  </p>
                </div>

                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Trusted Service</h3>
                  <p className="text-muted-foreground">
                    Over 10 years serving satisfied customers in Surabaya
                  </p>
                </div>

                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Customer First</h3>
                  <p className="text-muted-foreground">
                    Dedicated team committed to your satisfaction
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>✓ Transparent pricing with no hidden fees</li>
                  <li>✓ Complete vehicle history and documentation</li>
                  <li>✓ After-sales support and service</li>
                  <li>✓ Flexible financing options</li>
                  <li>✓ Trade-in services available</li>
                  <li>✓ Professional and friendly staff</li>
                </ul>
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

export default About;
