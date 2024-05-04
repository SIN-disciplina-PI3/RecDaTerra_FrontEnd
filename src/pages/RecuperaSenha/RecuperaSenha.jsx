import { Link as RouterLink } from "react-router-dom"
import { Heading, Box, Container, Text, Link } from "@chakra-ui/react"
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftAddon, Button } from "@chakra-ui/react"

function RecuperarSenha() {
    return (
        <>
            <Container>
                <Box textAlign={'center'} m={'80px'}>
                    <Heading color={'white'} fontWeight='bold'>Redefinir Sua Senha</Heading>
                </Box>
                <Box textAlign={'center'} mb={'35px'}>
                    <Text fontWeight='regular' color={'white'}>Informe o código de verificação de 6 dígitos enviado para o email *****final@gmail.com</Text>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel color={'white'} fontWeight="regular">Código de Verificação</FormLabel>
                        <InputGroup>
                            <InputLeftAddon backgroundColor={'#D6CFC5'} fontWeight='light'>123</InputLeftAddon>
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
                    <Box textAlign={'center'} mt={'40px'}>
                        <Link as={RouterLink} to="/redefinirsenha">
                            <Button
                                w={'100%'}
                                borderRadius={'20px'}
                                color={'black'}
                                fontWeight='regular'
                                backgroundColor={'#98FF68'}
                                boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                                transition='all 0.3s ease-in-out'
                            >Próximo</Button>
                        </Link>
                    </Box>
            </Container>
        </>
    )
}

export default RecuperarSenha;