import Link from 'next/link';
import { Home, SearchX } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página No Encontrada - 404',
  description: 'Lo sentimos, la página que estás buscando no existe o ha sido movida.',
};

export default function NotFound() {
  return (
    <div className="my-10 bg-gradient-to-br from-white via-[rgba(198,231,235,0.05)] to-[rgba(241,189,213,0.1)] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[rgba(198,231,235,0.2)] to-[rgba(241,189,213,0.2)] rounded-full blur-3xl opacity-30 animate-pulse-glow" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[rgba(39,33,88,0.1)] to-[rgba(198,231,235,0.1)] rounded-full blur-3xl opacity-40 animate-float" />
      
      <div className="max-w-2xl w-full text-center relative z-10">
        <div
          className="mb-8 relative"
        >
          {/* Icono decorativo */}
          <div
            className="inline-flex items-center justify-center mb-6"
            
          >
            <div className="relative">
              <SearchX className="w-24 h-24 text-[rgba(39,33,88,0.3)]" strokeWidth={1.5} />
              <div
                className="absolute -top-2 -right-2"
              >
              </div>
            </div>
          </div>
          
          {/* Número 404 */}
          <h1
            className="text-[120px] md:text-[180px] leading-none mb-4 relative"
          >
            <span className="bg-gradient-to-br from-[#272158] via-[#7E7287] to-[#F1BDD5] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              404
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-[rgba(198,231,235,0.2)] via-[rgba(241,189,213,0.2)] to-transparent blur-2xl"
            />
          </h1>
        </div>

        <div
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-[#272158]" style={{ fontWeight: 700 }}>
            Página no encontrada
          </h2>
          
          <p className="text-lg md:text-xl text-[#7E7287] max-w-lg mx-auto leading-relaxed">
            Lo sentimos, la página que estás buscando no existe o ha sido movida. 
          </p>

          <div
            className="pt-8"
          >
            <Link href="/">
              <button 
                className="group relative overflow-hidden bg-gradient-to-r from-[#272158] to-[rgba(39,33,88,0.9)] hover:from-[rgba(39,33,88,0.9)] hover:to-[#272158] text-white px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                style={{ fontSize: '1.125rem', fontWeight: 500 }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[rgba(198,231,235,0.2)] to-[rgba(241,189,213,0.2)]"
                />
                <span className="relative flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Volver al inicio
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
