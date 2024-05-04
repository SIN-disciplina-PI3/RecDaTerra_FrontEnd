import React from 'react';
import 'https://code.jquery.com/jquery-3.7.1.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.js'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Button,
    FormLabel
} from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';


function ModalProdutor({ isOpen, onOpen, onClose }) {
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [rua, setRua] = React.useState('');
    const [numero, setNumero] = React.useState('');
    const [bairro, setBairro] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const [estado, setEstado] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const [instagram, setInstagram] = React.useState('');

    const handleChangeRua = (value) => {
        setRua(value);
    };

    const handleChangeNumero = (value) => {
        setNumero(value);
    };

    const handleChangeBairro = (value) => {
        setBairro(value);
    };

    const formatarTelefone = (value) => {
        // Remover qualquer caractere que não seja número
        const onlyNums = value.replace(/[^\d]/g, '');
        // Aplicar a máscara de telefone com DDD
        let formattedTelefone = '';
        if (onlyNums.length > 0) {
            formattedTelefone = '(' + onlyNums.substring(0, 2);
        }
        if (onlyNums.length > 2) {
            formattedTelefone += ') ' + onlyNums.substring(2, 7);
        }
        if (onlyNums.length > 7) {
            formattedTelefone += '-' + onlyNums.substring(7, 11);
        }
        return formattedTelefone;
    };

    const handleChangeTelefone = (value) => {
        // Formatar o telefone conforme o usuário digita
        const formattedTelefone = formatarTelefone(value);
        setTelefone(formattedTelefone);
    };

    const handleChangeInstagram = (value) => {
        let formattedInstagram = value;
        if (value.length === 1 && value !== '@') {
            formattedInstagram = '@' + value;
        }
        setInstagram(formattedInstagram);
    };

    const checkCep = (e) => {
        const cep = e.target.value;
        console.log(cep);
        if (cep.trim() === '') {
            // Limpar os campos se o CEP estiver vazio
            setRua('');
            setNumero('');
            setBairro('');
            setCidade('');
            setEstado('');
            return;
        }
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                if (data.erro) {
                    console.log('CEP inválido');
                    return;
                }
                // Preencher os campos com os dados do CEP
                setRua(data.logradouro);
                setBairro(data.bairro);
                setCidade(data.localidade);
                setEstado(data.uf);
            })
            .catch(error => {
                console.error('Erro ao buscar CEP:', error);
            });
    };

    return (

        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size={"xl"}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Cadastre duas informações adicionais</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Text pt={3} pb={3} fontSize={20}>Endereço</Text>
                    <FormControl isRequired>
                        <FormLabel>CEP</FormLabel>
                        <Input
                            ref={initialRef}
                            placeholder='Digite seu CEP'
                            onBlur={checkCep}
                        />
                    </FormControl>

                    <FormControl mt={4} isRequired>
                        <FormLabel>Rua</FormLabel>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <FaMapMarkerAlt color="gray.300" />
                            </InputLeftElement>
                            <Input
                                type="text"
                                placeholder="Rua"
                                value={rua}
                                onChange={(e) => handleChangeRua(e.target.value)}
                            />
                        </InputGroup>
                    </FormControl>

                    <FormControl mt={4} isRequired>
                        <FormLabel>Número</FormLabel>
                        <Input
                            type="number"
                            placeholder="Número"
                            value={numero}
                            onChange={(e) => handleChangeNumero(e.target.value)}
                        />
                    </FormControl>
                    
                    <FormControl mt={4} isRequired>
                        <FormLabel>Bairro</FormLabel>
                        <Input
                            type="text"
                            placeholder="Bairro"
                            value={bairro}
                            onChange={(e) => handleChangeBairro(e.target.value)}
                        />
                    </FormControl>

                    <FormControl mt={4} isRequired>
                        <FormLabel>Cidade</FormLabel>
                        <Input
                            type="text"
                            placeholder="Cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                        />
                    </FormControl>

                    <FormControl mt={4} isRequired>
                        <FormLabel>Estado</FormLabel>
                        <Input
                            type="text"
                            placeholder="Estado"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                        />
                    </FormControl>

                    <Text pt={3} pb={3} fontSize={20}>Informações Pessoais ou do Empreendimento</Text>
                    <FormControl mt={4} isRequired>
                        <FormLabel>Telefone (Whatsapp)</FormLabel>
                        <Input
                            type="tel"
                            placeholder="(81) 90000-0000"
                            value={telefone}
                            onChange={(e) => handleChangeTelefone(e.target.value)}
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Instagram</FormLabel>
                        <Input
                            type="text"
                            placeholder="@usuario"
                            value={instagram}
                            onChange={(e) => handleChangeInstagram(e.target.value)}
                        />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        Cadastrar Informações
                    </Button>
                    <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ModalProdutor;
