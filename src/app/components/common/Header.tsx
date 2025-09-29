"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, Phone, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Yeibi Hair Design.</h1>
          </div>
          
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#galeria" className="text-foreground hover:text-primary transition-colors">
              Galería
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <div className="hidden xl:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <a href="tel:+5222129141234" className="hover:text-brand-accent transition-colors">
                <span>22-12-91-41-34</span>
              </a>
            </div>
            {/* <BookingModal>
              <Button className="text-sm xl:text-base">Reservar Cita</Button>
            </BookingModal> */}
            <Button className="text-sm xl:text-base">Reservar Cita</Button>
          </div>

          <button 
            className="lg:hidden z-50 relative"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-border shadow-lg">
            <nav className="px-4 py-6 space-y-4 bg-[rgba(0,0,0,0)]">
              <a 
                href="#inicio" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Servicios
              </a>
              <a 
                href="#galeria" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Galería
              </a>
              <a 
                href="#contacto" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Contacto
              </a>
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+5222129141234" className="hover:text-brand-accent transition-colors">
                    <span>22 12 91 41 34</span>
                  </a>
                </div>
                {/* <BookingModal>
                  <Button className="w-full">Reservar Cita</Button>
                </BookingModal> */}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}