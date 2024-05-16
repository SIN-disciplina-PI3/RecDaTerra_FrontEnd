import { Container, Text, Box, Button, Heading } from '@chakra-ui/react'
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function Pag404() {
    const navigate = useNavigate();

    const goHome = useCallback(() => {
        navigate('/');
    }, [])

    return (
        <>
            <Container textAlign={'center'}>
                <Box mt={'200px'}>
                    <Heading color={'white'} m={'20px'}>
                        Erro. Página não encontrada.
                    </Heading>
                    <Text color={'white'} m={'10px'}>
                        Clique no botão abaixo para voltar a página inicial ou na seta acima, direcionando você a página anterior.
                    </Text>
                </Box>
                <Box mb={'210px'}>
                    <Button onClick={goHome} color={'black'} backgroundColor={'#98FF68'} m={'20px'}>
                        Voltar Home
                    </Button>
                </Box>
            </Container>
        </>
    )
}

export default Pag404;