import Chicoin from '../../img/Chicoin.png';
import { useState } from 'react';
import { Flex, Box, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons';
import { CgProfile, CgInstagram } from "react-icons/cg";

function PerfilCliente() {
    const [bio, setBio] = useState("Fale um pouco sobre você...");
    const [editMode, setEditMode] = useState(false);
    const [tempBio, setTempBio] = useState(bio);

    const handleEditClick = () => {
        setTempBio(bio); // Salva a bio atual em tempBio para restauração se necessário
        setEditMode(true); // Ativa o modo de edição
    };

    const handleSaveClick = () => {
        setBio(tempBio); // Atualiza a bio com o conteúdo editado
        setEditMode(false); // Desativa o modo de edição
    };

    const handleCancelClick = () => {
        setTempBio(bio); // Restaura a bio para o valor anterior
        setEditMode(false); // Desativa o modo de edição
    };

    const handleChange = (event) => {
        setTempBio(event.target.value); // Atualiza tempBio com o novo valor do campo de input
    };

    return (
        <div className="container">
            <Flex justify="center" align="center" mt={100} flexDirection={{ base: 'column', md: 'row' }}>
                {/* ---------------------Painel Esquerdo:------------------------- */}
                <Box className="Left-Panel"
                     padding="30px"
                     mr={[0, 30]}
                     mt={[30, 0]} // Aumentando marginTop em telas menores
                     justify="center"
                     align="center"
                     boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)">
                    {/* ----------------------------Box da Foto-------------------------------------------- */}
                    <Box justify="center" align="center"
                         boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.01)"
                         borderRadius='md'>
                        <img src={Chicoin} alt="Chicoin" />
                        <h1 style={{ color: 'white', marginTop: '10%', fontSize: '16px' }}>Cliente</h1>
                        <h1 style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>Chico Moedas</h1>
                    </Box>
                    <br />

                    {/* ----------------------------Box da Bio-------------------------------------------- */}
                    <Box color='white' align='start'>
                        <h1 style={{ fontSize: '16px', marginBottom: '5px' }}>Bio</h1>
                        <hr style={{ opacity: '0.1', marginBottom: '10px' }} />

                        {!editMode ? (
                            <div>
                                <p style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>{bio}</p>
                                <Button
                                    onClick={handleEditClick}
                                    border='1px solid black'
                                    borderRadius='md'
                                    mt={5}
                                    padding='10px'
                                    backgroundColor='#D6CFC5'
                                    fontWeight='light'
                                >
                                    Editar
                                </Button>
                            </div>
                        ) : (
                            <div>
                                <Input
                                    type="text"
                                    value={tempBio}
                                    onChange={handleChange}
                                />
                                <Button
                                    onClick={handleSaveClick}
                                    border='1px solid black'
                                    borderRadius='md'
                                    padding='10px'
                                    backgroundColor='#D6CFC5'
                                    fontWeight='light'
                                    marginTop={5}
                                >
                                    Salvar
                                </Button>
                                <Button
                                    onClick={handleCancelClick}
                                    border='1px solid black'
                                    borderRadius='md'
                                    padding='10px'
                                    backgroundColor='#D6CFC5'
                                    fontWeight='light'
                                >
                                    Cancelar
                                </Button>
                            </div>
                        )}
                    </Box>
                </Box>
                {/* -------------------------------------Painel Direito:----------------------------------------------------- */}
                <Box className='right-panel' mt={15} ml={50} mr={[0, 50]} padding='30px' border={['none', '1px solid white']} maxWidth={['100%', '600px']} borderRadius='md' boxShadow='0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'>
                    <Flex direction="column" align="stretch">
                        <div className="title">
                            <Box color={'white'} mb={4} textAlign="center">
                                <h1>Informações Pessoais</h1>
                            </Box>
                        </div>

                        <FormControl isRequired>
                            <FormLabel color="white" fontWeight="regular">Nome</FormLabel>
                            <InputGroup mb={4}>
                                <InputLeftElement pointerEvents="none" children={<CgProfile />} />
                                <Input
                                    variant='outline'
                                    placeholder='Chico Moedas'
                                    backgroundColor='#D6CFC5'
                                    fontWeight='bold'
                                    color='black'
                                    border='none'
                                    boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                                    isReadOnly
                                    _placeholder={{ color: 'black', opacity: '1' }}
                                />
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel color="white" fontWeight="regular">E-mail</FormLabel>
                            <InputGroup mb={4}>
                                <InputLeftElement pointerEvents='none' children={<EmailIcon />} />
                                <Input
                                    variant='outline'
                                    placeholder='@chicoin@gmail.com'
                                    backgroundColor='#D6CFC5'
                                    fontWeight='bold'
                                    color='black'
                                    border='none'
                                    boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                                    isReadOnly
                                    _placeholder={{ color: 'black', opacity: '1' }}
                                />
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel color="white" fontWeight="regular">Instagram</FormLabel>
                            <InputGroup mb={4}>
                                <InputLeftElement pointerEvents='none' children={<CgInstagram />} />
                                <Input
                                    variant='outline'
                                    placeholder='Chicoins'
                                    backgroundColor='#D6CFC5'
                                    fontWeight='bold'
                                    color='black'
                                    border='none'
                                    boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                                    isReadOnly
                                    _placeholder={{ color: 'black', opacity: '1' }}
                                />
                            </InputGroup>
                        </FormControl>
                    </Flex>
                </Box>
            </Flex>
        </div>
    );
}

export default PerfilCliente;
