import './Footer.css'
import { Link as RouterLink } from "react-router-dom";
import { Flex, Box, Link, Text } from "@chakra-ui/react";
import { FaRegCopyright } from "react-icons/fa";
import logo from "../../img/logoPreta.svg";

function Footer() {
    return (
        <footer >
            <Flex w={"100%"} h={"150px"} p={'10'} backgroundColor={'#7ED957'} alignItems={'center'} justifyContent={'space-around'}>
                <Box>
                    <img src={logo} alt=""></img> 
                </Box>
                <Box display={'flex'} m={'20px'}>
                    <Box as={FaRegCopyright}></Box>
                    
                    <Text pl={'10px'} pr={'10px'}>
                        <h1>2024  Todos os direitos reservados</h1>
                    </Text>
                    
                </Box>
            </Flex>
        </footer>
    )
}

export default Footer;
