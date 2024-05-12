import { Link as RouterLink } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Flex, Box, Link, InputGroup, Input, InputRightElement, IconButton, Text, Image } from "@chakra-ui/react"
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from "@chakra-ui/react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalOverlay, Heading, Button, Divider } from '@chakra-ui/react'
import { BellIcon, ChatIcon, SearchIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
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

    const [isNotificationOpen, setNotificationOpen] = useState(false);

    const toggleNotification = () => {
        setNotificationOpen(!isNotificationOpen);
    };

    return (
        <>
            <Flex w={"auto"} h={"150px"} p={'10'} backgroundImage={`url(${ImgNav})`} alignItems={'center'} justifyContent={'space-around'} mb={'40px'}>

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
                        <Link pl={'10px'} pr={'10px'} onClick={toggleNotification}>
                            <BellIcon
                            onClick={openNotification}
                            color='black'
                            fontSize={'2em'}
                            borderRadius={'25%'}
                            transition={'all 0.3s ease-in-out'}
                            _hover={{ transform: 'scale(1.2)' }} />
                        </Link>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="#">
                            <ChatIcon color='black' boxSize={8} transition={'all 0.3s ease-in-out'} _hover={{ transform: 'scale(1.2)' }} />
                        </Link>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="/vizualizacliente">
                            <Icon as={CgProfile} color='black' boxSize={9} transition={'all 0.3s ease-in-out'} _hover={{ transform: 'scale(1.2)' }} />
                        </Link>
                        <Link pl={'10px'} pr={'10px'} as={RouterLink} to="/login">
                            <Icon as={FiLogOut} color='black' boxSize={9} transition={'all 0.3s ease-in-out'} _hover={{ transform: 'scale(1.2)' }} />
                        </Link>
                    </Box>
                )}
            </Flex>

            <Drawer placement="right" onClose={toggleMenu} isOpen={isMenuOpen}>
                <DrawerOverlay>
                    <DrawerContent backgroundColor={'#7CC152'}>
                        <DrawerHeader display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                            <Text color={'black'}>Menu</Text>
                            <CloseIcon color={'black'} onClick={toggleMenu} />
                        </DrawerHeader>
                        <Divider w={'100%'} borderWidth={'1px'} color={'black'} />
                        <DrawerBody>
                            <Box p={'10px'} display={'flex'} justifyContent={'center'} flexDirection={'column'}>
                                <Link onClick={toggleNotification}>
                                    <Box onClick={openNotification} display={'flex'} alignItems={'center'}>
                                    <BellIcon
                                        onClick={openNotification}
                                        color='black'
                                        fontSize={'2em'}
                                        mr={'15px'}
                                    />
                                        <Text color={'black'}>Notificações</Text>
                                    </Box>
                                </Link>
                                <Divider mt={'10px'} mb={'10px'} color={'black'} />
                                <Link as={RouterLink} to="#">
                                    <Box display={'flex'} alignItems={'center'}>
                                        <ChatIcon color='black' boxSize={8} mr={'15px'} />
                                        <Text color={'black'}>Chat</Text>
                                    </Box>
                                </Link>
                                <Divider mt={'10px'} mb={'10px'} color={'black'} />
                                <Link as={RouterLink} to="#">
                                    <Box display={'flex'} alignItems={'center'}>
                                        <Icon as={CgProfile} color='black' boxSize={9} mr={'15px'} />
                                        <Text color={'black'}>Perfil</Text>
                                    </Box>
                                </Link>
                                <Divider mt={'10px'} mb={'10px'} color={'black'} />
                                <Link as={RouterLink} to="/login">
                                    <Box display={'flex'} alignItems={'center'}>
                                        <Icon as={FiLogOut} color='black' boxSize={9} mr={'15px'} />
                                        <Text color={'black'}>LogoOut</Text>
                                    </Box>
                                </Link>
                            </Box>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

            <Modal
            closeOnOverlayClick={false}
            isOpen={isNotificationOpen}
            onClose={toggleNotification}
            motionPreset='slideInBottom'
            size={'full'}>
                <ModalOverlay />
                <ModalContent backgroundColor={'#76603F'} textAlign={'center'} alignItems={'center'}>
                    <ModalHeader mb={'30px'}>
                        <Heading color={'#98FF68'}>Notificações</Heading>
                        <Text color={'#E4DFD9'} fontSize="lg" fontWeight='light'>Aqui estão as suas notificações</Text>
                    </ModalHeader>
                    <ModalBody py={'none'} px={'none'} mb={['0px' ,'72px']} ml={['20px', '40px', '80px', '160px', 'none']} mr={['20px', '40px', '80px', '160px', 'none']}
                    border={'2px solid black'}
                    >
                        <Box mt={['20px' ,'40px']} mb={['20px' ,'40px']} pl={['40px', '160px', '380px']} pr={['40px', '160px', '380px']}>
                            <Text p={'5px'} color={'white'} fontSize={["md" ,"lg"]}>O Evento “Feira AgroEcológica da várzea será amanhã!</Text>
                            <Text color={'#E4DFD9'} fontWeight='light'>1 dia atrás</Text>
                        </Box>
                        <Divider w={'100%'} borderWidth={'1px'} color={'black'} />
                        <Box mt={['20px' ,'40px']} mb={['20px' ,'40px']} pl={['40px', '160px', '380px']} pr={['40px', '160px', '380px']}>
                            <Text p={'5px'} color={'white'} fontSize={["md" ,"lg"]}>Atualize seu perfil</Text>
                            <Text color={'#E4DFD9'} fontWeight='light'>1 semana atrás</Text>
                        </Box>
                        <Divider w={'100%'} borderWidth={'1px'} color={'black'} />
                        <Box mt={['20px' ,'40px']} mb={['20px' ,'40px']} pl={['40px', '160px', '380px']} pr={['40px', '160px', '380px']}>
                            <Text p={'5px'} color={'white'} fontSize={["md" ,"lg"]}>Lactéa mandou uma mensagem</Text>
                            <Text color={'#E4DFD9'} fontWeight='light'>3 dia atrás</Text>
                        </Box>
                        <Divider w={'100%'} borderWidth={'1px'} color={'black'} />
                    </ModalBody>
                    <ModalFooter>
                        <Button backgroundColor={'#98FF68'} color={'black'} onClick={toggleNotification}>Sair</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Navbar;
