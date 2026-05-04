import './globals.css';

export const metadata = {
  title: 'Meu Blog Next.js',
  description: 'Blog com rotas dinâmicas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header
          style={{
            padding: '1.5rem 2rem',
            borderBottom: '2px solid #0070f3',
            background: 'white',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          <h1 style={{
            fontSize: '2rem',
            color: '#0070f3',
            margin: 0,
            fontWeight: 'bold'
          }}>
            📚 Meu Blog
          </h1>
        </header>

        <main style={{ padding: '2rem', minHeight: '70vh' }}>
          {children}
        </main>

        <footer style={{
          padding: '2rem',
          textAlign: 'center',
          color: '#666',
          borderTop: '1px solid #eee',
          marginTop: '4rem'
        }}>
          © 2024 Meu Blog - Next.js 13
        </footer>
      </body>
    </html>
  );
}