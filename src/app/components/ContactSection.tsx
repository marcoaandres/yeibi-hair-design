"use client";

import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { motion } from "motion/react";
import { Button, Card, CardContent, CardHeader, CardTitle } from "./ui";
import { ContactForm } from "./ContactForm";

export function ContactSection() {

  return (
    <section id="contacto" className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl mb-4 font-bold"
          >
            Reserva Tu Cita
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg text-[rgba(113,113,130,1)] max-w-2xl mx-auto"
          >
            ¿Lista para tu transformación? Contáctame para programar tu cita y 
            descubrir todo tu potencial de belleza.
          </motion.p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle>Formulario de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: .8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-sm text-muted-foreground">
                        Calle Playa Norte esquina con Vicente Lombardo Toledano 15324<br />
                        Heroes 5 de Mayo Sur, 72490<br />
                        Puebla, Puebla<br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-sm text-muted-foreground">22-12-91-41-34</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Horarios</p>
                      <p className="text-sm text-muted-foreground">
                        Lun - Sáb: 11:00 - 20:00<br />
                        Dom: Sólo con cita previa y confirmada
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: .8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Sígueme en Redes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.instagram.com/yeibivc/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <Instagram className="h-4 w-4 mr-2" />
                        Instagram
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.facebook.com/yeibi.vc" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <Facebook className="h-4 w-4 mr-2" />
                        Facebook
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Mantente al día con mis últimos trabajos y tips de belleza.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            

            
          </div>
        </div>
      </div>

    </section>
  );

}