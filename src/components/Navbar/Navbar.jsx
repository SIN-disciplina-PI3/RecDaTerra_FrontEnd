import { Link as RouterLink } from "react-router-dom"
import { Flex, Box, Link, InputGroup, Input, InputRightElement, IconButton, Text } from "@chakra-ui/react"
import { BellIcon, ChatIcon, SearchIcon } from "@chakra-ui/icons"
import { Icon } from '@chakra-ui/react'
import { MdPermIdentity } from "react-icons/md";
import ImgNavInicial from '/src/img/NavbarInicial.svg';
import LogoBranca from '../../img/logorecdaterra.svg'

function Navbar() {
    return (
        <>
            <Flex w={"100%"} h={"150px"} p={'10'} backgroundImage={`url(${ImgNavInicial})`} alignItems={'center'} justifyContent={'space-around'}>
                <Box>
                    <Link as={RouterLink} to="/home">
                        <img src={LogoBranca} alt="Logo"></img>
                    </Link>
                </Box>
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
                <Box display={'flex'} m={'20px'} color={'white'}>
                    <Text fontSize='xl'>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="/produtos">Produtos</Link>
                    </Text>
                    <Text fontSize='xl'>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="/sobre">Sobre</Link>
                    </Text>
                    <Text fontSize='xl'>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="/conscientizaterra">ConsientizATerra</Link>
                    </Text>
                </Box>
                <Box m={'20px'} display="flex" alignItems="center">
                    <Link pl={'10px'} pr={'10px'} as={RouterLink} to="#">
                        <BellIcon color='white' boxSize={9} borderRadius={'25%'} transition={'all 0.3s ease-in-out'}/>
                    </Link>
                    <Link pl={'10px'} pr={'10px'} as={RouterLink} to="#">
                        <ChatIcon color='white' boxSize={8} />
                    </Link>
                    <Link pl={'10px'} pr={'10px'} as={RouterLink} to="#">
                        <Icon as={MdPermIdentity} color='white' boxSize={9} />
                    </Link>
                </Box>
            </Flex>
        </>
    )
}

export default Navbar;
