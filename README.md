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
  - [Rota Protegida](#rota-protegida)
- [Formulários](#formularios)
  - [Input](#input)
  - [Select](#select)
  - [Radio](#radio)
  - [Checkbox](#checkbox)
  - [Componentes Input](#componentes-input)
  - [Componentes Select](#componentes-select)
  - [Componentes Radio](#componentes-radio)
  - [Componentes Checkbox](#componentes-checkbox)
  - [useForm](#useform)
- [Hooks](#hooks)
  - [useRef](#useref)
  - [useMemo](#usememo)
  - [useCallback](#usecallback)
  - [useContext](#usecontext)
  - [Custom Hooks](#customhooks)
  - [Regas](#regras)
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

## Rota Protegida <a name="rota-protegida"></a>

Rotas protegidas são rotas que só são acessadas após uma verificação, por exemplo, a conta de um usuário só pode ser acessada caso ele esteja logado, assim, a rota de conta deve estar protegida.

Não irei levar em consideração aqui o contexto que você irá utilizar para verificar se o usuário está logado ou não.
Criarei apenas uma variavel de exemplo, um const login, que sera true ou false para fazer o teste da rota protegida.

Primeiro, em App.js, criei uma rota chamada conta, ficando assim:

```
<Route path='conta' element={<Conta />} />
```

Depois criei a página "Conta.js" que será acessada somente se o usuario tiver login true.

Para preenchela genericamente apenas usei o seguinte código:

```
import React from 'react';

function Conta() {
  return <div>Minha conta</div>;
}

export default Conta;

```

Dentro de "src" criei uma pasta helpers, que dentro terá o componente que irá proteger a pagina Conta.
Criei o componente nomeando-o de "ProtectedRoute.js"
Dentro dele, implementei o seguinte código colocando a cont login como true, mas você pode alterar para false dependendo dos seus testes.
No return verifiquei se o login esta true, se sim, ele redirecionará para o children que sera a pagina a ser protegida, caso contrário, será levada para outra pagina, no caso a home.

```
import React from 'react';
import { Navigate } from 'react-router';

function ProtectedRoute({ children }) {
  const login = true;
  return login ? children : <Navigate to='/' />;
}

export default ProtectedRoute;

```

Voltando para App.js, importei o ProtectedRoute, e fiz as seguintes alterações na rota de conta:

```
<Route
  path='conta'
  element={
    <ProtectedRoute>
      <Conta />
    </ProtectedRoute>
  }
/>
```

Como podemos ver, o ProtectedRoute envolve a Conta, ou seja, conta é passada como children para ProtectedRoute, assim será usada na verificação.

Por fim, faça os testes com a variavel login true e false, e entre na rota conta, e verá que quando login for true, voce acessará a rota ed conta, e quando for false, voce será levado para a home.

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

OBS: Textarea funciona da mesma forma do input. Ela tem além a propriedade "rows" que sao os totais de linhas, isso faz você dimensionar a altura da area em quantidade de linhas.

## Select <a name='select'></a>

O Select funciona da mesma forma do input, porem dentro da sua tag tem as opções a mserem selecionadas.
O value e o onChange ficam na tag select.

```
<select value={select} onChange={({ target }) => setSelect(target.value)}>
  <option value="notebook">Notebook</option>
  <option value="smartphone">Smartphone</option>
  <option value="tablet">Tablet</option>
</select>
```

Para ter um valor que nao pode ser escolhido e que serve so para indicar a ação do select, voce pode criar um "option" com a propriedade "disable" e com value vazio(""):

```
<option value="" disabled>
  Selecione
</option>
```

## Radio <a name='radio'></a>

Radio é um tipo de input de escolha única.
O que importa no radio é saber se ele está checado ou não.
Ele fica dentro do Label, então nao é necessario o htmlFor, nem o id no input.
Para um conjunto de Radio's você pode dar o mesmo name pra todos, assim ele atribuirá a marcação ao elemento clicado, se não, ele poderá marcar todos.
Exemplo: name='produto'.
A propriedade checked é usada somente quando não é usada a propriedade name e serve para verificar se radio está com o valor igual ao do estado, se sim, ele será marcado.

Exemplo com name:

```
<label>
  <input
    type="radio"
    name="produto"
    value="notebook"
    onChange={handleChange}
  />
  Notebook
</label>
```

Exemplo com checked:

```
<label>
  <input
    type="radio"
    checked={radio === 'notebook'}
    value="notebook"
    onChange={handleChange}
  />
  Notebook
</label>
```

## Checkbox <a name='checkbox'></a>

Checkbox é um input de unica ou multipla escolha.
Ele é melhor utilizado dentro do label, assim como Radio.
Ele deve conter um state onde verificará se está checado ou não.

Exemplo de checkbox de uma unica escolha:

```
<form>
  <label>
    <input type="checkbox" value="Termos" checked={termos} onChange={({target}) => setTermos(target.checked)}>
    Aceito os termos.
  </label>
</form>
```

No Checkbox de multipla escolha, é usado um array no estado para definir o check de todos os checkboxs.

```
const [produtos, setProdutos] = React.useState([])
```

Primeiro temos que criar uma função que será chamada ao clicar em todos os checkboxes:

```
function handleChange({target}){
  if(target.checked){
    setProdutos([...produtos, target.value])
  }else{
    setProdutos(produtos.filter((produto)=>{
      return produto !== target.value
    }))
  }

}
```

No checked tem-se que verificar se o valor esta incluido na array:

```
<label>
  <input type="checkbox" value="notebook" checked={produtos.includes('notebook')} onChange={handleClick}>
  Notebook
</label>
<label>
  <input type="checkbox" value="smartphone" checked={produtos.includes('smartphone')} onChange={handleClick}>
  smartphone
</label>
```

# Componentes Input <a name="componentes-input"></a>

Neste sessão iremos implementar um input que funcionará pros types relacionados ao text e number, ou seja, inclui password, email, etc.
Neste modelo terá esses componentes já criados.

Código do Input:

```
import React from 'react';

function Input({ id, type, label, value, setValue, required, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        required={required}
        {...props}
      />
    </>
  );
}

export default Input;

```

Código da página do formulário:

```
import React from 'react';
import Input from './Components/Form/Input';

function Form() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form style={{ padding: '5rem', fontSize: '1.5rem' }}>
      <Input type='text' id='nome' label='Nome' value={nome} setValue={setNome} />
      <Input
        type='email'
        id='email'
        label='Email'
        value={email}
        setValue={setEmail}
        required
      />
      <button>Enviar</button>
    </form>
  );
}

export default Form;
```

# Componentes Select <a name="componentes-select"></a>

Neste sessão iremos implementar um input select.
Neste modelo terá esses componentes já criados.

Código do Select:

```
import React from 'react';

function Select({ options, value, setValue, ...props }) {
  return (
    <>
      <select
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      >
        <option value='' disabled>
          Selecione
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;

```

Código da página do formulário:

```
import React from 'react';
import Input from './Components/Form/Input';
import Select from './Components/Form/Select';

function Form() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [produto, setProduto] = React.useState('');

  return (
    <form style={{ padding: '5rem', fontSize: '1.5rem' }}>
      <Input id='nome' label='Nome' value={nome} setValue={setNome} />
      <Input
        id='email'
        label='Email'
        value={email}
        setValue={setEmail}
        required
      />
      {/* Select */}
      <Select
        options={['smartphone', 'tablet', 'notebook']}
        value={produto}
        setValue={setProduto}
      />
      <button>Enviar</button>
    </form>
  );
}

export default Form;

```

# Componentes Radio <a name="componentes-radio"></a>

Neste sessão iremos implementar um input radio.
Neste modelo terá esses componentes já criados.

Código do Radio:

```
import React from 'react';

function Radio({ options, value, setValue, ...props }) {
  return (
    <>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              type='radio'
              value={option}
              checked={value === option}
              onChange={({ target }) => {
                setValue(target.value);
              }}
              {...props}
            />
            {option}
          </label>
        );
      })}
    </>
  );
}

export default Radio;


```

Código da página do formulário:

```
import React from 'react';
import Input from './Components/Form/Input';
import Radio from './Components/Form/Radio';
import Select from './Components/Form/Select';

function Form() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [produto, setProduto] = React.useState('');

  const [cor, setCor] = React.useState('');

  return (
    <form style={{ padding: '5rem', fontSize: '1.5rem' }}>
      <Input id='nome' label='Nome' value={nome} setValue={setNome} />
      <Input
        id='email'
        label='Email'
        value={email}
        setValue={setEmail}
        required
      />
      <Select
        options={['smartphone', 'tablet', 'notebook']}
        value={produto}
        setValue={setProduto}
      />
      <Radio
        options={['Azul', 'Vermelho', 'Amarelo']}
        value={cor}
        setValue={setCor}
      />
      <button>Enviar</button>
    </form>
  );
}

export default Form;


```

# Componentes Checkbox <a name="componentes-checkbox"></a>

Neste sessão iremos implementar um input checkbox.
Neste modelo terá esses componentes já criados.

Código do Checkbox:

```
import React from 'react';

function Checkbox({ options, value, setValue, ...props }) {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(
        value.filter((itemValue) => {
          return itemValue !== target.value;
        })
      );
    }
  }

  return (
    <>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              type='checkbox'
              value={option}
              onChange={handleChange}
              checked={value.includes(option)}
              {...props}
            />
            {option}
          </label>
        );
      })}
    </>
  );
}

export default Checkbox;

```

Código da página do formulário:

```
import React from 'react';
import Checkbox from './Components/Form/Checkbox';
import Input from './Components/Form/Input';
import Radio from './Components/Form/Radio';
import Select from './Components/Form/Select';

function Form() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [produto, setProduto] = React.useState('');

  const [cor, setCor] = React.useState('');

  const [linguagens, setLinguagens] = React.useState([]);

  return (
    <form style={{ padding: '5rem', fontSize: '1.5rem' }}>
      <Input
        type='text'
        id='nome'
        label='Nome'
        value={nome}
        setValue={setNome}
      />
      <Input
        type='email'
        id='email'
        label='Email'
        value={email}
        setValue={setEmail}
        required
      />
      <Select
        options={['smartphone', 'tablet', 'notebook']}
        value={produto}
        setValue={setProduto}
      />
      <Radio
        options={['Azul', 'Vermelho', 'Amarelo']}
        value={cor}
        setValue={setCor}
      />
      <Checkbox
        options={['JavaScript', 'PHP', 'Ruby']}
        value={linguagens}
        setValue={setLinguagens}
      />
      <button>Enviar</button>
    </form>
  );
}

export default Form;

```

# useForm <a name="useform"></a>

Custom hook para validação de formulários(Somente inputs). Neste caso faremos para validar cep, email e senha. Mais tipos de validações podem ser incrementadas no futuro.

Criamos uma pasta de hooks e dentro o useForm.js

No código implementamos o value e o error como estados:

```
const [value, setValue] = React.useState('');
const [error, setError] = React.useState(null);
```

a função de validação que usa regex(validate):

```
function validate(value) {
  if (type === false) return true;
  if (value.length === 0) {
    setError('Preencha um valor.');
    return false;
  } else if (types[type] && !types[type].regex.test(value)) {
    setError(types[type].message);
    return false;
  } else {
    setError(null);
    return true;
  }
}
```

o onChange para alterar o valor ao digitar:

```
function onChange({ target }) {
  if (error) validate(target.value);
  setValue(target.value);
}
```

fora da função definimos objeto para cada tipo de validação, com seu regex e sua mensagem de erro. Exemplo:

```
const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido.',
  },
  email: {
    regex:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido.',
  },
};
```

Como retorno colocamos as variaveis e funções que queremos ter acesso em outro lugar:

```
return {
  value,
  setValue,
  error,
  onChange,
  onBlur: () => {
    validate(value);
  },
  validate: () => validate(value),
};
```

Código final de useForm.js:

```
import React from 'react';

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido.',
  },
  email: {
    regex:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido.',
  },
};

function useForm(type) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => {
      validate(value);
    },
    validate: () => validate(value),
  };
}

export default useForm;

```

No componente Input.js, para evitar erros ao passar valores q nao sao propriedades do input por meio da props, removemos ela de dentro do input e especificamos cada elemento que desejamos utilizar nele, ficando assim:

```
import React from 'react';

function Input({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeHolder,
  error,
  required,
}) {
  console.log(error);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        required={required}
        placeholder={placeHolder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      {error && <p>{error}</p>}
    </>
  );
}

export default Input;

```

Em form.js criamos uma função handleSubmit que fará a verificação novamente dos dados ante de finalizar o processo do formulario ou alertar erro.

```
function handleSubmit(event) {
  event.preventDefault();
  if (
    cep.validate() &&
    email.validate() &&
    nome.validate() &&
    sobrenome.validate()
  ) {
    console.log('enviar'); // ação de envio, provavelmente um fetch
  } else {
    console.log(' nao enviar'); // ação de nao envio
  }
}
```

Para usarmos o Hook criado é a seguinte sintaxe:

```
const cep = useForm('cep');
const email = useForm('email');
const nome = useForm(); //quando é um text obrigatorio
const sobrenome = useForm(false); // quando nao é obrigatorio
```

Deixa vazio quando é um elemento obrigatorio e quando não é um elemento obrigatorio, coloque-o como false.
Os inputs ficarão assim:

```
<Input label='CEP' id='cep' type='text' placeholder='00000-000' {...cep} />
<Input label='Email' id='email' type='email' {...email} />
<Input label='Nome' id='nome' type='text' {...nome} />
<Input label='Sobrenome' id='sobrenome' type='text' {...sobrenome} />
```

Código final de Form.js:

```
import React from 'react';
import Checkbox from './Components/Form/Checkbox';
import Input from './Components/Form/Input';
import Radio from './Components/Form/Radio';
import Select from './Components/Form/Select';
import useForm from './Hooks/useForm';

function Form() {
  // const [nome, setNome] = React.useState('');
  // const [email, setEmail] = React.useState('');

  const [produto, setProduto] = React.useState('');

  const [cor, setCor] = React.useState('');

  const [linguagens, setLinguagens] = React.useState([]);

  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm(); //quando é um text obrigatorio
  const sobrenome = useForm(false); // quando nao é obrigatorio

  function handleSubmit(event) {
    event.preventDefault();
    if (
      cep.validate() &&
      email.validate() &&
      nome.validate() &&
      sobrenome.validate()
    ) {
      console.log('enviar'); // ação de envio, provavelmente um fetch
    } else {
      console.log(' nao enviar'); // ação de nao envio
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: '5rem',
        fontSize: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '50vw',
        margin: '0 auto',
      }}
    >
      {/* <Input
        type='text'
        id='nome'
        label='Nome'
        value={nome}
        setValue={setNome}
      />
      <Input
        type='email'
        id='email'
        label='Email'
        value={email}
        setValue={setEmail}
        required
      />
      <Select
        options={['smartphone', 'tablet', 'notebook']}
        value={produto}
        setValue={setProduto}
      />
      <Radio
        options={['Azul', 'Vermelho', 'Amarelo']}
        value={cor}
        setValue={setCor}
      />
      <Checkbox
        options={['JavaScript', 'PHP', 'Ruby']}
        value={linguagens}
        setValue={setLinguagens}
      /> */}

      {/* uso do useForm */}
      <Input
        label='CEP'
        id='cep'
        type='text'
        placeholder='00000-000'
        {...cep}
      />
      <Input label='Email' id='email' type='email' {...email} />
      <Input label='Nome' id='nome' type='text' {...nome} />
      <Input label='Sobrenome' id='sobrenome' type='text' {...sobrenome} />

      <button>Enviar</button>
    </form>
  );
}

export default Form;

```

- OBS: o onBlur é uma função que é chamada sempre que o se clica fora da caixa de input, ou seja assim q o usuario digitar no input A e passar para o input B, ja irá verificar o A.
- [Hooks](#hooks)
  - [useRef](#useref)
  - [useMemo](#usememo)
  - [useCallback](#usecallback)
  - [useContext](#usecontext)
  - [Custom Hooks](#customhooks)
  - [Regas](#regras)

# Hooks <a name="hooks"></a>

## useRef <a name="useref"></a>

Em construção...

## useMemo <a name="useMemo"></a>

Em construção...

## useCallback <a name="usecallback"></a>

Em construção...

## useContext <a name="usecontext"></a>

Em construção...

## Custom Hooks <a name="customhooks"></a>

Em construção...

## Regras <a name="regras"></a>

Em construção...

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
