# 📚 Mini Projeto M5: Aplicação Back-End com API Local 

## 📝 Descrição do Projeto:
Este projeto é uma aplicação web que facilita a pesquisa de livros sobre antirracismo, utilizando a API do Google Books. O objetivo é oferecer aos usuários uma maneira rápida e prática de encontrar livros relacionados ao tema, apresentando as principais informações, como título, autor, imagem e descrição dos livros, diretamente na interface do site.

A aplicação foi desenvolvida em React, utilizando conceitos de hooks como `useState` e `useEffect` para controlar o estado da aplicação e fazer requisições assíncronas à API. Quando o usuário insere uma palavra-chave, a aplicação busca automaticamente os livros relacionados e exibe as informações disponíveis. Além disso, caso algum dado esteja ausente na resposta da API, o sistema mostra informações alternativas, como uma imagem ou descrição padrão.

Esse sistema é ideal para promover o acesso a materiais educativos e literários sobre temas como antirracismo, ajudando a espalhar conhecimento e conscientização sobre questões sociais importantes.

## 🛠️ Problema e Solução:
O problema identificado neste projeto foi a necessidade de acessar dados de livros sobre antirracismo utilizando uma API, de forma que as informações pudessem ser apresentadas de maneira organizada e visualmente atrativa para o usuário. Isso inclui detalhes como título, autores, imagem e descrição dos livros. Uma dificuldade comum em projetos desse tipo é lidar com respostas incompletas da API, como a ausência de imagem ou informações sobre os autores.

A solução encontrada foi o uso da API do Google Books, que permite realizar pesquisas dinâmicas de livros com base em palavras-chave, como "antirracismo". Através de requisições assíncronas, os dados são coletados e tratados para serem exibidos corretamente na interface, incluindo a aplicação de valores padrão caso algum dado não esteja disponível. Isso garante uma experiência de usuário fluida, independentemente da qualidade dos dados retornados pela API.

## 🔨 Processo de Elaboração da Solução do Problema:
Para resolver o problema de forma eficiente, foi necessário construir um componente em React que fizesse a busca dinâmica dos livros diretamente da API. Primeiro, foi criado o estado utilizando `useState` para armazenar dados como título, autores, imagem e descrição do livro, além de variáveis para lidar com a barra de pesquisa, notificações de erros e o estado de carregamento.

O gancho `useEffect` foi empregado para disparar a função de busca sempre que a palavra-chave mudasse. A função assíncrona de busca `fetchData` utiliza a API do Google Books para retornar os dados relacionados ao termo pesquisado. Em seguida, as informações são tratadas: se o livro não tiver uma imagem, por exemplo, uma imagem genérica é exibida, e se não houver autores ou descrição, são mostradas mensagens indicando a falta de dados. Com isso, a aplicação se mantém robusta mesmo diante de respostas incompletas.

## 🌐 Sistema e Utilidade:
Este sistema foi desenvolvido com o objetivo de criar uma ferramenta que facilita a pesquisa e exibição de livros sobre temas como antirracismo, desmatamento e poluição. A API do Google Books permite que o sistema busque uma vasta gama de publicações relacionadas a esses tópicos, trazendo informações úteis e práticas para os usuários. A interface, construída em React, organiza e apresenta esses dados de maneira simples e direta.

A utilidade do sistema reside na sua capacidade de fornecer um ponto de acesso rápido e eficiente a conteúdos educativos sobre temas urgentes e importantes, como o antirracismo. Isso facilita o acesso à informação para pesquisadores, estudantes e qualquer pessoa interessada em aprender mais sobre esses assuntos, contribuindo para a disseminação de conhecimentos e a promoção de discussões relevantes.

## 💻 Instalação: 
1. Clone o repositório da aplicação JavaScript e Node.js pelo link: [Mini Projeto M4](https://github.com/FelipePires007/MIni-Projeto-M4).
2. No terminal, navegue até o diretório do projeto e execute o comando: `npm run dev`.
3. Em seguida, clone o repositório da aplicação React e instale as dependências necessárias para permitir a comunicação com a API local.

## 🚀 Como Executar:
1. Clone o repositório:
   ```sh
   https://github.com/FelipePires007/Mini-Projeto-M5
   https://github.com/FelipePires007/MIni-Projeto-M4

## 🧰 Tecnologias Utilizadas:
- **Node.js** como back-end em JavaScript.
- **React.js** como front-end.


