import { notFound } from 'next/navigation';
import artigos from '../../../data/artigos.json';

type Artigo = {
  titulo: string;
  autor: string;
  data: string;
  resumo: string;
  conteudo: string;
  slug: string;
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function getArtigo(slug: string): Artigo | undefined {
  return (artigos as Artigo[]).find(
    (artigo) => artigo.slug === slug
  );
}

/* Gera páginas estáticas */
export async function generateStaticParams() {
  return (artigos as Artigo[]).map((artigo) => ({
    slug: artigo.slug,
  }));
}

/* SEO dinâmico */
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const artigo = getArtigo(slug);

  if (!artigo) {
    return {
      title: 'Artigo não encontrado',
      description: 'O artigo solicitado não existe.',
    };
  }

  return {
    title: artigo.titulo,
    description: artigo.resumo,
  };
}

/* Estratégia de renderização */
export const dynamic = 'force-static';

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;

  const artigo = getArtigo(slug);

  if (!artigo) {
    notFound();
  }

  return (
    <article
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem 1rem',
        lineHeight: '1.8',
      }}
    >
      <a
        href="/"
        style={{
          display: 'inline-block',
          marginBottom: '2rem',
          color: '#0070f3',
        }}
      >
        ← Voltar
      </a>

      <h1
        style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
        }}
      >
        {artigo.titulo}
      </h1>

      <p
        style={{
          color: '#666',
          marginBottom: '2rem',
        }}
      >
        <strong>{artigo.autor}</strong> •{' '}
        {new Date(artigo.data).toLocaleDateString('pt-BR')}
      </p>

      <div
        dangerouslySetInnerHTML={{
          __html: artigo.conteudo,
        }}
      />
    </article>
  );
}