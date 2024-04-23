import { Link as RouterLink } from "react-router-dom"
import { Box, Container, Link } from "@chakra-ui/react"
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Input, InputGroup, Button } from "@chakra-ui/react"
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";

function RedefinirSenha() {
    return (
        <div className="container">
            <NavbarLogin />
            <Container>
                <Box textAlign={'center'} m={'80px'}>
                <div className="title">
                        <h1>Redefinir Senha</h1>
                    </div>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel color={'white'} mt={'8px'} fontWeight='regular'>Digite uma nova senha</FormLabel>
                        <InputGroup>
                            <Input
                                variant='outline'
                                type={'password'}
                                backgroundColor={'#D6CFC5'}
                                fontWeight='light'
                                border={'none'}
                                boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                            />
                        </InputGroup>
                        <FormLabel color={'white'} mt={'8px'} fontWeight='regular'>Confirme a nova senha</FormLabel>
                        <InputGroup>
                            <Input
                                variant='outline'
                                type={'password'}
                                backgroundColor={'#D6CFC5'}
                                fontWeight='light'
                                border={'none'}
                                boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                            />
                        </InputGroup>
                    </FormControl>
                </Box>
                <Box textAlign={'center'} mt={'40px'}>
                    <Link as={RouterLink} to="/">
                        <Button
                            w={'100%'}
                            borderRadius={'20px'}
                            color={'black'}
                            fontWeight='regular'
                            backgroundColor={'#98FF68'}
                            boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                            transition='all 0.3s ease-in-out'
                        >Redefinir Senha</Button>
                    </Link>
                </Box>
            </Container>
        </div>
    )
}

export default RedefinirSenha;