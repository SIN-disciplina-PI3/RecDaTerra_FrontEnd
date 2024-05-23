import { Link as RouterLink } from "react-router-dom"
import { Flex, Box, Link, Text, Image } from "@chakra-ui/react"
import { FaRegCopyright } from "react-icons/fa"
import logo from '../../img/logoPreta.svg'

function Footer() {
    return (
        <Flex w={"100%"} h={"100%"} p={'40px'} alignItems={'center'} backgroundColor={'#7ED957'} justifyContent={'space-around'} flexDirection={['column', 'column', 'column', 'column', 'row']} mt={'40px'}>
            <Box p={'10px'}>
                <Image src={logo} alt="" />
            </Box>
            <Box p={'10px'} display={'flex'} textAlign={['center', 'none']} flexDirection={['column', 'column', 'row']}>
                <Link as={RouterLink} to="/produtos" style={{ marginRight: '20px'}} fontSize={['18px', '24px']}>Produtos</Link>
                <Link as={RouterLink} to="/sobre" style={{ marginRight: '20px'}} fontSize={['18px', '24px']}>Sobre</Link>
                <Link as={RouterLink} to="/conscientizaterra" style={{ marginRight: '20px'}} fontSize={['18px', '24px']}>ConscientizATerra</Link>
                <Link as={RouterLink} to="/contato" style={{ marginRight: '20px'}} fontSize={['18px', '24px']}>Contato</Link>
            </Box>
            <Box p={'10px'} display={'flex'} alignItems={'center'} textAlign={['center', 'none']}>
                <Box as={FaRegCopyright} textAlign={['center', 'none']}></Box>
                <Text pl={'10px'} pr={'10px'} fontSize={'14px'}>
                    <h1>2024 Todos os direitos reservados</h1>
                </Text>
            </Box>
        </Flex>
    )
}

export default Footer;