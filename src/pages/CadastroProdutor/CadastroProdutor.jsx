import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Box, FormControl, FormLabel, Input, Select, InputGroup, InputLeftElement, InputRightElement, Button} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import VetorProdutor from '../../img/VetorProdutor.svg';
import { CgProfile } from "react-icons/cg";
import { HiMiniIdentification } from "react-icons/hi2";

const identificacoes = [
  { key: 'f', text: 'CPF', value: 'cpf' },
  { key: 'j', text: 'CNPJ', value: 'cnpj' },
];

function CadastroProdutor() {
  const [show, setShow] = useState(false);
  const [identificacao, setIdentificacao] = useState('');
  const [documento, setDocumento] = useState('');

  const handleIdentificacaoChange = (event) => {
    setIdentificacao(event.target.value);
    setDocumento('');
  };

  const handleDocumentoChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, '');

    if (identificacao === 'cpf') {
      value = value.slice(0, 11);
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else if (identificacao === 'cnpj') {
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
      <Flex justify="center" align="center" mt = { 100}>
       
          <Box className='left-panel' mr={8}>
            <img src={VetorProdutor} alt="Vetor Produtor" />
            </Box>
            

          <Box className='right-panel'>
            <Flex direction="column" align="stretch" maxW="600px">
                <div className="title">
              <Box mb={4} textAlign="center">

                <h1 
                style={{color: "white"}}>Cadastro como Produtor</h1>

              </Box>
                </div>

              <FormControl isRequired>
                <FormLabel color="white" fontWeight="regular">Nome</FormLabel>
                <InputGroup mb={4}>
                  <InputLeftElement pointerEvents="none" children={<CgProfile />} />
                  <Input 
                    variant='outline'
                    type='text'
                    placeholder='Digite o seu nome ou o nome do seu empreendimento...'
                    backgroundColor='#D6CFC5'
                    fontWeight='light'
                    border='none'
                    opacity='0.7'
                    boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="white" fontWeight="regular">E-mail</FormLabel>
                <InputGroup mb={4}>
                  <InputLeftElement pointerEvents='none' children={<EmailIcon />} />
                  <Input 
                    variant='outline'
                    type='email'
                    placeholder='Digite o seu e-mail...'
                    backgroundColor='#D6CFC5'
                    fontWeight='light'
                    border='none'
                    opacity='0.7'
                    boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="white" fontWeight="regular">Identificação (CPF ou CNPJ)</FormLabel>
                <Select
                  mb={4}
                  placeholder='Selecione uma opção'
                  value={identificacao}
                  onChange={handleIdentificacaoChange}
                  backgroundColor='#D6CFC5'
                  fontWeight='light'
                  border='none'
                  opacity={0.5}
                  boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                  color='black'
                  _focus={{ outline: 'none' }} // Removendo a borda de foco
                >
                  {identificacoes.map((option) => (
                    <option
                      key={option.key}
                      value={option.value}
                      className={option.value === 'cpf' || option.value === 'cnpj' ? 'custom-option' : ''}
                    >
                      {option.text}
                    </option>
                  ))}
                </Select>
              </FormControl>

              {identificacao && (
                <FormControl isRequired>
                  <FormLabel color="black" fontWeight="regular">{identificacao.toUpperCase()}</FormLabel>
                  <InputGroup mb={4}>
                    <InputLeftElement pointerEvents='none' children={<HiMiniIdentification />} />
                    <Input
                      variant='outline'
                      placeholder={`Insira seu ${identificacao.toUpperCase()}`}
                      value={documento}
                      onChange={handleDocumentoChange}
                      backgroundColor='white'
                      fontWeight='light'
                      color='black'
                      border='none'
                      opacity='0.5'
                      boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                    />
                  </InputGroup>
                </FormControl>
              )}

              <FormControl isRequired>
                <FormLabel color="white" fontWeight="regular">Senha</FormLabel>
                <InputGroup mb={4}>
                  <InputLeftElement pointerEvents='none' children={<LockIcon />} />
                  <Input
                    type={show ? 'text' : 'password'}
                    placeholder='Digite a senha'
                    variant='outline'
                    backgroundColor='#D6CFC5'
                    fontWeight='light'
                    border='none'
                    opacity='0.7'
                    boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button 
                as={RouterLink} 
                to="/home" 
                type='submit'
                w='100%'
                borderRadius='20px'
                color='black'
                fontWeight='bold'
                backgroundColor='#98FF68'
                boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                transition='all 0.3s ease-in-out'
              >
                Cadastrar
              </Button>
            </Flex>
          </Box>
      </Flex>
    </div>
  );
}


export default CadastroProdutor;