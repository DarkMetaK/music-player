<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Timer</h3>

  <p align="center">
    Desenvolvimento de um player de música com o Next.JS, que é integrado ao spotify.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre">Sobre</a>
      <ul>
        <li><a href="#tecnologias">Tecnologias</a></li>
      </ul>
    </li>
    <li>
      <a href="#como-rodar-o-projeto">Como rodar o projeto</a>
    </li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#agradecimentos">Agradecimentos</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre

<a href="https://github.com/DarkMetaK/music-player">
    <img src="./public/template.gif" alt="Product Name Screen Shot" width=100%>
</a>

O projeto é um player de música, desenvolvido com React e integrado ao Spotify com node. Ele lista as suas playlists, músicas favoritas e algumas recomendações, e é capaz de reproduzir as demonstrações de 30 segundos disponibilizadas pelo Spotify. Para sua construção foi utilizado o framework Next.JS, para que fosse possível aplicar proteção de rotas através do middleware. Além disso, outros conceitos como contexto, hooks personalizados e autenticação foram aplicados. Para a parte de autenticação foi utilizado o NextAuth, e como forma de facilitar as requisições para a api do Spotify, foi aplicado a biblioteca Spotify Web Api Node.

### Tecnologias

[![Next][Next.js]][Next-url]<br>
[![React][React.js]][React-url]<br>
[![Node][Node.js]][Node-url]<br>
[![TypeScript][TypeScript.js]][TypeScript-url]<br>

<p align="right">(<a href="#readme-top">Retornar ao topo</a>)</p>

<!-- GETTING STARTED -->
## Como rodar o projeto

É possível acessar o site acessando o link: https://darkmetak-music.vercel.app/
<br>OBS: (A autenticação só irá funcionar, caso você seja incluido na minha lista de usuários no Spotify)

1 - Crie um aplicativo e adquira as key na [api do Spotify](https://developer.spotify.com/dashboard)

2 - Clone o repositório
```sh
git clone https://github.com/DarkMetaK/music-player.git
```

2 - Instale as dependências
```sh
npm install
```

3 - Crie um arquivo .env na raiz do projeto e defina suas váriaveis de ambiente
```
NEXTAUTH_URL= 'YOUR_URL'
NEXT_PUBLIC_SECRET= 'RANDOM_SECRET_FOR_JWT'
SPOTIFY_CLIENT_ID = 'YOUR_SPOTIFY_CLIENT_ID'
SPOTIFY_CLIENT_SECRET = 'YOUR_SPOTIFY_CLIENT_SECRET'
```

4 - Execute o projeto
```sh
npm run dev
```

<p align="right">(<a href="#readme-top">Retornar ao topo</a>)</p>

<!-- CONTACT -->
## Contato

Matheus Porto - [LinkedIn](https://www.linkedin.com/in/matheusport0/) - matporto03@gmail.com

Link Repositório: [https://github.com/DarkMetaK/music-player](https://github.com/DarkMetaK/music-player)

<p align="right">(<a href="#readme-top">Retornar ao topo</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Agradecimentos

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Img Shields](https://shields.io)
* [Next.JS](https://nextjs.org/)
* [Stitches](https://stitches.dev/)
* [Keen-Slider](https://keen-slider.io/)
* [Spotify Web API Node](https://github.com/thelinmichael/spotify-web-api-node)
* [React Loading Skeleton](https://github.com/dvtng/react-loading-skeleton)

<p align="right">(<a href="#readme-top">Retornar ao topo</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/
[TypeScript.js]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=for-the-badge
[TypeScript-url]: https://www.typescriptlang.org/
