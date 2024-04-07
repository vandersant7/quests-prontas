
# QUEST | Teste Técnico React Avançado

Este projeto é um desafio proposto pelo Curso DevQuest, do módulo React Avançado. O objetivo do projeto é exibir o card de um Pokémon com seu nome e tipos. Cada card é clicável, e ao ser clicado, a página exibirá mais detalhes do Pokémon, como suas habilidades, movimentos e descrições. Os nomes dos movimentos e as descrições estão em inglês, uma vez que a PokeAPI não disponibiliza traduções para o português, apesar de oferecer opções de idiomas. </br>

Esse projeto é uma SPA (Single Page Application), que em português pode ser traduzido como "Aplicação de Página Única". SPA é um tipo de aplicação web que interage com o usuário, atualizando dinamicamente a página, mas sem a necessidade de recarregar a página inteira.

## Stacks utilizadas
- **ReactJS** para o Front-end, também foram utilizadas as seguintes ferramentas para a criação da Pokédex:
|📚Documentação | Descrição |
|----------------|-----------|
| [PokeAPI](https://pokeapi.co/) | Esse projeto consumi os dados vindo da PokeAPI, como informações sobre espécies de Pokémon, tipos, movimentos habilidades etc.|
| [Styled Components](https://styled-components.com/docs) |Styled Components é uma biblioteca popular em React que permite estilizar componentes usando CSS no JavaScript. Com Styled Components, você pode escrever estilos diretamente no arquivo do componente, o que facilita a manutenção, reutilização e organização do código CSS. Isso ajuda a evitar conflitos de nomeação de classes e permite a criação de estilos dinâmicos com base em props ou estados do componente.|
| [React Loader Spinner](https://www.npmjs.com/package/react-loader-spinner?activeTab=readme) | Esses spinners são componentes visuais que indicam aos usuários que um processo está em andamento, como o carregamento de dados ou a execução de uma tarefa assíncrona. O React Loader Spinner ajuda a melhorar a experiência do usuário ao fornecer feedback visual durante esses momentos de espera, mantendo os usuários informados sobre o progresso da operação em execução. |

## Funcionalidades


- Além disso, foram adicionadas algumas funcionalidades extras ao projeto mencionado anteriormente. Esta SPA possui botões para alternar entre os **modos light e dark.** Vale ressaltar que a escolha do modo feita pelo usuário é mantida mesmo após a atualização da aplicação.

- Foi incluído um botão **"Carregar Mais"** que carrega 10 Pokémon de cada vez, preenchendo a lista com os 151 Pokémon da primeira geração.

- Uma lista suspensa foi adicionada para **filtrar (filter)** os Pokémon de acordo com os tipos.

- Por fim, foi implementada a função de **pesquisa (search)** de Pokémon por nome.


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

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)