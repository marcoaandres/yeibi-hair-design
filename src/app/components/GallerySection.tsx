"use client";

import { useState } from "react";
import { Button, Badge } from "./ui";
import { Instagram, ExternalLink, Filter } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  
  {
    src: "https://res.cloudinary.com/dpbqntcxi/image/upload/v1758406453/yeibi.life/color_je7vz9.jpg",
    alt: "Transformación de color",
    category: "color",
    title: "Balayage Dorado"
  },
  {
     src: "https://res.cloudinary.com/dpbqntcxi/image/upload/v1758406453/yeibi.life/unias_vqxexw.jpg",
    alt: "Diseño de uñas",
    category: "unas",
    title: "Nail Art Floral"
  },
  {
     src: "https://res.cloudinary.com/dpbqntcxi/image/upload/v1758406453/yeibi.life/estilismo_poonmo.jpg",
    alt: "Corte de cabello profesional",
    category: "cortes",
    title: "Corte Bob Moderno"
  },
  {
     src: "https://res.cloudinary.com/dpbqntcxi/image/upload/v1758406453/yeibi.life/maquillaje_seu3zh.jpg",
    alt: "Maquillaje profesional",
    category: "maquillaje",
    title: "Maquillaje de Novia"
  },
  {
     src: "https://res.cloudinary.com/dpbqntcxi/image/upload/v1758406453/yeibi.life/peinados_aoup1n.jpg",
    alt: "Peinado especial",
    category: "peinados",
    title: "Peinado de Quinceañera"
  }
];

const categories = [
  { id: "todos", name: "Todos"},
  { id: "cortes", name: "Cortes"},
  { id: "color", name: "Color"},
  { id: "unas", name: "Uñas"},
  { id: "maquillaje", name: "Maquillaje"},
  { id: "peinados", name: "Peinados"}
];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filteredImages = activeFilter === "todos" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="galeria" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">Galería de Trabajos</h2>
          <p className="text-lg text-[rgba(113,113,130,1)] max-w-2xl mx-auto text-[24px]">
            Cada trabajo es único y personalizado. Explora mis trabajos 
            recientes por categoría y descubre las transformaciones que he realizado.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <div className="flex items-center mr-4 mb-2">
            <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filtrar por:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div key={`${image.category}-${index}`} className="group relative overflow-hidden rounded-lg aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="font-medium mb-2">{image.title}</h4>
                  <Badge variant="secondary" className="mb-4 bg-brand-accent text-brand-primary">
                    {categories.find(cat => cat.id === image.category)?.name}
                  </Badge>
                  <div className="flex space-x-2 justify-center">
                    <Button size="sm" variant="secondary" className="bg-brand-accent text-brand-primary hover:bg-brand-accent/80">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm text-primary">{image.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mostrar mensaje si no hay resultados */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No hay imágenes en esta categoría aún.</p>
          </div>
        )}

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Instagram className="mr-2 h-5 w-5" />
            Ver más en Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}