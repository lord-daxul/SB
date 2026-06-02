"use client";

import { Monitor } from "lucide-react";

const platforms = [
  { name: "Cam4", image: "/images/plataforma1.webp", width: 300, height: 50 },
  { name: "Stripchat", image: "/images/plataforma2.png", width: 600, height: 200 },
  { name: "Chaturbate", image: "/images/plataforma3.webp", width: 300, height: 50 },
  { name: "Camsoda", image: "/images/plataforma4.webp", width: 300, height: 50 },
  { name: "ManyVids", image: "/images/plataforma5.webp", width: 300, height: 50 }
];

export default function PlatformsSection() {
  return (
    <section id="platforms" className="section-padding bg-[#0b1020] overflow-hidden">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">
            Transmite en
            <span className="accent-text"> Varias Plataformas</span> a la vez
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Maximiza tus ingresos transmitiendo simultáneamente en las mejores plataformas webcam del mundo
          </p>
        </div>

        <div className="card-dark p-8 transition-all duration-300">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                <img
                  src={platform.image}
                  alt={platform.name}
                  className="h-auto max-w-full object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
                  style={{
                    maxHeight: platform.name === "Stripchat" ? "60px" : "40px"
                  }}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-white/60 text-sm">
              Compatible con las principales plataformas de streaming webcam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
