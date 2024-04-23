import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Box, Container, Text, Link } from "@chakra-ui/react";
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement, InputLeftElement, Checkbox, Button } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, EmailIcon, LockIcon } from '@chakra-ui/icons';
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";

function Login() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <div className='container'>
            <NavbarLogin />
            <Container maxW="xl">
                <Box textAlign={'center'} m={'80px'}>
                    <div className="title">
                        <h1>Login</h1>
                    </div>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel color={'white'} fontWeight="regular">E-mail</FormLabel>
                        <InputGroup mb={8}>
                            <InputLeftElement pointerEvents='none' backgroundColor="#D6CFC5">
                                <EmailIcon color='#76603F' background='transparent' /> {/* Definindo background como transparent */}
                            </InputLeftElement>
                            <Input 
                                variant='outline'
                                type={'email'}
                                placeholder={'Digite o seu e-mail...'}
                                backgroundColor={'#D6CFC5'}
                                fontWeight='light'
                                border={'none'}
                                boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                            />
                        </InputGroup>
                        <FormLabel color={'white'} fontWeight="regular">Senha</FormLabel>
                        <InputGroup mb={8}>
                            <InputLeftElement pointerEvents='none' backgroundColor="#D6CFC5">
                                <LockIcon color='#76603F' background='transparent' /> {/* Definindo background como transparent */}
                            </InputLeftElement>
                            <Input
                                variant='outline'
                                type={show ? 'text' : 'password'}
                                placeholder='Digite sua senha...'
                                backgroundColor={'#D6CFC5'}
                                fontWeight='light'
                                border={'none'}
                                boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                            />
                            <InputRightElement width='4.5rem' backgroundColor="#D6CFC5">
                                <Button 
                                    h='1.5rem' 
                                    size='xs' 
                                    onClick={handleClick} 
                                    boxShadow='3px 3px 7px rgba(0, 0, 0, 0.1)' 
                                    backgroundColor="transparent"
                                >
                                    {show ? <ViewIcon color='#76603F' fontSize='2xl' background='transparent' /> : <ViewOffIcon color='#76603F' fontSize='2xl' background='transparent' />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Box textAlign={'center'} display={'flex'} justifyContent={'space-between'} mt={'20px'}>
                        <Checkbox fontWeight='regular' color={'white'}>Mantenha-se Conectado</Checkbox>
                        <Link as={RouterLink} to="/esquecisenha" fontWeight='regular' color={'white'}>Esqueceu a senha?</Link>
                    </Box>
                    <Box textAlign={'center'} mt={'30px'} mb={'30px'}>
                        <Button
                             _hover={{ 
                                backgroundColor: '#76E1FF', // Estilo de hover para a cor de fundo
                            }} 
                            w={'100%'}
                            borderRadius={'20px'}
                            color={'black'}
                            fontWeight='bold'
                            backgroundColor={'#98FF68'}
                            boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                            transition='all 0.3s ease-in-out'
                        >Entrar</Button>
                    </Box>
                    <Flex>
                        <Text fontWeight='regular' color={'white'} mr={'15px'}>Não tem uma conta?</Text>
                        <Text fontWeight='regular' color={'#98FF68'} textDecoration={'underline'}><a href="#">Cadastre-se</a></Text>
                    </Flex>
                </Box>
            </Container>
        </div>
    );
}

export default Login;
