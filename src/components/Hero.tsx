"use client";

import { Phone, ArrowRight, TrendingUp, Shield, Heart, Award } from "lucide-react";

const WHATSAPP_NUMBER = "573166004712";
const WHATSAPP_MESSAGE = "Hola, estoy interesada en conocer más sobre el estudio de modelaje webcam.";

const benefits = [
  { icon: TrendingUp, title: "Monetización", desc: "Maximiza tus ingresos" },
  { icon: Heart, title: "Bienestar", desc: "Ambiente de apoyo" },
  { icon: Shield, title: "Seguridad", desc: "Protección total" },
  { icon: Award, title: "Fidelización", desc: "Largo plazo" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative bg-[#0b1020] overflow-hidden">
      {/* Background effects like demo-project */}
      <div className="absolute inset-0 grid-bg bg-grid"></div>
      <div className="absolute inset-0 hero-glow"></div>
      
      <div className="relative container-padding max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2 text-cyan-400" />
              Mejor Estudio WebCam Latam
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="text-white">SpyBlue Estudio</span>
              <span className="block text-4xl md:text-5xl lg:text-5xl gradient-text mt-2">
                Webcam en Cúcuta
              </span>
            </h1>
            
            <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto lg:mx-0">
              Trabaja en el mejor estudio webcam de Cúcuta. Aumenta tus ingresos trabajando 
              en la industria del modelaje webcam con profesionales de alto nivel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#2979FF] to-[#EA3D92] text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#EA3D92]/30 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Contactar Ahora
              </a>
              <a href="#beneficios" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-[#2979FF] text-white hover:border-[#EA3D92] hover:text-[#EA3D92] transition-all duration-300 hover:-translate-y-0.5">
                Conocer Más
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="card-dark p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-[#2979FF]/30 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
