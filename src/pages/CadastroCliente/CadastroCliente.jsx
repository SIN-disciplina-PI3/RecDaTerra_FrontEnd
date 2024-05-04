/* eslint-disable react/no-children-prop */
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Box, FormControl, FormLabel, Input, InputGroup, InputLeftElement, InputRightElement, Button} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import VetorCliente from '../../img/VetorCliente.svg';
import { CgProfile } from "react-icons/cg";


function CadastroCliente() {
  const [show, setShow] = useState(false);
  

  return (
    <div className='container'>
      <Flex justify="center" align="center" mt={100}>
       
          <Box className='left-panel' mr={8}>
            <img src={VetorCliente} alt="Vetor Produtor" />
            </Box>
            

          <Box className='right-panel'>
            <Flex direction="column" align="stretch" maxW="600px">
                <div className="title">
              <Box color={'white'} mb={4} textAlign="center">
                <h1>Cadastro como Cliente</h1>
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
                _hover={{ 
                  backgroundColor: '#76E1FF', // Estilo de hover para a cor de fundo
                }} 
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

export default CadastroCliente;