import { Link as RouterLink } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Flex, Box, Link, InputGroup, Input, InputRightElement, IconButton, Text, Image } from "@chakra-ui/react"
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure } from "@chakra-ui/react";
import { BellIcon, ChatIcon, AtSignIcon, SearchIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { Icon } from '@chakra-ui/react'
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import ImgNav from '../../img/Navbar.svg'
import LogoRec from '../../img/LogoRec.svg'

function Navbar({ openNotification }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1200);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Flex w={"auto"} h={"150px"} p={'10'} backgroundImage={`url(${ImgNav})`} alignItems={'center'} justifyContent={'space-around'}>

                <Link as={RouterLink} to="/home">
                    <Image boxSize={["95px", "130px", "180px"]} src={LogoRec} _hover={{ transform: 'scale(1.1)' }}/>
                </Link>

                <Box w={[300, 400, 500]} m={'20px'}>
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
                        <InputRightElement>
                            <Link as={RouterLink} to="#">
                                <IconButton background={'none'} borderRadius={'30px'}>
                                    <SearchIcon color='black' boxSize={5} />
                                </IconButton>
                            </Link>
                        </InputRightElement>
                    </InputGroup>
                </Box>

                {isSmallScreen && (
                    <Box>
                        <IconButton
                            icon={<HamburgerIcon boxSize={6} />}
                            color={'#7ED957'}
                            backgroundColor={'#76603F'}
                            onClick={toggleMenu}
                        />
                    </Box>
                )}

                {!isSmallScreen && (
                    <Box display={'flex'} m={'20px'}>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="/noti">
                            <BellIcon
                                onClick={openNotification}
                                color='black'
                                fontSize={'2em'}
                                borderRadius={'25%'}
                                transition={'all 0.3s ease-in-out'}
                                _hover={{ transform: 'scale(1.2)' }} />
                        </Link>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="#">
                            <ChatIcon color='black' boxSize={8} _hover={{ transform: 'scale(1.2)' }} />
                        </Link>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="/perfilcliente">
                            <Icon as={CgProfile} color='black' boxSize={9} _hover={{ transform: 'scale(1.2)' }} />
                        </Link>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="/login">
                            <Icon as={FiLogOut} color='black' boxSize={9} _hover={{ transform: 'scale(1.2)' }} />
                        </Link>
                    </Box>
                )}
            </Flex>

            <Drawer placement="right" onClose={toggleMenu} isOpen={isMenuOpen}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader display={'flex'} justifyContent={'space-around'}>
                            <Text>Menu</Text>
                            <CloseIcon onClick={toggleMenu} />
                        </DrawerHeader>
                        <DrawerBody m={'10px'}>
                            <Box p={'10px'} display={'flex'} justifyContent={'space-around'} flexDirection={'row'}>
                                <Link as={RouterLink} to="/noti">
                                    <BellIcon
                                        onClick={openNotification}
                                        color='black'
                                        boxSize={8}
                                    />
                                </Link>
                                <Link as={RouterLink} to="/chat">
                                    <ChatIcon color='black' boxSize={9} _hover={{ transform: 'scale(1.2)' }}/>
                                </Link>
                                <Link as={RouterLink} to="#">
                                    <Icon as={CgProfile} color='black' boxSize={9} _hover={{ transform: 'scale(1.2)' }}/>
                                </Link>
                                <Link as={RouterLink} to="/login">
                                    <Icon as={FiLogOut} color='black' boxSize={9} _hover={{ transform: 'scale(1.2)' }} />
                                </Link>
                            </Box>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}

export default Navbar;
