import { Link as RouterLink } from "react-router-dom"
import { Flex, Box, Link, Text } from "@chakra-ui/react"
import { BellIcon, ChatIcon} from "@chakra-ui/icons"
import { Icon } from '@chakra-ui/react'
import { MdPermIdentity } from "react-icons/md";
import ImgNavInicial from '/src/img/NavbarInicial.svg';
import LogoBranca from '../../img/logorecdaterra.svg'

function NavbarSemPesquisa() {
    return (
        <>
            <Flex w={"100%"} h={"150px"} p={'10'} backgroundImage={`url(${ImgNavInicial})`} alignItems={'center'} justifyContent={'space-around'}>
                <Box>
                    <Link as={RouterLink} to="/home">
                        <img src={LogoBranca} alt="Logo"></img>
                    </Link>
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

export default NavbarSemPesquisa;
