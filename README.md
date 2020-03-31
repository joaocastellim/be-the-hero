<h1 align="center">
  <img src=".github/logo.svg" alt="Be The Hero">

</h1>

## ![Alt LogoRocketseat](.github/rocketseat-logo.svg) Semana OmniStack 11.0

A [Semana OmniStack](https://rocketseat.com.br/week/inscricao/11.0) é um evento 100% online e gratuito, onde a [Rocketseat](https://github.com/rocketseat) junto com seu CTO [Diego Fernandes](https://github.com/diego3g) e mais toda a comunidade, desenvolvem uma aplicação completa, desde o banco de dados, back-end, até o front-end web e mobile, tudo isso utilizando a stack JavaScript, ou seja, Node.js no back-end, ReactJS para web e React Native para mobile.

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EliasGcf/be-the-hero">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EliasGcf/be-the-hero">
  
  <a href="https://www.codacy.com/manual/EliasGcf/be-the-hero?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=EliasGcf/be-the-hero&amp;utm_campaign=Badge_Grade">
    <img src="https://api.codacy.com/project/badge/Grade/b24c3d160250493fbd4dd26acd9a7ad3"/>
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EliasGcf/be-the-hero">
  
  <a href="https://github.com/EliasGcf/be-the-hero/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EliasGcf/be-the-hero">
  </a>
  
  <a href="https://github.com/EliasGcf/be-the-hero/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/EliasGcf/be-the-hero">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/EliasGcf/be-the-hero">
</p>

<img alt="Layout" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585345367/be-the-hero/mockup_uf7cxb.png">

## Projeto

O objetivo deste projeto é agilizar e facilitar o processo de doações de ONGS de animais. Ou seja, auxiliar uma pessoa para realizar doação para algum caso específico da ONG, como por exemplo a cirurgia de algum animal.

A aplicação web possíbilita que as ONGs consigam sobre seus casos, informando o valor, as necessidades para que se possa solucionar o caso.

Pelo aplicativo mobile, pessoas podem contruibir com o caso e ser o herói daquele caso.

<details><summary>Layout</summary>
  <img alt="Cadastro" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335838/be-the-hero/Cadastro_g45xr9.png">
  <img alt="Login" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335849/be-the-hero/Login_bhx9xu.png">
  <img alt="Cadastro de Caso" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335831/be-the-hero/Cadastrar_novo_caso_edgbbs.png">
  <img alt="Lista de Casos" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335843/be-the-hero/Lista_iti7gz.png">
  <img alt="Mobile" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335852/be-the-hero/mobile_loaoyj.png">
</details>

## Tecnologias

Esta aplicação foi desenolvida com as tecnologias abaixo:

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Express](https://expressjs.com/pt-br/)
- [Celebrate](https://github.com/arb/celebrate)
- [Sequelize](https://sequelize.org/)
- [SQLite](https://www.sqlite.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Nodemon](https://nodemon.io/)
- [React Navigation](https://reactnavigation.org/)
- [React Icons](https://react-icons.netlify.com/#/)
- [Axios](https://github.com/axios/axios)

## Como instalar

### Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- [Expo](https://expo.io/)

### Backend

- Na pasta **backend** rode `npm install` para instalar as dependências;
- Caso não tenha criado o banco de dados rode `npx sequelize migration:create`;
- Rode `npx sequelize-cli db:migrate` para executar as migrations;
- Rode `npm start` para inciar;

### Web

_ps: Antes de executar, lembre-se de iniciar o backend deste projeto_

- Na pasta **backend** rode `npm install` para instalar as dependências;
- Rode `npm start` para inciar;

### Mobile

_ps: Antes de executar, lembre-se de iniciar o backend deste projeto_

- Na pasta **mobile** rode `npm install` para instalar as dependências;
- Rode `expo start` para iniciar o bundle com o expo;
- Se for utilizar emulador, basta clicar na opção `Run on ...`;
- Se for utilizar seu smartphone, com o app do expo escanei o QRCODE;
