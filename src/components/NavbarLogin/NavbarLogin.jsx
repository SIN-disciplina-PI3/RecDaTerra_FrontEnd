import { Link as RouterLink } from "react-router-dom"
import { Flex, Box, Image, Link } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons";
import LogoRec from '../../img/LogoRec.svg'
import ImgNav from '../../img/Navbar.svg'

function NavbarLogin() {
    return (
        <>
            <Flex w={"100%"} h={"150px"} p={'10'} backgroundImage={`url(${ImgNav})`} alignItems={'center'}>
                <Box>
                    <Link as={RouterLink} to="/" alignItems='center'>
                        <ArrowBackIcon color='black' boxSize={[7 ,9]} />
                    </Link>
                </Box>
                <Box flex='1' textAlign='center'>
                    <Image boxSize={["200px" ,"300px"]} src={LogoRec} alt='Logo RecDaTerra' mx='auto' />
                </Box>
            </Flex>
        </>
    )
}

export default NavbarLogin;