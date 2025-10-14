import { Heart, Instagram, Facebook, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="bg-primary text-primary-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-[rgba(255,255,255,1)]">Yeibi Hair Design.</h3>
            <p className="text-primary-foreground/80 mb-4">
              Transformando belleza con pasión y profesionalismo. Tu estilista de confianza 
              para todos tus servicios de belleza.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/yeibivc/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/yeibi.vc" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#servicios" className="hover:text-primary-foreground transition-colors">Cortes de Cabello</a></li>
              <li><a href="#servicios" className="hover:text-primary-foreground transition-colors">Transformación de Color</a></li>
              <li><a href="#servicios" className="hover:text-primary-foreground transition-colors">Diseño de Uñas</a></li>
              <li><a href="#servicios" className="hover:text-primary-foreground transition-colors">Maquillaje</a></li>
              <li><a href="#servicios" className="hover:text-primary-foreground transition-colors">Peinados Especiales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                22-12-91-41-34
              </li>
              <li>Calle Playa Norte esquina con Vicente Lombardo Toledano 15324</li>
              <li>Heroes 5 de Mayo Sur, 72490</li>
              <li>Puebla, Puebla</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0">
            <span className="flex items-center">
              Hecho con <Heart className="h-4 w-4 mx-1 text-red-400" /> para mis clientes
            </span>
            <span className="hidden sm:inline mx-2">•</span>
            <span>&copy; {new Date().getFullYear()} Yeibi.life. Todos los derechos reservados.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}