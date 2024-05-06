import { Link as RouterLink } from "react-router-dom"
import { Heading, Box, Container, Text, Link } from "@chakra-ui/react"
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react"
import { EmailIcon } from '@chakra-ui/icons'

function EsqueciSenha() {
    return (
        <>
            <Container>
                <Box textAlign={'center'} m={'50px'}>
                    <Heading color={'white'} fontWeight='bold'>Redefinir Sua Senha</Heading>
                </Box>
                <Box textAlign={'center'} mb={'35px'}>
                    <Text fontWeight='regular' color={'white'}>Informe o Email cadastrado da sua Conta para recuperar sua senha</Text>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel color={'white'} fontWeight="regular">E-mail</FormLabel>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <EmailIcon color='#76603F' />
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
                    </FormControl>
                </Box>
                    <Box textAlign={'center'} mt={'40px'} mb={'40px'}>
                        <Link as={RouterLink} to="/recuperasenha">
                            <Button
                                w={'100%'}
                                borderRadius={'20px'}
                                color={'black'}
                                fontWeight='regular'
                                backgroundColor={'#98FF68'}
                                boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                                transition='all 0.3s ease-in-out'
                            >Entrar</Button>
                        </Link>
                    </Box>
            </Container>
        </>
    )
}

export default EsqueciSenha;