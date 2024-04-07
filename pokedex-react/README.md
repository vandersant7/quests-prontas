# QUEST | Teste Técnico React Avançado

Este projeto é um desafio proposto pelo Curso DevQuest, do módulo React Avançado. O objetivo do projeto é exibir o card de um Pokémon com seu nome e tipos. Cada card é clicável, e ao ser clicado, a página exibirá mais detalhes do Pokémon, como suas habilidades, movimentos e descrições. Os nomes dos movimentos e as descrições estão em inglês, uma vez que a PokeAPI não disponibiliza traduções para o português, apesar de oferecer opções de idiomas.

Esse projeto é uma SPA (Single Page Application), que em português pode ser traduzido como "Aplicação de Página Única". SPA é um tipo de aplicação web que interage com o usuário, atualizando dinamicamente a página, mas sem a necessidade de recarregar a página inteira.
## Stack utilizada

**Front-end:** React, Context API, Styled Components, React Loader Spinner



# Funcionalidades

- Além disso, foram adicionadas algumas funcionalidades extras ao projeto mencionado anteriormente. Esta SPA possui botões para alternar entre os **modos light e dark.** Vale ressaltar que a escolha do modo feita pelo usuário é mantida mesmo após a atualização da aplicação.

- Foi incluído um botão **"Carregar Mais"** que carrega 10 Pokémon de cada vez, preenchendo a lista com os 151 Pokémon da primeira geração.

- Uma lista suspensa foi adicionada para **filtrar (filter)** os Pokémon de acordo com os tipos.

- Por fim, foi implementada a função de **pesquisa (search)** de Pokémon por nome.

## Screenshots

![Laptop Screenshot animado](img src="/public/laptop.gif">)

![Mobile Screenshot animado](img src="/public/mobile.gif">)

![Laptop Screenshot](img src="/public/laptop.png">)

![Mobile Screenshot](img src="/public/mobile.png">)

![Tablet Screenshot](img src="/public/tablet.png">)

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:vandersant7/quests-prontas.git
```

Entre no diretório do projeto

```bash
  cd pokedex-react
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```