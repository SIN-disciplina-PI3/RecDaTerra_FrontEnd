import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Flex, Box, Link, Text } from "@chakra-ui/react";
import { FaRegCopyright } from "react-icons/fa";
import logo from "../../img/logoPreta.svg";

function Footer() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <footer>
            <Flex w={"100%"} h={"150px"} p={'10'} backgroundColor={'#7ED957'} alignItems={'center'} justifyContent={'space-around'}>
                <Box>
                    <img src={logo} alt="" style={{ width: isSmallScreen ? '120px' : '256px', marginLeft: isSmallScreen ? '-20px' : '20px' }} />
                </Box>
                <Box ml={isSmallScreen ? '0px' : '30px'}>
                    {isSmallScreen ? (
                        <Flex flexDirection="column">
                            <Link as={RouterLink} to="/produtos" style={{ marginBottom: '10px', fontSize: '12px' }}>Produtos</Link>
                            <Link as={RouterLink} to="/sobre" style={{ marginBottom: '10px', fontSize: '12px' }}>Sobre</Link>
                            <Link as={RouterLink} to="/conscientizaterra" style={{ marginBottom: '10px', fontSize: '12px' }}>ConscientizATerra</Link>
                            <Link as={RouterLink} to="/contato" style={{ marginBottom: '10px', fontSize: '12px' }}>Contato</Link>
                        </Flex>
                    ) : (
                        <>
                            <Link as={RouterLink} to="/produtos" style={{ marginRight: '20px', fontSize: '24px' }}>Produtos</Link>
                            <Link as={RouterLink} to="/sobre" style={{ marginRight: '20px', fontSize: '24px' }}>Sobre</Link>
                            <Link as={RouterLink} to="/conscientizaterra" style={{ marginRight: '20px', fontSize: '24px' }}>ConscientizATerra</Link>
                            <Link as={RouterLink} to="/contato" style={{ marginRight: '20px', fontSize: '24px' }}>Contato</Link>
                        </>
                    )}
                </Box>
                <Box display="flex" alignItems="center">
                <Box as={FaRegCopyright} ml={isSmallScreen ? '30px' : '0'}></Box>
                    <Text pl={'10px'} pr={'10px'} fontSize={isSmallScreen ? '14px' : 'inherit'}>
                        <h1>2024 Todos os direitos reservados</h1>
                    </Text>
                </Box>
            </Flex>
        </footer>
    )
}

export default Footer;