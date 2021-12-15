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
