"use client";

import { TrendingUp, Clock, Shield, Eye } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Pagos Puntuales",
    description: "Puntualidad y seguridad en tus pagos quincenales, en Spyblue puedes llegar a obtener ingresos que nunca pensaste.",
    image: "https://backend.spyblue.co/wp-content/uploads/2025/04/spyblue-studio.webp",
    features: ["Pagos quincenales", "Seguridad garantizada", "Altos ingresos"]
  },
  {
    icon: Clock,
    title: "Horarios Flexibles",
    description: "Disponemos de 3 turnos en horarios 24 / 7, Tu escoges el que más te convenga te esperamos en nuestros estudios en la ciudad de Cúcuta.",
    image: "https://backend.spyblue.co/wp-content/uploads/2025/04/turnos-estudio-webcam.webp",
    features: ["3 turnos disponibles", "24/7", "Elige tu horario"]
  },
  {
    icon: Shield,
    title: "Tecnología de Punta",
    description: "Disponemos de equipos de ultima generación, somos referentes a nivel latinoamericano, en tecnología e innovación.",
    image: "https://backend.spyblue.co/wp-content/uploads/2025/04/studio-webcam-en-cucuta.webp",
    features: ["Equipos de última generación", "Referentes latam", "Innovación constante"]
  },
  {
    icon: Eye,
    title: "Discreción Total",
    description: "En Nuestro estudio WEBCAM SpyBlue. Nos preocupamos por tu privacidad y tu seguridad con bloqueo de los países que elijas.",
    image: "https://backend.spyblue.co/wp-content/uploads/2025/04/estudio-webcam-cucuta.webp",
    features: ["Bloqueo de países", "Privacidad total", "Seguridad garantizada"]
  }
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="section-padding bg-[#0b1020] overflow-hidden">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">
            Beneficios de trabajar con
            <span className="accent-text"> SpyBlue</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Descubre por qué somos el mejor estudio webcam de Cúcuta y Latinoamérica
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="card-dark p-8 transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Content */}
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-[#2979FF]/30 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  </div>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {benefit.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
