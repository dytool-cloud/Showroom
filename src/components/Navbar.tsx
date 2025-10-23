import { Link, useLocation } from "react-router-dom";
import { Car } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/inventory", label: "Our Cars" },
    { href: "/about", label: "About Us" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <Car className="h-6 w-6" />
            <span>Jetz Auto Garage</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Link to="/contact" className="text-sm font-medium text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
