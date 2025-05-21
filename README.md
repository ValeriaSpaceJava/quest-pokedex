# React + Vite
# Pokédex React - DevQuest

Este projeto foi desenvolvido como parte do teste técnico do módulo **React Avançado** da DevQuest. O objetivo é simular um desafio real de frontend utilizando React, consumo de API, alternância de tema e navegação com React Router.

---

## 🔍 Sobre o Projeto

Uma Pokédex online construída com React que:

* Lista Pokémons com imagem e nome
* Permite ver detalhes de cada Pokémon
* Filtra Pokémons por tipo (ex: fire, water, grass...)
* Alterna entre tema claro e escuro
* Realiza carregamento incremental de Pokémons
* Inclui testes automatizados com Vitest + Testing Library

---

## 🚀 Funcionalidades

* ✅ Listagem inicial de 10 Pokémons com botão "Carregar mais"
* ✅ Página de detalhes com:

  * Imagem
  * Tipos
  * Habilidades (com descrição)
  * Movimentos
* ✅ Filtro por tipo de Pokémon
* ✅ Tema claro/escuro com `Context API`
* ✅ Navegação entre páginas com `React Router`
* ✅ Estilização com `styled-components`
* ✅ Testes unitários com `Vitest` e `Testing Library`

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia            | Motivo da escolha                             |
| --------------------- | --------------------------------------------- |
| **React.js**          | Base da aplicação SPA                         |
| **React Router DOM**  | Navegação entre páginas                       |
| **Context API**       | Alternância de tema (claro/escuro)            |
| **Styled-components** | Estilização baseada em tema                   |
| **PokeAPI**           | Fonte dos dados dos Pokémons                  |
| **Vitest**            | Execução rápida de testes com suporte ao Vite |
| **Testing Library**   | Testes baseados em comportamento do usuário   |

---

## 📁 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/ValeriaSpaceJava/quest-pokedex.git

# Acesse a pasta
cd quest-pokedex

# Instale as dependências
npm install

# Rode a aplicação
npm run dev

# (Opcional) Execute os testes
npm run test
```
