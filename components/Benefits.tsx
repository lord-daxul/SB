"use client";

import { TrendingUp, Heart, Shield, Award, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Monetización",
    description: "Maximiza tus ingresos con nuestra plataforma optimizada y estrategias probadas de monetización.",
    features: ["Altos ingresos garantizados", "Pagos semanales", "Bonos por desempeño"],
  },
  {
    icon: Heart,
    title: "Bienestar",
    description: "Ambiente de trabajo profesional y de apoyo que prioriza tu bienestar físico y emocional.",
    features: ["Ambiente climatizado", "Áreas de descanso", "Apoyo psicológico"],
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Protección total de tu identidad y datos personales con sistemas de seguridad avanzados.",
    features: ["Bloqueo geográfico", "Privacidad garantizada", "Seguridad 24/7"],
  },
  {
    icon: Award,
    title: "Fidelización",
    description: "Programas de retención que valoran tu tiempo y dedicación con beneficios exclusivos.",
    features: ["Contratos a largo plazo", "Beneficios crecientes", "Carrera profesional"],
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="section-padding bg-gradient-to-br from-light-secondary-50 to-light-primary-50 dark:from-dark-secondary-900 dark:to-dark-primary-900">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Qué nos hace ser el
            <span className="bg-gradient-to-r from-cyan-400 to-[#EA3D92] bg-clip-text text-transparent"> Mejor Estudio WebCam</span> en Cúcuta?
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-secondary-200 max-w-2xl mx-auto">
            En SpyBlue combinamos tecnología de punta con un ambiente profesional 
            para tu éxito en la industria webcam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-3xl bg-white dark:bg-dark-secondary-800 shadow-luxury-light dark:shadow-luxury-dark border border-light-secondary-200 dark:border-dark-primary-600 hover:shadow-gold-glow transition-all duration-300 hover:scale-102"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-light-primary-100 to-light-secondary-100 dark:from-dark-primary-700 dark:to-dark-secondary-600 flex items-center justify-center group-hover:shadow-gold-glow transition-all">
                  <benefit.icon className="w-8 h-8 text-light-primary-600 dark:text-dark-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-dark-secondary-300 mb-6">{benefit.description}</p>
                  <ul className="space-y-3">
                    {benefit.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-700 dark:text-dark-secondary-200">
                        <CheckCircle className="w-5 h-5 text-light-primary-600 dark:text-dark-primary-400 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
