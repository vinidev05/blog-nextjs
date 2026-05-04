import artigosData from '@/data/artigos.json';

type Artigo = {
  titulo: string;
  autor: string;
  data: string;
  resumo: string;
  slug: string;
};

const artigos = artigosData as Artigo[];

export default function Home() {
  return (
    <div>
      <h2>Artigos</h2>

      {artigos.map((artigo) => (
        <div key={artigo.slug}>
          <a href={`/artigos/${artigo.slug}`}>
            {artigo.titulo}
          </a>
        </div>
      ))}
    </div>
  );
}