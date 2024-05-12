import {Container, Flex, Box, Heading, Text, Image, Button} from '@chakra-ui/react'
import imgperfilCli from '../../img/imgperfilCli.svg'
import insta from '../../img/instagram.svg'

function VerCliente() {
    return (
        <>
            <Container mt={'50px'} mb={'50px'}>
                <Flex justifyContent={'space-around'} flexDirection={'column'}>
                    <Box display={'flex'} justifyContent={'center'} mb={'15px'}>
                        <Image src={imgperfilCli} />
                    </Box>
                    <Box textAlign={'center'} mb={'15px'}>
                        <Text color={'white'}>Cliente</Text>
                        <Heading color={'white'}>Chico Moedas</Heading>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} mb={'15px'}>
                        <Button borderRadius={'15px'} backgroundColor={'#7ED957'}>Converse com Chico Moedas</Button>
                        <Image src={insta} ml={'35px'} cursor={'pointer'} transition={'all 0.3s ease-in-out'} _hover={{transform: 'scale(1.2)'}} />
                    </Box>
                    <Box>
                        <Text color={'white'} ml={'15px'}>Bio</Text>
                        <Box p={'20px'} pb={'50px'} backgroundColor={'#FFFFFF'} opacity={'70%'} border={'1px solid black'} borderRadius={'15px'}>
                            <Text>Aquariano Nato procurando os melhores produtos sustentáveis no Grande Recife</Text>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </>
    )
}

export default VerCliente;