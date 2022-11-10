# Poke Api

Aplicação consome api pública Deck Of Cards 

## Funcionalidades

- Inserir nome
- Listagem de um deck de cartas com 5 cartas inicialmente
- Embaralhar cartas
- Adicionar uma carta ao deck


## Pilha de Tecnologia

**Bibliotecas:** React, Javascript, Typescript, Eslint, Styled Components, Axios, React Slick.


## Diretórios do Projeto

| Color             | Descrição                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Components | Componentes de interface |
| Contexts | Gerenciamento de estado com Context Api |
| Hooks | Métodos reutilizáveis ou facilitadores para uso de alguma funcionalidade |
| Pages | Páginas |
| Service | Serviços externos ( Conexão com Api ) |
| Style | Arquivos de estilos globais e tema |
| Templates | Base do Template |
| Types | Tipos/Interfaces |


## Dependências de ambiente:
**NodeJS:** https://nodejs.org/
**Yarn:** https://classic.yarnpkg.com/lang/en/docs/install
**Git:** https://git-scm.com/

## Executar Localmente

Clone o projeto

```bash
  git clone https://github.com/phsm7/deck-of-cards.git
```

Acesse o diretório do projeto

```bash
  cd deck-of-cards
```

Instale as dependências

```bash
  yarn
```

Inicie o servidor

```bash
  yarn dev
```
Acesse no navegador através do endereço
```http
  http://localhost:3000
```


## Rotas da Aplicação

#### Baseurl

```http
  http://localhost:3000
```

| Rota| Description                |
| :-------- | :------------------------- |
| `/` | Usuário pode inserir seu nome |
| `/mydeck` | Usuário pode visualizar o deck |


## Feedback

Caso tenha comentários ou sugestões, entre em contato comigo pelo e-mail pedrohsmachado77@gmail.com