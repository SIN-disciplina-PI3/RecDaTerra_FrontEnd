/* eslint-disable react/no-children-prop */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Box, FormControl, FormLabel, Input, InputGroup, InputLeftElement, InputRightElement, Button, Spinner } from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import VetorCliente from '../../img/VetorCliente.svg';
import { CgProfile } from "react-icons/cg";

function CadastroCliente() {
  const [show, setShow] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const clienteData = {
      nomeUsuario: nome,
      email: email,
      senha: senha,
    };

    try {
      const response = await fetch('http://localhost:8080/api/clientes/criar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clienteData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('clienteId', data.id);
        console.log('Cliente cadastrado com sucesso!', data);
        navigate("/home");
      } else {
        console.error('Erro ao cadastrar cliente:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container'>
      <Flex justify="center" align="center" mt={100} flexDirection={{ base: 'column', md: 'row' }}>
        <Box className='left-panel' mr={8}>
          <img src={VetorCliente} alt="Vetor Cliente" />
        </Box>

        <Box className='right-panel' mt={[4, 0]} ml={[0, 4]} mr={[0, 8]} mb={[4, 0]}>
          <Flex direction="column" align="stretch" maxW="600px">
            <div className="title">
              <Box color={'white'} mb={4} textAlign="center">
                <h1>Cadastro como Cliente</h1>
              </Box>
            </div>

            <form onSubmit={handleSubmit}>
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
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>

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
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
                type='submit'
                w='100%'
                borderRadius='20px'
                color='black'
                fontWeight='bold'
                backgroundColor='#98FF68'
                boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                transition='all 0.3s ease-in-out'
                isLoading={isLoading}
                spinner={<Spinner size="sm" />}
              >
                Cadastrar
              </Button>
            </form>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

export default CadastroCliente;
