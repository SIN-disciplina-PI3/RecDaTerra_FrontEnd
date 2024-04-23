import { Flex } from "@chakra-ui/react"
import ImgNavLogin from '/src/img/NavbarLogin.svg';

function NavbarLogin() {
    return (
        <>
            <Flex w={"100%"} h={"150px"}  p={'10'} backgroundImage={`url(${ImgNavLogin})`} alignItems={'center'}>
            </Flex>
        </>
    )
}

export default NavbarLogin;