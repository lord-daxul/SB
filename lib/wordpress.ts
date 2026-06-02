const WP_API_URL = process.env.WORDPRESS_API_URL || 'https://backend.spyblue.co/wp-json/wp/v2';

export interface WPPost {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
    }>;
  };
}

export interface WPPage {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
}

export async function getPosts(): Promise<WPPost[]> {
  const res = await fetch(`${WP_API_URL}/posts?_embed`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, {
    next: { revalidate: 60 },
  });
  const posts: WPPost[] = await res.json();
  return posts[0] || null;
}

export async function getPages(): Promise<WPPage[]> {
  const res = await fetch(`${WP_API_URL}/pages`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Failed to fetch pages');
  return res.json();
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const res = await fetch(`${WP_API_URL}/pages?slug=${slug}`, {
    next: { revalidate: 60 },
  });
  const pages: WPPage[] = await res.json();
  return pages[0] || null;
}

export function getFeaturedImage(post: WPPost): string | null {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
}
