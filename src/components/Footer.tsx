"use client";

import { Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";

const WHATSAPP_NUMBER = "573166004712";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
];

const legalLinks = [
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Términos de Servicio", href: "/terminos" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0b1020] text-white border-t border-white/10">
      <div className="container-padding max-w-7xl mx-auto py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-[#EA3D92] bg-clip-text text-transparent">
              SpyBlue
            </a>
            <p className="mt-4 text-white/60 text-sm">
              Mejor Estudio WebCam de Cúcuta y Latam. Profesionalismo, seguridad y altos ingresos garantizados.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/40 hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navegación</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyan-400 transition-colors flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                  +57 316 600 4712
                </a>
              </li>
              <li className="flex items-center text-white/60">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                info@spyblue.co
              </li>
              <li className="flex items-start text-white/60">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-cyan-400" />
                Cúcuta, Colombia
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <p className="text-center text-white/40 text-sm">
            © {new Date().getFullYear()} SpyBlue. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
