import { useState } from 'react';
import { 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  Select, 
  VStack, 
  InputRightElement, 
  InputGroup, 
  FormHelperText, 
  FormErrorMessage,
  InputLeftElement

 } from '@chakra-ui/react';

import './CadastroProdutor.css';

/* Importações de ícones*/
import Produtor from '/src/img/VetorProdutor.svg';
import mailIcon from '/src/img/IconEmail.svg'
import userIcon from '/src/img/IconUser.svg'
import lockIcon from '/src/img/IconLock.svg'
import idIcon from '/src/img/IconID.svg'
import visibleIcon from '/src/img/IconInvisible.svg';
import invisibleIcon from '/src/img/IconVisible.svg';

const identificacoes = [
  { key: 'f', text: 'CPF', value: 'cpf' },
  { key: 'j', text: 'CNPJ', value: 'cnpj' },
];

function CadastroProdutor() {
  const [input, setInput] = useState('')
  const isError = input === ''
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [identificacao, setIdentificacao] = useState('');
  const [documento, setDocumento] = useState('');
  const [nome, setNome] = useState(''); // Estado separado para o nome
  const handleNomeChange = (e) => setNome(e.target.value);

  const [email, setEmail] = useState(''); // Estado separado para o e-mail
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleIdentificacaoChange = (event) => {
    setIdentificacao(event.target.value);
    // Limpar o campo do documento quando o usuário mudar a identificação
    setDocumento('');
  };

  const handleDocumentoChange = (event) => {
    let value = event.target.value;
    // Remove todos os caracteres que não são dígitos
    value = value.replace(/\D/g, '');

    // Verifica o tipo de identificação
    if (identificacao === 'cpf') {
      // Formatação dinâmica do CPF
      value = value.slice(0, 11);
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else if (identificacao === 'cnpj') {
      // Formatação dinâmica do CNPJ
      value = value.slice(0, 15);
      value = value.replace(/(\d{2})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1/$2');
      value = value.replace(/(\d{4})(\d)/, '$1-$2');
    }

    setDocumento(value);
  };

  return (
    
    <div className='container'>

      <div className='left-panel'>
        <img className='img-produtor' src={Produtor} alt='imagem de produtor' />
      </div>

      <div className='right panel'>
        <VStack spacing={4} align="stretch" maxW="600px" mx="auto">

          <FormControl className='formcontrol' isRequired>
            <FormLabel className='formlabel'>Nome</FormLabel>
            <InputGroup>
              <InputLeftElement className='input-left' pointerEvents="none" children={<img src={userIcon} alt="ícone de perfil" />} />
              <Input className='input' type='text' value={nome} onChange={handleNomeChange} placeholder='Escreva seu nome ou o nome do seu empreendimento...' />
            </InputGroup>
          </FormControl>

          <FormControl className='formcontrol' isRequired>
            <FormLabel className='formlabel'>Email</FormLabel>
            <InputGroup>
              <InputLeftElement className='input-left' pointerEvents='none' children={<img src={mailIcon} alt='icone de email' />} /> 
              <Input className='input' type='email' value={email} onChange={handleEmailChange} placeholder='@exemplo@gmail.com' />
            </InputGroup>
            {!isError ? (
              <FormHelperText>
                Escreva o seu melhor email!😁
              </FormHelperText>
            ) : (
              <FormErrorMessage>É necessário preencher este campo.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl className='formcontrol' isRequired>
            <FormLabel className='formlabel'>Identificação (CPF ou CNPJ)</FormLabel>
            <Select
              className='select-input'
              placeholder='Selecione uma opção'
              value={identificacao}
              onChange={handleIdentificacaoChange}
            >
              {identificacoes.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.text}
                </option>
              ))}
            </Select>
          </FormControl>

          {identificacao && (
            <FormControl className='formcontrol' isRequired>
              <FormLabel className='formlabel'>{identificacao.toUpperCase()}</FormLabel>
              <InputGroup>
                <InputLeftElement className='input-left' pointerEvents='none' children={<img src={idIcon} alt='icone de id' />} /> 
                <Input
                  className='input'
                  placeholder={`Insira seu ${identificacao.toUpperCase()}`}
                  value={documento}
                  onChange={handleDocumentoChange}
                />
              </InputGroup>
            </FormControl>
          )}

          <FormControl className='formcontrol' isRequired>
            <FormLabel className='formlabel'>Senha</FormLabel>
            <InputGroup className='input-group'>
              <InputLeftElement className='input-left' pointerEvents='none' children={<img src={lockIcon} alt='icone de cadeado' />} /> 
              <Input
                className='input'
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Digite a senha'
              />
              <InputRightElement width='4.5rem'>
                <Button className='mostrar-button' h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? <img src={invisibleIcon} alt='icone senha' /> : <img src={visibleIcon} alt='icone senha' />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button
            className='cadastrar-button'
            type='submit'
            colorScheme='blue'
            mt={4}
          >
            Cadastrar
          </Button>
        </VStack>
      </div>

    </div>
  );
}

export default CadastroProdutor;