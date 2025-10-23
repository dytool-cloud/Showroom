import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const FloatingWhatsApp = () => {
  const whatsappNumber = "6289639048578"; // Format: country code + number without leading 0
  const message = "Hello, I'm interested in your cars. Can you provide more information?";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 p-0 shadow-lg hover:scale-110 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default FloatingWhatsApp;
