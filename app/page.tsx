import Link from 'next/link';
import artigosData from '../data/artigos.json';

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
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '3rem 2rem',
        borderRadius: '20px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ fontSize: '3rem', margin: 0, fontWeight: 'bold' }}>
          📚 Meu Blog
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.95, marginTop: '1rem' }}>
          Next.js 16 • App Router • Server Components
        </p>
      </div>

      {/* Artigos - SEM hover (Server Component) */}
      <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', color: '#333' }}>
        📖 Últimos Artigos
      </h2>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {artigos.map((artigo) => (
          <article key={artigo.slug} 
            style={{ 
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
              borderLeft: '6px solid #667eea',
              transition: 'box-shadow 0.3s ease'
            }}
          >
            <Link 
              href={`/artigos/${artigo.slug}`} 
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'block'
              }}
            >
              <h3 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '1rem', 
                color: '#2d3748',
                lineHeight: '1.3'
              }}>
                {artigo.titulo}
              </h3>
              
              <p style={{ 
                color: '#718096', 
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '1.1rem'
              }}>
                {artigo.resumo}
              </p>
            </Link>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              fontSize: '0.95rem', 
              color: '#a0aec0'
            }}>
              <span>👤 {artigo.autor}</span>
              <span>•</span>
              <time>{new Date(artigo.data).toLocaleDateString('pt-BR')}</time>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}