"use client";

import { Phone, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "573166004712";
const WHATSAPP_MESSAGE = "Hola, estoy interesada en empezar mi carrera como modelo webcam con SpyBlue.";

export default function CTA() {
  return (
    <section id="cta" className="section-padding bg-[#0b1020] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg bg-grid opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative container-padding max-w-4xl mx-auto text-center">
        <div className="card-dark p-8 md:p-12 transition-all duration-300">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-[#2979FF]/30 mb-8 shadow-gold-glow animate-pulse">
            <Sparkles className="w-8 h-8 text-cyan-400" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Empieza hoy tu carrera como modelo
          </h2>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Únete al mejor estudio webcam de Cúcuta y Latam. 
            Agenda tu entrevista ahora y descubre tu potencial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-[#2979FF] to-[#EA3D92] text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#EA3D92]/30 hover:-translate-y-0.5 mx-auto"
            >
              <Phone className="w-5 h-5" />
              Agendar Entrevista
            </a>
          </div>
          
          <p className="mt-8 text-white/40 text-sm">
            Respuesta en menos de 24 horas • Consulta sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
}
