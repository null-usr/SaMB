
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cream-50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-bold font-dancing text-bakery-900">
            Homemade Delights
          </span>
        </Link>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#order">Order</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-cream-50 pb-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="#products" onClick={() => setIsOpen(false)}>
              Products
            </MobileNavLink>
            <MobileNavLink href="#order" onClick={() => setIsOpen(false)}>
              Order
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-bakery-900 hover:text-bakery-600 transition-colors font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <a
    href={href}
    className="block py-2 px-4 text-bakery-900 hover:bg-cream-100 rounded-md"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
