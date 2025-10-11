"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "../ui";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
      className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50"
    > 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image src="/logo-horizontal.svg" alt="Yeibi Hair Design" width={250} height={46} />
          </div>
          
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary hover:bg-accent/20 px-3 py-2 rounded-md transition-all duration-300 hover:scale-105">
              Inicio
            </a>
            <a href="#servicios" className="text-foreground hover:text-primary hover:bg-accent/20 px-3 py-2 rounded-md transition-all duration-300 hover:scale-105">
              Servicios
            </a>
            <a href="#galeria" className="text-foreground hover:text-primary hover:bg-accent/20 px-3 py-2 rounded-md transition-all duration-300 hover:scale-105">
              Galería
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary hover:bg-accent/20 px-3 py-2 rounded-md transition-all duration-300 hover:scale-105">
              Contacto
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <Button asChild>
              <a href="https://wa.me/522212914134?text=Hola,%20me%20gustaría%20reservar%20una%20cita." className="text-sm xl:text-base" target="_blank" rel="noopener noreferrer">Reservar Cita</a>
            </Button>
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
            <nav className="px-4 py-6 space-y-4 bg-background/95 backdrop-blur-sm">
              <a 
                href="#inicio" 
                className="block text-foreground hover:text-primary hover:bg-accent/20 px-3 py-2 rounded-md transition-all duration-300 hover:scale-105"
                onClick={closeMenu}
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="block text-foreground hover:text-primary hover:bg-accent/20 px-3 py-2 rounded-md transition-all duration-300 hover:scale-105"
                onClick={closeMenu}
              >
                Servicios
              </a>
              <a 
                href="#galeria" 
                className="block text-foreground hover:text-primary hover:bg-accent/20 px-3 py-2 rounded-md transition-all duration-300 hover:scale-105"
                onClick={closeMenu}
              >
                Galería
              </a>
              <a 
                href="#contacto" 
                className="block text-foreground hover:text-primary hover:bg-accent/20 px-3 py-2 rounded-md transition-all duration-300 hover:scale-105"
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
                <Button asChild>
                  <a href="https://wa.me/522212914134?text=Hola,%20me%20gustaría%20reservar%20una%20cita." target="_blank" rel="noopener noreferrer" className="w-full">Reservar Cita</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
    
  );
}