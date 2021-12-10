# Sumário

- [Configurando o Ambiente](#configurando-ambiente)
  - [Organização de pastas e Componentes](#organizacao)
- [Styled-Components](#styled-components)
- [React Router Dom V6](#react-router-dom-v6)
  - [Link](#link)
  - [useNavigate](#usenavigate)
  - [Páginas Dinâmicas - useParams](#useparams)
  - [useLocation](#uselocation)
  - [Rotas Aninhadas](#rotas-aninhadas)
- [Formulários](#formularios)
  - [Input](#input)
  - [Textarea](#textarea)
  - [Select](#select)
  - [Radio](#radio)
  - [Checkbox](#checkbox)
  - [Componentes Input](#componentes-input)
  - [Componentes Select](#componentes-select)
  - [Componentes Radio](#componentes-radio)
  - [Componentes Checkbox](#componentes-checkbox)
  - [Validação](#validacao)
  - [useForm](#useForm)
- [Head](#head)
- [PropTypes](#proptypes)
- [Lazy e Suspense](#lazy-suspense)
- [Memo](#memo)
- [useReducer](#usereducer)

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

## Organização de pastas e Componentes <a name="organizacao"></a>

Em Contrução...

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

# React Router Dom V6 <a name="react-router-dom-v6"></a>

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

## Link <a name="Link"></a>

Para navegar entre páginas utilize o Link. Para importá-lo:

```
import { Link } from 'react-router-dom';
```

Exemplo de uso:

```
<nav>
  <Link to="/">Home</Link>
  <Link to="sobre">Sobre</Link>
  <Link to="contato">Contato</Link>
</nav>
```

Para menus de navegação, como existem em Headers, é recomendada a utilização do "NavLink", pois ele adiciona a classe "active" ao botão referente a página atual, assim voce pode estilizar o botão ativo mais facilmente. Para importá-lo:

```
import { NavLink } from 'react-router-dom';
```

Ao utilizar o NavLink para ir para "/" adicione a propriedade end, pois todos os caminhos tem "/" (exemplo: "/sobre"), adicionando o end, ele reconhecerá apenas a pagina "/" propriamente dita.

## useNavigate <a name="usenavigate"></a>

Para fazer navegação que nao seja por meio de uma tag "a", e sim por função, utilize o useNavigate.
Exemplo de utilização:

```
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log('Faz o login');
    navigate('/sobre');
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
```

## Páginas Dinâmicas - useParams <a name="useparams"></a>

Páginas dinâmicas precisam de um id para serem chamadas, ou seja, se você tem uma página "/produto", mas q seja dinamica de acordo com cada produto, a rota será: "/produto/notebook", por exemplo.

O route desta página tem que ser escrito da seguinte maneira:

```
<Route path="produto/:id" element={<Contato />}
```

obs: essa string "id" pode ser qualquer outra, ela apenas será o nome da variavel criada para armazenar o valor digitado na rota. Neste caso a variavel sera id e o valor será notebook.

Neste caso, a página produto, sem id, não existe. A opção seria criar uma rota somente para produto.

Dentro da página, para ter acesso ao id passado na url, notebook, por exemplo, usa-se o Hook useParams. Para usá-lo:

```
import { useParams } from 'react-router-dom';

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto</h1>
      <p>id: {params.id}</p>
    </div>
  );
};
```

Esse valor é usado, principalmente, para fazer um fetch.

## useLocation <a name="uselocation"></a>

Retorna o objeto location, com diversas informações sobre a rota atual, como o caminho, parâmetros de busca e mais.

```
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    console.log(search.get('q'));
    console.log('Toda vez que a rota mudar');
  }, [location]);

  return <div></div>;
};
```

## Rotas Aninhadas <a name="rotas-aninhadas"></a>

Pode-se utilizar rotas dentro de uma pagina que já é uma rota.
Para isso, a página que voce quer utilizar como a nova gerenciadora de rotas deve ser chamada adicionando um /\* no final do path.
Exemplo em produto, no App.js:

```
  <Route path="produto/:id/*" element={<Produto />}>
```

Na página produto, por exemplo, o componente de rota inicial deve ser o "/" ou apenas vazio "".
O to da navegação deve ser apenas vazio "".
Exemplo:

```
<div>
  <h1>Produto: {params.id}</h1>
  <nav>
    <NavLink to="">Descrição</NavLink>
    <NavLink to="avaliacao">Avaliação</NavLink>
    <NavLink to="customizado">Customizado</NavLink>
  </nav>
  <Routes>
    <Route path="/" element={<ProdutoDescricao />} />
    <Route path="avaliacao" element={<ProdutoAvaliacao />} />
    <Route path="customizado" element={<ProdutoCustomizado />} />
  </Routes>
</div>
```

# Formulários <a name="formularios"></a>

O form tem que ter o onSubmit com uma função que será a de ação do formulário, como enviar. Terá que ter um button com função nenhuma, apenas button. E dentro da função do onSubmit sempre tem que ter um preventDefault.
Exemplo:

```
<form onSubmit={handleSubmit}>
  ...
  <button>Enviar</button>
</form>
```

```
function handleSubmit(event) {
    event.preventDefault();
}
```

OBS: O onSubmit fará com que o button e o "enter" funcione como disparo da ação do formulário.

## Input <a name="input"></a>

Propriedades importantes:

- value: propriedade onde deve estar atribuído o estado.
- onChange: evento que tem callback de atualização do estado.

Todo input pode ter um label. Para referenciar o label ao input basta que o htmlFor do label seja igual ao id do input.
Exemplo:

```
<label htmlFor="nome">Nome</label>
<input
  type="text"
  id="nome"
  value={nome}
  onChange={(event) => setNome(event.target.value)}
/>
```

A forma como eu lido com os valores do formulario é apenas com um state contendo um objeto.
Exemplo do state:

```
const [form, setForm] = React.useState({
  nome: '',
  email: '',
});
```

onde a função de mudança é:

```
function handleChange({ target }) {
  const { id, value } = target;
  setForm({ ...form, [id]: value });
}
```
Neste caso usamos a propriedade do input "id" para poder ser a chave dele no objeto.
E o value do input sera form.id, exemplo:

```
<input
  type="email"
  id="email"
  value={form.email}
  onChange={handleChange}
/>
```

# Head <a name="head"></a>

Comos não temos acesso ao Head para alterar Nome e Descrição de cada página, criamos uma função que utiliza do JS pra fazer essas alterações.

Primeiro criamos um arquivo Head.js com o seguinte conteúdo:

```
import React from 'react';

function Head(props) {
  React.useEffect(() => {
    document.title = "Nome do site | " + props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description);
  }, [props]);
  return <></>;
}

export default Head;
```

OBS: Voce pode alterar onde esta indicado "Nome do site" para o nome do seu site, ou apenas remova-o.

Agora basta importar o Head em cada pagina que voce queira alterar o titulo e descrição, e usar as propriedades title e description.

```
  <Head title="Página Sobre" description="Descrição da sobre" />
```

# PropTypes <a name="proptypes"></a>

No meu padrão de projetos, uso sempre o PropTypes, ele dará consistencia, pois estará definindo um tipo especifico de valor que deve ser recebido em cada prop.
Uso em todas as páginas que recebem Props.

Para usá-lo, importe-o:

```
import PropTypes from 'prop-types';
```

No final do código, antes do export default, você cria o objeto proptype:

```
NomeDoComponente.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};
```

- "NomeDoComponente" deve ser alterado para o nome do componente em questão que recebe essas props.
- isRequired serve para que exiba o erro no console caso envie a prop vazia, ou seja, ela é obrigatoria para o funcionamento deste componente.

Caso um valor nao tenha sido enviado mas você queira definir um valor padrão pra quando isso ocorrer, você pode utilizar o defaultProps:

```
Button.defaultProps = {
  width: 200,
  disabled: false,
};
```

# Lazy e Suspense <a name="lazy-suspense"></a>

Em Contrução...

# Memo <a name="memo"></a>

Em Contrução...

# useReducer <a name="usereducer"></a>

Em Contrução...

Fonte: origamid.com
