import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpyBlue - Estudio WebCam Cúcuta | Mejor Estudio WebCam Latam",
  description: "Trabaja en el mejor Estudio Webcam en Cúcuta. Aumenta tus ingresos trabajando en la industria del modelaje webcam con SpyBlue.",
  openGraph: {
    title: "SpyBlue - Estudio WebCam Cúcuta",
    description: "Mejor Estudio WebCam Latam - Trabaja como modelo webcam en Cúcuta",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-[#0b1020] dark:bg-[#0b1020] text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
