"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui";

const services = [
  {
    title: "Estilismo personalizado.",
    description: "Cortes y peinados que resaltan tu estilo único y belleza natural.",
    image: "https://res.cloudinary.com/dpbqntcxi/image/upload/v1758406453/yeibi.life/estilismo_poonmo.jpg",
    price: "Desde $90"
  },
  {
    title: "Diseño de Uñas.",
    description: "Manicure y diseño que potencian la belleza de tus manos.",
    image: "https://res.cloudinary.com/dpbqntcxi/image/upload/v1758406453/yeibi.life/unias_vqxexw.jpg",
    price: "Desde $200"
  },
  {
    title: "Maquillaje Profesional.",
    description: "Maquillaje para eventos especiales, bodas, sesiones fotográficas y más.",
    image: "https://res.cloudinary.com/dpbqntcxi/image/upload/v1758406453/yeibi.life/maquillaje_seu3zh.jpg",
    price: "Desde $300"
  },
  {
    title: "Peinados Especiales.",
    description: "Peinados para bodas, graduaciones, quinceañeras y eventos especiales.",
    image: "https://res.cloudinary.com/dpbqntcxi/image/upload/v1758406453/yeibi.life/peinados_aoup1n.jpg",
    price: "Desde $300"
  },
  {
    title: "Efectos de color.",
    description: "Degradados y arreglos realizados con precisión profesional.",
    image: "https://res.cloudinary.com/dpbqntcxi/image/upload/v1758406453/yeibi.life/color_je7vz9.jpg",
    price: "Desde $500"
  }
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl mb-6 font-bold"
          >
            Servicios Premium
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg text-[rgba(113,113,130,1)] max-w-3xl mx-auto"
          >
            Cada servicio está diseñado para realzar tu belleza natural con técnicas innovadoras 
            y productos de la más alta calidad. Experimenta una transformación única que refleje 
            tu personalidad y estilo, con la atención personalizada que mereces.
          </motion.p>
        </div>
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="group overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Imagen */}
                <div className={`relative w-full h-full aspect-square overflow-hidden mx-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
                
                {/* Contenido */}
                <div className={`flex flex-col justify-center p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <CardHeader className="p-0 space-y-4 mb-6">
                    <CardTitle className="text-[32px] font-bold">{service.title}</CardTitle>
                    <CardDescription className="leading-relaxed text-[22px] text-[rgba(113,113,130,1)]">{service.description}</CardDescription>
                  </CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl text-primary">
                      {service.price}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            </motion.div>

            
          ))}
        </div>
      </div>
    </section>
  );
}