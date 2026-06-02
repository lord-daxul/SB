import { Calendar, ArrowRight, BookOpen } from "lucide-react";

interface WPPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

interface BlogProps {
  posts?: WPPost[];
}

function getFeaturedImage(post: WPPost): string | null {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}

function getFeaturedImageAlt(post: WPPost): string {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || "";
}

export default function Blog({ posts = [] }: BlogProps) {
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
              {getFeaturedImage(post) && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={getFeaturedImage(post)!}
                    alt={getFeaturedImageAlt(post)}
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
                  <a href={`/blog/${post.slug}`}>
                    {post.title.rendered}
                  </a>
                </h3>
                <div
                  className="text-white/70 text-sm mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300"
                >
                  Seguir Leyendo
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
