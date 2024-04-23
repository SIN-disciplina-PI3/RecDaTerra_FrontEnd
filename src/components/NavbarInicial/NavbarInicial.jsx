import { Link as RouterLink } from "react-router-dom"
import { Flex, Box, Link, InputGroup, Input, InputRightElement, IconButton, Text } from "@chakra-ui/react"
import { BellIcon, ChatIcon, AtSignIcon, SearchIcon } from "@chakra-ui/icons"
import ImgNavInicial from '/src/img/NavbarInicial.svg';

function NavbarInicial() {
    return (
        <div className='container'>
            <Flex w={"100%"} h={"150px"} p={'10'} backgroundImage={`url(${ImgNavInicial})`} alignItems={'center'} justifyContent={'space-around'}>
                <Box w={'466px'} m={'20px'}>
                    <InputGroup alignItems={'center'}>
                        <Input
                            variant='outline'
                            type='search'
                            placeholder='Pesquise Produtos, Clientes, Produtores...'
                            backgroundColor={'#D6CFC5'}
                            fontWeight='light'
                            border={'none'}
                            borderRadius={'30px'}
                            boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                        />
                        <InputRightElement backgroundColor={'#D6CFC5'}>
                        <Link as={RouterLink} to="#">
                                <IconButton variant="unstyled" borderRadius={'30px'}>
                                    <SearchIcon color='black' boxSize={5}/>
                                </IconButton>
                            </Link>
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Box display={'flex'} m={'20px'}>
                    <Text fontSize='xl'>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="#">Produtos</Link>
                    </Text>
                    <Text fontSize='xl'>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="#">Sobre</Link>
                    </Text>
                    <Text fontSize='xl'>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="#">ConsientizATerra</Link>
                    </Text>
                </Box>
                <Box m={'20px'}>
                    <Link pl={'10px'} pr={'10px'} as={RouterLink} to="#">
                        <BellIcon color='black' boxSize={9} borderRadius={'25%'} transition={'all 0.3s ease-in-out'}
                        _hover={{ backgroundColor: 'white', borderRadius: '25%' }} />
                    </Link>
                    <Link pl={'10px'} pr={'10px'} as={RouterLink} to="#">
                        <ChatIcon color='black' boxSize={8} />
                    </Link>
                    <Link pl={'10px'} pr={'10px'} as={RouterLink} to="#">
                        <AtSignIcon color='black' boxSize={9} />
                    </Link>
                </Box>
            </Flex>
        </div>
    )
}

export default NavbarInicial;