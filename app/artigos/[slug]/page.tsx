import artigos from '@/data/artigos.json';
import { notFound } from 'next/navigation';

type Artigo = {
  titulo: string;
  autor: string;
  data: string;
  resumo: string;
  conteudo: string;
  slug: string;
};

export default async function ArtigoPage({ params }: any) {
  const { slug } = await params;

  const artigo = (artigos as Artigo[]).find((a) => a.slug === slug);

  if (!artigo) {
    notFound();
  }

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>{artigo.titulo}</h1>

      <p style={{ color: '#666' }}>
        {artigo.autor} -{' '}
        {new Date(artigo.data).toLocaleDateString('pt-BR')}
      </p>

      <div
        dangerouslySetInnerHTML={{ __html: artigo.conteudo }}
      />
    </article>
  );
}