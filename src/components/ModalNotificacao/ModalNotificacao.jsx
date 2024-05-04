import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalOverlay } from '@chakra-ui/react'
import { Text, Box, Button, Divider, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function ModalNotificacao({isOpen, onClose}) {
    const navigate = useNavigate();

    const handleClose = () => {
        onClose();
        navigate('/home');
    };

    return (
        <>
            <Modal
            closeOnOverlayClick={false}
            isOpen={isOpen}
            onClose={onClose}
            motionPreset='slideInBottom'
            size={'full'}>
                <ModalOverlay />
                <ModalContent backgroundColor={'#76603F'} textAlign={'center'} alignItems={'center'}>
                    <ModalHeader mb={'30px'}>
                        <Heading color={'#98FF68'}>Notificações</Heading>
                        <Text color={'#E4DFD9'} fontSize="lg" fontWeight='light'>Aqui estão as suas notificações</Text>
                    </ModalHeader>
                    <ModalBody py={'none'} px={'none'} ml={['20px', '40px', '80px', '160px', 'none']} mr={['20px', '40px', '80px', '160px', 'none']}
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
                        <Button backgroundColor={'#98FF68'} color={'black'} onClick={handleClose}>Sair</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalNotificacao;