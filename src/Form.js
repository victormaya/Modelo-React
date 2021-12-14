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
