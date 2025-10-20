"use client";
import { AlertCircle, RefreshCcw } from 'lucide-react';

export default function Error() {

  return (
    <div className="my-10 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-2xl w-full text-center relative z-10">
        <div
          className="mb-8 relative"
        >
          {/* Icono decorativo */}
          <div
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="relative">
              <AlertCircle className="w-24 h-24 text-[rgba(39,33,88,0.3)]" strokeWidth={1.5} />
              <div
                className="absolute -top-2 -right-2"
              >
              </div>
            </div>
          </div>
          
          {/* Número 500 */}
          <h1
            className="text-[120px] md:text-[180px] leading-none mb-4 relative"
          >
            <span className="bg-gradient-to-br from-[#272158] via-[#7E7287] to-[#F1BDD5] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              500
            </span>
            
          </h1>
        </div>

        <div
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-[#272158]" style={{ fontWeight: 700 }}>
            ¡Oops! Algo salió mal
          </h2>
          
          <p className="text-lg md:text-xl text-[#7E7287] max-w-lg mx-auto leading-relaxed">
            Ha ocurrido un error inesperado. No te preocupes, nuestro equipo ya está trabajando en ello. 
            Por favor, intenta nuevamente en unos momentos.
          </p>

          <div
            className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => window.location.reload()}
              className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
              style={{ fontSize: '1.125rem', fontWeight: 500 }}
            >
              <div
                className="absolute inset-0"
              />
              <span className="relative flex items-center gap-2">
                <RefreshCcw className="w-5 h-5" />
                Intentar de nuevo
              </span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
