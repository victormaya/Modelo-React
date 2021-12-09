# Configurando o Ambiente <a name="configurando-ambiente"></a>

Inicialmente é dado o npx create-react-app meuapp.

Com o projeto criado, acesso a pasta './public/index.html" e altero:

- lang='en' para lang='pt-br';
- title "React App" para o nome do projeto;
- noscript "You need to enable JavaScript to run this app." para "Habilite o JavaScript para visualizar o site."

e adiciono o caminho de style padrão do meu projeto

```
<link rel="stylesheet" href="%PUBLIC_URL%/style.css" />
```

e crio o arquivo correspondente dentro da pasta public e coloco o css de reset do projeto:

```
/* RESET */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
b,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

Em seguida, em "./src", deleto os seguintes arquivos:

- App.css;
- App.test.js;
- index.css;
- logo.svg;
- reportWebVitals.js;
- setupTests.js

Em "./src/index.js" eu removo os seguintes imports:

- import './index.css';
- import reportWebVitals from './reportWebVitals';

e deleto as linhas que contem o seguinte o conteúdo:

```
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Dentro de "./src/App.js" limpo todo o código para iniciar um novo como o seguinte

```
import React from 'react';

const App = () => {
  return <div>Meu App</div>;
};

export default App;
```

Para ter a interface mais limpa crio uma pasta '.vscode' na raíz do projeto, e crio um arquivo chamado '.vscode/settings.json' contendo:

```
{
  "git.enabled": false,
  "files.exclude": {
    "node_modules": true,
    ".vscode": true,
    ".gitignore": true,
    "package.json": true,
    "package-lock.json": true,
    "public": true
  }
}

```

# Styled-Components <a name="styled-components"></a>

No terminal instale o SC:

```
npm install styled-components
```

No VSCode use a extensão vscode-styled-components

No arquivo que voce deseja utilizar o SC, importe-o da seguinte maneira:

```
import styled from 'styled-components'
```

e crie uma função referente ao componente estilizado que deseja criar:

```
export const Container = styled.div`

`;
```

OBS: Atente-se que o q vem após o "styled." é a tag html.

No arquivo que você deseja utilizar o estilo, importe-o desestruturando os componentes de estilo criados:

```
import { Container } from './styled';

```

E use-o como uma tag html:

```
const App = () => {
  return (
    <div>
      <Container>Meu App</Container>
    </div>
  );
};
```

Para passar valores por propriedades para o styled, você pode passar da mesma forma que um react normal:

```
  <Container background='#000'>Meu App</Container>
```

e para usar a propriedade no SC utilize a seguinte sintaxe:

```
export const Container = styled.div`
  background: ${(props) => props.background}
`;
```

ou desestruturando:

```
export const Container = styled.div`
  background: ${({background}) => background}
`;
```

OBS:

- Estados tambem podem ser passados pois o JS funciona normalmente no SC. Você pode fazer ternarios, por exemplo.
- Pseudo-elementos sao usados da mesma forma que o css padrão.

# React Router Dom V6 <a name="React Router Dom"></a>

No terminal instale o RRD:

```
npm install history react-router-dom@6.0.0-beta.0
```

Em package.json remova o ^ da versao do RRD pois as novas versoes estão bugadas.

Em "./src/App.js" importe BrowserRouter, Routes e Route, criando a seguinte estrutura:

```
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};
```

- BrowserRouter: componente pai que envolve tudo que depender do react-router;
- Routes: área em que vamos colocar os nossos Route;
- Route: recebe um caminho em path.

Como exemplo de rota, utilizarei as paginas Home, Contato e 404.
Para colocalas em rota, basta importa-las e atribuilas a propriedade "element" e designando-as seu respectivo path. Exemplo:

```
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './Contato';
import Sobre from './Sobre';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Pagina404 />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};
```

- "/" é o caminho inicial de um site, ou seja, nele geralmente fica a Home;
- os demais elementos podem ter seus proprios nomes como path;
- o \* é atribuido a 404 pois ele é chamado quando chama alguma rota que nao existe dentro de Routes.

Por fim, basta apenas ir atribuindo novas paginas ao RouterDom.
OBS: Header e Footers que sempre se repetem, podem ser colocados dentro de BrowserRouter mas fora de Routes.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
