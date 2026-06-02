"use client";

import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

interface BlogProps {
  posts?: Post[];
}

const defaultPosts: Post[] = [
  {
    id: "1",
    title: "Los riesgos de trabajar en estudios webcam clandestinos",
    slug: "los-riesgos-de-trabajar-en-estudios-webcam-clandestinos",
    excerpt: "Descubre por qué elegir un estudio legal y profesional es crucial para tu seguridad y éxito profesional en la industria webcam.",
    date: "2026-05-15",
    featuredImage: {
      node: {
        sourceUrl: "https://spyblue.co/wp-content/uploads/2026/05/16481bc4-bd02-443c-ad37-a6e265618df6.png",
        altText: "Estudio webcam profesional vs clandestino",
      },
    },
  },
  {
    id: "2",
    title: "La importancia de trabajar con un estudio webcam legal en Colombia",
    slug: "la-importancia-de-trabajar-con-un-estudio-webcam-legal-en-colombia",
    excerpt: "Conoce los beneficios legales, laborales y de seguridad que obtienes al trabajar con un estudio webcam debidamente registrado.",
    date: "2026-05-10",
    featuredImage: {
      node: {
        sourceUrl: "https://spyblue.co/wp-content/uploads/2026/05/studio-webcam-legal-en-colombia.png",
        altText: "Legalidad estudio webcam Colombia",
      },
    },
  },
  {
    id: "3",
    title: "SpyBlue: estudio webcam en Cúcuta con mejores instalaciones",
    slug: "spyblue-estudio-webcam-en-cucuta-con-mejores-instalaciones-para-crecer-profesionalmente",
    excerpt: "Conoce nuestras modernas instalaciones diseñadas para maximizar tu productividad y bienestar como modelo webcam profesional.",
    date: "2026-02-20",
    featuredImage: {
      node: {
        sourceUrl: "https://spyblue.co/wp-content/uploads/2026/02/5e5a4143-a33c-4eb2-a129-d63c63f68814.png",
        altText: "Instalaciones SpyBlue Cúcuta",
      },
    },
  },
];

export default function Blog({ posts = defaultPosts }: BlogProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="blog" className="section-padding bg-[#0b1020]">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-[#2979FF]/30 mb-4">
            <BookOpen className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Noticias y Blog
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Consejos, noticias y actualizaciones sobre la industria webcam
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="card-dark overflow-hidden group"
            >
              {post.featuredImage && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center text-sm text-white/60 mb-3">
                  <Calendar className="w-4 h-4 mr-1 text-cyan-400" />
                  {formatDate(post.date)}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300"
                >
                  Seguir Leyendo
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
