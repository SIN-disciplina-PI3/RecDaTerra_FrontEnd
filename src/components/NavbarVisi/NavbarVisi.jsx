import { Link as RouterLink } from "react-router-dom"
import { Flex, Box, Button, Link, Image } from "@chakra-ui/react";
import ImgNav from '../../img/Navbar.svg'

function NavbarVisi() {
    return (
        <>  
            <Flex w={"100%"} h={"150px"} p={'10'} backgroundImage={`url(${ImgNav})`} alignItems={'center'} justifyContent={'flex-end'}>
                <Box>
                    <Link as={RouterLink} to="/login">
                        <Button
                            w={'9em'}
                            borderRadius={'20px'}
                            color={'#7ED957'}
                            fontWeight='regular'
                            backgroundColor={'#76603F'}
                            boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                            transition='all 0.3s ease-in-out'
                        >Login</Button>
                    </Link>
                </Box>
            </Flex>
        </>
    )
}

export default NavbarVisi;