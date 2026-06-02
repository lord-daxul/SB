# SpyBlue Headless Frontend

Frontend moderno para SpyBlue Estudio Webcam construido con Next.js 14, conectado a WordPress via GraphQL.

## Tecnologías

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **UI**: Lucide React icons
- **CMS**: WordPress Headless (GraphQL)
- **Deploy**: Cloudflare Pages

## Estructura del Proyecto

```
spyblue-headless/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── globals.css        # Estilos globales
│   ├── providers.tsx      # Apollo Provider
│   └── blog/[slug]/       # Páginas de blog individuales
├── components/            # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Benefits.tsx
│   ├── FAQ.tsx
│   ├── Blog.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── lib/                    # Utilidades
│   ├── apollo-client.ts   # Configuración Apollo
│   └── graphql-queries.ts # Queries GraphQL
├── next.config.js         # Configuración Next.js
└── tailwind.config.ts     # Configuración Tailwind
```

## Configuración Inicial

### 1. Instalar Dependencias

```bash
cd spyblue-headless
npm install
```

### 2. Configurar Variables de Entorno

Copiar `.env.local.example` a `.env.local`:

```bash
cp .env.local.example .env.local
```

Editar `.env.local` con tus valores:

```env
# Endpoint de WordPress GraphQL (requiere WPGraphQL plugin)
WORDPRESS_GRAPHQL_ENDPOINT=https://spyblue.co/graphql

# Número de WhatsApp para CTAs
WHATSAPP_NUMBER=573166004712
```

### 3. WordPress Setup

En tu WordPress actual, instalar y activar:

1. **[WPGraphQL](https://wordpress.org/plugins/wp-graphql/)** - Plugin esencial para GraphQL
2. **WPGraphQL for ACF** (si usas Advanced Custom Fields)

Verificar que el endpoint funciona:
```
https://spyblue.co/graphql
```

## Desarrollo

### Comandos

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Lint
npm run lint
```

El servidor de desarrollo corre en `http://localhost:3000`

## Deploy en Cloudflare Pages

### Método 1: Git Integration (Recomendado)

1. Subir código a GitHub/GitLab
2. Conectar repositorio en Cloudflare Pages dashboard
3. Configurar build command: `npm run build`
4. Directorio de salida: `dist`
5. Agregar variables de entorno en Cloudflare Pages settings

### Método 2: Manual (Wrangler CLI)

```bash
# Instalar wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy
wrangler pages deploy dist
```

## Integración WordPress GraphQL

### Queries Principales

```graphql
# Obtener posts
query GetPosts {
  posts(first: 10) {
    nodes {
      id
      title
      slug
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}

# Obtener página
query GetPage($slug: ID!) {
  page(id: $slug, idType: URI) {
    id
    title
    content
  }
}
```

### Conexión en Componentes

```tsx
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@/lib/graphql-queries";

export default function Blog() {
  const { data, loading, error } = useQuery(GET_POSTS);
  
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div>
      {data.posts.nodes.map((post) => (
        <article key={post.id}>{post.title}</article>
      ))}
    </div>
  );
}
```

## Personalización

### Colores (Tailwind)

Editar `tailwind.config.ts`:

```ts
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',  // Azul principal
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a',
  },
}
```

### Componentes

Los componentes están en `components/` y usan:
- **Header**: Navegación sticky con menú móvil
- **Hero**: Sección principal con CTA a WhatsApp
- **Benefits**: Grid de beneficios (Monetización, Bienestar, Seguridad, Fidelización)
- **FAQ**: Preguntas frecuentes acordeón
- **Blog**: Grid de posts (puede conectar a WordPress)
- **CTA**: Llamada a la acción final
- **Footer**: Links y contacto

## SEO

Los metadatos están configurados en `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "SpyBlue - Estudio WebCam Cúcuta",
  description: "Trabaja en el mejor Estudio Webcam en Cúcuta...",
  openGraph: {
    title: "...",
    description: "...",
  },
};
```

## Rendimiento

- **Static Generation**: `output: 'export'` para sitio estático
- **Image Optimization**: Desactivado para static export (`unoptimized: true`)
- **Font Optimization**: Sistema font stack
- **CSS**: Tailwind purged automáticamente

## Soporte

Para problemas con GraphQL:
1. Verificar que WPGraphQL esté activo en WordPress
2. Probar el endpoint en GraphQL IDE
3. Revisar consola del navegador para errores CORS

## Licencia

Proyecto privado - SpyBlue Estudio Webcam
