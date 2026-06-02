import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Static data for demo (replace with GraphQL fetch)
const posts = [
  {
    id: "1",
    title: "Los riesgos de trabajar en estudios webcam clandestinos",
    slug: "los-riesgos-de-trabajar-en-estudios-webcam-clandestinos",
    content: `
      <p>Trabajar en estudios webcam clandestinos puede parecer una opción atractiva inicialmente, pero conlleva riesgos significativos que pueden afectar tu seguridad, tu privacidad y tu futuro profesional.</p>
      
      <h2>Riesgos principales</h2>
      <ul>
        <li><strong>Falta de seguridad:</strong> Los estudios ilegales no cuentan con sistemas de protección adecuados</li>
        <li><strong>Problemas legales:</strong> Puedes involucrarte en actividades no reguladas</li>
        <li><strong>Pagos irregulares:</strong> Sin contratos formales, tus ingresos no están garantizados</li>
        <li><strong>Exposición de datos:</strong> Tus datos personales pueden ser vulnerados</li>
      </ul>
      
      <h2>La importancia de elegir legalidad</h2>
      <p>En SpyBlue operamos con todos los permisos legales, garantizando tu seguridad y profesionalismo. Nuestra prioridad es crear un ambiente de trabajo seguro y rentable para todas nuestras modelos.</p>
    `,
    date: "2026-05-15",
  },
  {
    id: "2",
    title: "La importancia de trabajar con un estudio webcam legal en Colombia",
    slug: "la-importancia-de-trabajar-con-un-estudio-webcam-legal-en-colombia",
    content: `
      <p>Colombia cuenta con regulaciones claras para el funcionamiento de estudios webcam. Trabajar con un estudio legal te ofrece múltiples beneficios que van más allá de los ingresos económicos.</p>
      
      <h2>Beneficios de la legalidad</h2>
      <ul>
        <li>Contratos formales que protegen tus derechos laborales</li>
        <li>Aportes a seguridad social (salud, pensión, ARL)</li>
        <li>Protección de datos personales bajo la Ley de Protección de Datos</li>
        <li>Ambiente de trabajo seguro y regulado</li>
      </ul>
    `,
    date: "2026-05-10",
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <article className="section-padding">
          <div className="container-padding max-w-4xl mx-auto">
            <Link
              href="/#blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al blog
            </Link>

            <div className="flex items-center text-gray-500 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString("es-CO", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {post.title}
            </h1>

            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-ul:text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
