import { Card, CardContent } from "./ui";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    rating: 5,
    comment: "¡Increíble transformación! Mi cabello nunca se había visto tan bien. La atención al detalle y profesionalismo son excepcionales.",
    service: "Corte y Color",
    avatar: "MG"
  },
  {
    name: "Ana Rodríguez",
    rating: 5,
    comment: "El maquillaje para mi boda fue perfecto. Se mantuvo impecable todo el día y recibí muchos elogios. ¡Altamente recomendada!",
    service: "Maquillaje de Boda",
    avatar: "AR"
  },
  {
    name: "Carmen López",
    rating: 5,
    comment: "Mis uñas siempre lucen espectaculares después de cada visita. Los diseños son únicos y la calidad es insuperable.",
    service: "Diseño de Uñas",
    avatar: "CL"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">Lo Que Dicen Mis Clientes</h2>
          <p className="text-lg text-[rgba(113,113,130,1)] max-w-2xl mx-auto">
            La satisfacción de mis clientas es mi mayor recompensa. Aquí puedes leer 
            algunas de sus experiencias y testimonios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/20 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-[rgba(113,113,130,1)] mb-6 italic">
                  &quot;{testimonial.comment}&quot;
                </p>
                
                <div className="flex items-center">
                    <span data-slot="avatar" className="relative flex size-10 shrink-0 overflow-hidden rounded-full h-12 w-12 mr-4"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-primary text-primary-foreground">{testimonial.avatar}</span></span>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}