"use client";

import Image from "next/image";
import { Award, Clock, Users, Heart } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    icon: Users,
    number: "100+",
    label: "Clientas Satisfechas"
  },
  {
    icon: Clock,
    number: "3+",
    label: "Años de Experiencia"
  },
  {
    icon: Award,
    number: "10+",
    label: "Certificaciones"
  },
  {
    icon: Heart,
    number: "100%",
    label: "Dedicación"
  }
];

export function HeroAboutSection() {
  return (
    <section id="inicio" className="py-12 md:py-20 bg-[rgba(255,255,255,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl mb-6 font-[Poppins] font-bold"
            >
              Yeibi Hair Design.
          </motion.h1>
          <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}  
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-2xl text-[rgba(113,113,130,1)] font-bold"
          >
            Estilismo, barbería, uñas y coloración profesional.
          </motion.h2>
        </div>

        {/* Contenido sobre nosotros */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-20">
          <div>
            <motion.h2
              className="text-3xl md:text-4xl mb-6 font-bold"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Sobre Nosotros
            </motion.h2>
              <motion.div
              className="space-y-4 text-muted-foreground"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="text-[rgba(113,113,130,1)]">
                Desde pequeñas, siempre nos ha fascinado el mundo de la belleza y el estilismo. 
                Lo que comenzó como una pasión por peinar y arreglar a nuestros amigos, amigas y familiares, 
                se ha convertido en nuestra profesión y vocación.
              </p>
              <p className="text-[rgba(113,113,130,1)]">
                Con más de 3 años de experiencia en el sector, nos especializamos en crear 
                transformaciones únicas que realcen la belleza natural de cada persona. 
                Cada cliente es especial y merece un trato personalizado y profesional.
              </p>
              <p className="text-[rgba(113,113,130,1)]">
                Nuestro enfoque se basa en escuchar tus necesidades, entender tu estilo de vida 
                y crear looks que te hagan sentir más que bien todos los días.
              </p>
            </motion.div>
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: .4 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden"
            >
              <Image
                src="/logo-vertical.png"
                alt="Estilista profesional"
                className="w-full"
                width={500}
                height={500}
              />
            </motion.div>
              
          </div>
        </div>

        {/* Estadísticas */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index} 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}