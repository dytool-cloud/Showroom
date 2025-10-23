import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // In a real app, you would send this to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Jetz Auto Garage</title>
        <meta
          name="description"
          content="Get in touch with Jetz Auto Garage. Visit our showroom in Surabaya or contact us via phone, email, or WhatsApp."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-muted-foreground text-lg">
                Have questions? We're here to help. Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Your Message"
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <p className="text-muted-foreground">0896-3904-8578</p>
                        <p className="text-sm text-muted-foreground mt-1">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-muted-foreground">info@jetzautogarage.com</p>
                        <p className="text-sm text-muted-foreground mt-1">We&apos;ll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Visit Our Showroom</h3>
                        <p className="text-muted-foreground">
                          Jl. Raya Otomotif No. 88<br />
                          Surabaya, Indonesia
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">Open 7 days a week</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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

export default Contact;
