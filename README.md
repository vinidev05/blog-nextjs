# Blog Next.js

Projeto desenvolvido com Next.js utilizando TypeScript, com foco em geração de páginas estáticas, rotas dinâmicas, SEO e automação de processos através de uma pipeline CI/CD com GitHub Actions.

## Tecnologias Utilizadas

- Next.js 16
- React 19
- TypeScript
- ESLint
- GitHub Actions
- Vercel

## Funcionalidades

- Página inicial com listagem de artigos
- Rotas dinâmicas para cada artigo
- Geração estática de páginas (SSG)
- SEO dinâmico com metadados
- Estrutura organizada utilizando App Router
- Navegação entre páginas
- Conteúdo carregado a partir de arquivo JSON

## Estrutura do Projeto

```text
app/
├── artigos/
│   └── [slug]/
│       └── page.tsx
├── page.tsx

data/
└── artigos.json

public/

.github/
└── workflows/
    └── main.yml
```

## Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Instale as dependências:

```bash
npm install
```

## Executando o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## Lint

Executar análise de código:

```bash
npm run lint
```

## Testes

Executar testes:

```bash
npm run test
```

## Build

Gerar build de produção:

```bash
npm run build
```

## Pipeline CI/CD

Este projeto possui uma pipeline automatizada utilizando GitHub Actions.

A pipeline é executada automaticamente em pushes e pull requests para a branch `main`.

Etapas da pipeline:

1. Instalação das dependências (`npm ci`)
2. Verificação de código com ESLint (`npm run lint`)
3. Execução dos testes (`npm run test`)
4. Build da aplicação (`npm run build`)
5. Deploy automático

## Deploy

Aplicação publicada em:

**Vercel:**  
https://blog-nextjs-h14a.vercel.app/

## Repositório

GitHub:  
https://github.com/vinidev05/blog-nextjs

## Autor

Vinícius Machado
