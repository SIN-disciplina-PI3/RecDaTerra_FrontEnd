import { Link as RouterLink } from "react-router-dom"
import { Flex, Box, Link, Text } from "@chakra-ui/react"
import { FaRegCopyright } from "react-icons/fa";

function NavbarInicial() {
    return (
        <footer style={{ position: 'relative', bottom: 0, width: '100%', zIndex: 1000 }}>
            <Flex w={"100%"} h={"150px"} p={'10'} backgroundColor={'#7ED957'} alignItems={'center'} justifyContent={'space-around'}>
                <Box>
                    {/* <img src={logo} alt=""></img> */}
                </Box>
                <Box display={'flex'} m={'20px'}>
                    <Text fontSize='xl'>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="/sobre">Sobre</Link>
                    </Text>
                    <Text fontSize='xl'>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="/conscientizaterra">ConscientizATerra</Link>
                    </Text>
                    <Text fontSize='xl'>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="/contato">Contato</Link>
                    </Text>
                </Box>
                <Box display={'flex'} m={'20px'}>
                    <Box as={FaRegCopyright}></Box>
                    <Text pl={'10px'} pr={'10px'}>
                        <h1>2024</h1>
                    </Text>
                </Box>
            </Flex>
        </footer>
    )
}

export default NavbarInicial;
