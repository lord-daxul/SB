"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Qué documentos necesito para ser Modelo WEBCAM?",
    answer: "Necesitas cédula de ciudadanía vigente, certificado de antecedentes judiciales y ser mayor de edad. Para extranjeros, pasaporte vigente y documentos que acrediten estancia legal en Colombia.",
  },
  {
    question: "¿Quiero monetizar con SpyBlue. Qué planes ofrecen?",
    answer: "Ofrecemos planes flexibles según tu disponibilidad y experiencia. Tenemos opciones para principiantes, modelos intermedios y profesionales. Contáctanos para una evaluación personalizada.",
  },
  {
    question: "¿Necesito tener experiencia para ser modelo webcam?",
    answer: "¡No es necesaria! Contamos con entrenamiento completo para principiantes. Nuestro equipo te guiará paso a paso para que desarrolles tus habilidades y maximices tus ingresos.",
  },
  {
    question: "¿Soy de Venezuela, puedo trabajar con ustedes?",
    answer: "Sí, trabajamos con modelos de Venezuela y otros países. Solo necesitas documentación que acredite tu estancia legal en Colombia (PEP, visa, etc.) y pasaporte vigente.",
  },
  {
    question: "¿Es legal un estudio webcam?",
    answer: "Absolutamente. Operamos como empresa legalmente constituida en Colombia con todos los permisos y licencias requeridas. Cumplimos con todas las normativas laborales y de protección de datos.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-[#0b1020]">
      <div className="container-padding max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-[#2979FF]/30 mb-4">
            <HelpCircle className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-white/70">
            Resolvemos tus dudas sobre trabajar como modelo webcam
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-dark overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-[#2979FF]/20">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
