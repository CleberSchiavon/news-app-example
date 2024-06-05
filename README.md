# News App

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Iniciar o projeto

Iniciar o projeto e instalar suas dependencias é muito simples!

```sh
pnpm run prepare-repo
```

Pronto! Todo o enviroment está pronto e configurado

OBS: Caso quiser acompanhar o desempenho da sua aplicação em tempo real, basta acessar a rota /status pelo navegador!

## Apps e Pacotes

- `@repo/ui - packages/ui`: Aqui fica todos os componentes que são utilizados na aplicação
- `@repo/eslint-config - packages/eslint-config`: Configurações do ESLINT
- `@repo/typescript-config - packages/typescript-config`: Todos os TSConfigs utilizados na aplicação ficam aqui

## Features

Esse repositório contém

- TurboRepo
- Node.JS
- Nest.JS
- Next.JS
- TypeScript
- PNPM
- DotEnv
- Swagger
- Jest and Supertest
- Prettier and Eslint
- Husky with Conventional Commits
- Standard Version
- Editor Config
- Class Validations (DTO's)

## Dev Features

- 📈 Absolute Import and Path Alias — Uma alternativa do typescript pra importar arquivos sem precisar de "../../", ao invés disso usamos "~/(pasta)"
- 📏 ESLint — O ESLint serve pra procurar problemas de escrita dentro do código (pode ser personalizado conforme as vontades do usuário)
- 💖 Prettier and Eslint — Formata o código automaticamente com os padrões definidos do usuário
- 🐶 Husky, Lint Staged — Serve pra rodar uma série de scripts nos arquivos prestes a commitar ou a subir
- 🤖 Conventional Commit Lint — Serve pra conferir se os commits estão sendo feitos usando Conventional Commit (https://www.conventionalcommits.org/en/v1.0.0/)
- ⏰ Standard Version — Gera um changelog automatico a cada build, mostrando todas as mudanças que foram feitas
- 🟢 Swagger - Todos os endpoints estão documentados no swagger (path: "/swagger")
- TurboRepo - Gestão inteligente de todo o repositório

## Comandos Uteis

Esse repositório contém vários comandos uteis na Raiz do projeto, para acelerar todo o processo de desenvolvimento

## Rotas da API

As rotas da API podem ser conferidas abaixo, pela rota /swagger no navegador, ou pela collection que está compartilhada na Raiz do Projeto

### News

#### GET /news

- Recupera todas as noticias
- Resposta: 200 OK com todas as noticias

#### GET /news/main

- Recupera todas as noticias principais
- Resposta: 200 OK com todas as noticias principais

#### GET /news/secondary

- Recupera todas as noticias secundárias
- Resposta: 200 OK com todas as noticias secundárias

#### GET /news/:id

- Recupera uma noticia especifica
- Resposta: 200 OK com a noticia especifica

### Health

#### GET /

- Retorna o estado da API
- Resposta: 200 OK com uma mensagem de Hello World

#### GET /health

- Retorna o estado da API
- Resposta: 200 OK com uma mensagem de Hello World

### Comandos do Repositório

```sh
pnpm run dev # Rodar o Front-End e o backend de forma simultânea, cada um em uma porta
```

```sh
pnpm run dev # Rodar o Front-End e o backend de forma simultânea, cada um em uma porta
```

```sh
pnpm run test # Rodar todos os testes do Repositório
```

```sh
pnpm run husky:install # Instala o husky e cria os arquivos na raiz do projeto
```

```sh
pnpm run format # Roda o prettier em todo o projeto
```

```sh
pnpm run lint # Roda o ESLint e o prettier em todo o projeto
```

```sh
pnpm run changelog # Gera um arquivo de CHANGELOG baseado na arvore de commits
```

### Comandos da API

```sh
pnpm run api:dev # Rodar APENAS a API em modo de desenvolvimento
```

```sh
pnpm run api:test # Rodar todos os testes da API
```

```sh
pnpm run api:test-watch # Rodar todos os testes da API no modo Watch do Jest
```

## Autor

 <div style="display: flex; flex-direction: column; gap: 1rem; font-size: 15px">
 <a href="https://www.linkedin.com/in/cleberschiavon">
 <b>Cleber Henrique</b>
</a>
 <a href="mailto:cleberschiavon@outlook.com">
cleberschiavon@outlook.com
</a>
 </div>

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cleberschiavon)
