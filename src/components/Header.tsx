"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
];

const WHATSAPP_NUMBER = "573166004712";
const WHATSAPP_MESSAGE = "Hola, estoy interesada en conocer más sobre el estudio de modelaje webcam.";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b1020]/95 backdrop-blur-sm border-b border-white/10 transition-all duration-300">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-[#EA3D92] bg-clip-text text-transparent">
              SpyBlue
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/70 hover:text-cyan-400 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#2979FF] to-[#EA3D92] text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#EA3D92]/30 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Contactar
            </a>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2 text-white/70"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/70 hover:text-cyan-400 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#2979FF] to-[#EA3D92] text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#EA3D92]/30 hover:-translate-y-0.5 mx-2"
              >
                <Phone className="w-4 h-4" />
                Contactar
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
