import Image from "next/image";
import { Card, CardContent } from "./ui";
import { Award, Clock, Users, Heart } from "lucide-react";

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
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 font-[Poppins] font-bold">
            Yeibi Hair Design.
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-[rgba(113,113,130,1)] font-bold">
            Estilismo, barbería, uñas y coloración profesional.
          </h2>
        </div>

        {/* Contenido sobre nosotros */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 font-bold">Sobre Nosotros</h2>
            <div className="space-y-4 text-muted-foreground">
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
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dpbqntcxi/image/upload/v1758408001/yeibi.life/yeibi_logo_csoi9y.jpg"
                alt="Estilista profesional"
                className="w-full h-96 object-cover"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">★ 5.0</p>
                  <p className="text-sm text-muted-foreground">Calificación Promedio</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}