import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalOverlay, Button, Heading, Flex, Textarea, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

function ModalAvaliar({ isOpen, onClose }) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [comment, setComment] = useState("");
    const navigate = useNavigate();

    const handleClose = () => {
        onClose();
        navigate('/home');
    };

    return (
        <Modal
            closeOnOverlayClick={false}
            isOpen={isOpen}
            onClose={onClose}
            motionPreset='slideInBottom'
            size='lg'
        >
            <ModalOverlay />
            <ModalContent backgroundColor='#76603F' textAlign='center' alignItems='center'>
                <ModalHeader mb='30px'>
                    <Heading color='#98FF68'>Avalie o Produto:</Heading>
                </ModalHeader>
                <ModalBody>
                    <Flex justifyContent='center' mb='20px'>
                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;
                            return (
                                <label key={index}>
                                    <input
                                        type='radio'
                                        name='rating'
                                        style={{ display: 'none' }}
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}
                                    />
                                    <FaStar
                                        color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                                        size={40}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </label>
                            );
                        })}
                    </Flex>
                    <Textarea
                        placeholder='Adicione um comentário...'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        backgroundColor='#D6CFC5'
                        color='black'
                        mb='20px'
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={handleClose}
                        h='50px'
                        w='150px'
                        borderRadius='10px'
                        color='white'
                        fontWeight='bold'
                        backgroundColor='green'
                        mr='20px'
                    >
                        Enviar
                    </Button>
                    <Button
                        onClick={handleClose}
                        h='50px'
                        w='150px'
                        borderRadius='10px'
                        color='white'
                        fontWeight='bold'
                        backgroundColor='red'
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ModalAvaliar;
