import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Alert,
  AlertIcon,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons';
import { CgProfile, CgInstagram } from "react-icons/cg";
import { PiUploadSimpleBold } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";

function PerfilCliente() {
  const [editProfile, setEditProfile] = useState(false);
  const [editBio, setEditBio] = useState(false);
  const [tempNome, setTempNome] = useState('');
  const [tempInstagram, setTempInstagram] = useState('');
  const [tempBio, setTempBio] = useState('');
  const [tempFotoPerfil, setTempFotoPerfil] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const { clienteId } = useParams();

  const [cliente, setCliente] = useState({
    nomeUsuario: '',
    email: '',
    instagram: '',
    bio: '',
    fotoPerfil: null,
  });

  useEffect(() => {
    async function fetchClienteData() {
      try {
        const response = await fetch(`http://localhost:8080/api/clientes/${clienteId}`);
        if (!response.ok) {
          throw new Error('Falha ao carregar dados do cliente');
        }
        const data = await response.json();
        setCliente(data);
        setTempNome(data.nomeUsuario);
        setTempInstagram(data.instagram);
        setTempBio(data.bio);
      } catch (error) {
        console.error('Erro ao carregar dados do cliente:', error);
      }
    }

    fetchClienteData();
  }, [clienteId]);

  const handleEditProfileClick = () => {
    setTempNome(cliente.nomeUsuario);
    setTempInstagram(cliente.instagram);
    setEditProfile(true);
    setEditBio(false);
  };

  const handleEditBioClick = () => {
    setTempBio(cliente.bio);
    setEditBio(true);
    setEditProfile(false);
  };

  const handleSaveClick = async () => {
    try {
      setIsLoading(true);

      const payload = {
        nomeUsuario: tempNome,
        instagram: tempInstagram,
        bio: tempBio,
        fotoPerfil: tempFotoPerfil ? tempFotoPerfil.imageUrl : cliente.fotoPerfil,
      };

      const response = await fetch(`http://localhost:8080/api/clientes/atualizar/${clienteId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao salvar dados do cliente');
      }

      const updatedCliente = await response.json();

      setCliente({
        ...cliente,
        nomeUsuario: updatedCliente.nomeUsuario,
        instagram: updatedCliente.instagram,
        bio: updatedCliente.bio,
        fotoPerfil: updatedCliente.fotoPerfil,
      });

      setTempFotoPerfil(null);
      setEditProfile(false);
      setEditBio(false);
      setIsLoading(false);
      setAlerta(true);
      setTimeout(() => setAlerta(false), 3000);
    } catch (error) {
      console.error('Erro ao salvar dados do cliente:', error);
      setIsLoading(false);
    }
  };

  const handleCancelClick = () => {
    setTempNome(cliente.nomeUsuario);
    setTempInstagram(cliente.instagram);
    setTempBio(cliente.bio);
    setEditProfile(false);
    setEditBio(false);
    setTempFotoPerfil(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nomeUsuario') {
      setTempNome(value);
    } else if (name === 'instagram') {
      setTempInstagram(value);
    } else if (name === 'bio') {
      setTempBio(value);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const imageUrl = URL.createObjectURL(file);
      setTempFotoPerfil({ file, imageUrl });
    } else {
      console.log("Por favor, selecione um arquivo JPG ou PNG.");
    }
  };

  const handleRemoveFile = () => {
    setTempFotoPerfil(null);
  };

  return (
    <div className="container">
      <Flex justify="center" align="center" mt={100} flexDirection={{ base: 'column', md: 'row' }}>
        {/* Left Panel */}
        <Box
          padding="30px"
          mr={[0, 30]}
          mt={[30, 0]}
          justify="center"
          align="center"
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        >
          {/* Profile Picture */}
          <Box
            boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.01)"
            borderRadius='md'
          >
            {editProfile ? (
              <div>
                {tempFotoPerfil?.imageUrl ? (
                  <img src={tempFotoPerfil.imageUrl} alt="Profile" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
                ) : (
                  <>
                    <PiUploadSimpleBold size="100px" color="#6A554E" />
                    <Text fontSize={20} whiteSpace="nowrap" color="white" mt={4}>
                      Adicione uma imagem
                    </Text>
                    <input
                      type="file"
                      id="fileInput"
                      accept=".jpg, .png"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    {tempFotoPerfil ? null : (
                      <label
                        htmlFor="fileInput"
                        style={{
                          cursor: "pointer",
                          marginTop: "10px",
                          textDecoration: "underline",
                          color: "#7ED957",
                        }}
                      >
                        Escolher foto
                      </label>
                    )}
                  </>
                )}
                {tempFotoPerfil && (
                  <Button onClick={handleRemoveFile} variant="link" size="sm" textDecoration="underline" color="#4973DE">
                    Remover foto
                  </Button>
                )}
              </div>
            ) : (
              <>
                {cliente.fotoPerfil ? (
                  <img src={cliente.fotoPerfil} alt="FotoP" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
                ) : (
                  <>
                    <PiUploadSimpleBold size="100px" color="#6A554E" />
                    <Text fontSize={20} whiteSpace="nowrap" color="white" mt={4}>
                      Adicione uma imagem!
                    </Text>
                    <input
                      type="file"
                      id="fileInput"
                      accept=".jpg, .png"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    {cliente.fotoPerfil ? null : (
                      <label
                        htmlFor="fileInput"
                        style={{
                          cursor: "pointer",
                          marginTop: "10px",
                          textDecoration: "underline",
                          color: "#7ED957",
                        }}
                      >
                        Escolher foto
                      </label>
                    )}
                  </>
                )}
              </>
            )}
            <h1 style={{ color: 'white', marginTop: '10%', fontSize: '16px' }}>Cliente</h1>
            <h1 style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>{cliente.nomeUsuario}</h1>
          </Box>
          <br />

          {/* Bio Section */}
          <Box color='white' align='start'>
            <h1 style={{ fontSize: '16px', marginBottom: '5px' }}>Bio</h1>
            <hr style={{ opacity: '0.9', marginBottom: '10px' }} />

            {!editBio ? (
              <div>
                <p style={{ overflowWrap: 'break-word', wordWrap: 'break-word', fontSize: "14px" }}>{cliente.bio || "Fale um pouco sobre você..."}</p>
                <Button
                  onClick={handleEditBioClick}
                  border='1px                   solid black'
                  borderRadius='md'
                  mt={5}
                  padding='10px'
                  backgroundColor='#D6CFC5'
                  fontWeight='light'
               >
                Editar Bio
               </Button>
               </div>
            ) : (
              <div>
                <Textarea
                  name="bio"
                  value={tempBio}
                  onChange={handleInputChange}
                />
                <Flex mt={5} justify="flex-end">
                  <Button
                    onClick={handleSaveClick}
                    isLoading={isLoading}
                    loadingText="Salvando"
                    borderRadius='md'
                    padding='10px'
                    backgroundColor='#7ED951'
                    fontWeight='light'
                    width="auto"
                    mr={2}
                  >
                    Salvar
                  </Button>
                  <Button
                    onClick={handleCancelClick}
                    borderRadius='md'
                    padding='10px'
                    backgroundColor='#FB3636'
                    fontWeight='light'
                    width="auto"
                  >
                    Cancelar
                  </Button>
                </Flex>
              </div>
            )}
          </Box>
        </Box>

        {/* Right Panel */}
        <Box mt={15} ml={50} mr={[0, 50]} padding='30px' border={['none', '1px solid white']} maxWidth={['100%', '600px']} borderRadius='md' boxShadow='0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'>
          <Flex direction="column" align="stretch">
            <div className="title">
              <Box color={'white'} mb={4} textAlign="center">
                <h1>Informações Pessoais</h1>
                <hr style={{ opacity: '0.1', marginBottom: '20px' }} />

                {/* Nome */}
                <FormControl mt={5}>
                  <FormLabel>Nome</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <CgProfile color="#A0AEC0" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="nomeUsuario"
                      value={editProfile ? tempNome : cliente.nomeUsuario}
                      onChange={handleInputChange}
                      isReadOnly={!editProfile}
                      borderColor="#E2E8F0"
                      _hover={{ borderColor: "#C6F6D5" }}
                    />
                  </InputGroup>
                </FormControl>

                {/* Instagram */}
                <FormControl mt={5}>
                  <FormLabel>Instagram</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <CgInstagram color="#A0AEC0" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="instagram"
                      value={editProfile ? tempInstagram : cliente.instagram}
                      onChange={handleInputChange}
                      isReadOnly={!editProfile}
                      borderColor="#E2E8F0"
                      _hover={{ borderColor: "#C6F6D5" }}
                    />
                  </InputGroup>
                </FormControl>

                {/* Email */}
                <FormControl mt={5}>
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <EmailIcon color="#A0AEC0" />
                    </InputLeftElement>
                    <Input
                      type="email"
                      value={cliente.email}
                      isReadOnly
                      borderColor="#E2E8F0"
                      _hover={{ borderColor: "#C6F6D5" }}
                    />
                  </InputGroup>
                </FormControl>

                {/* Alerta de Salvar */}
                {alerta && (
                  <Alert status="success" mt={5}>
                    <AlertIcon />
                    Dados do perfil salvos com sucesso!
                  </Alert>
                )}

                {/* Botões de Ação */}
                {editProfile ? (
                  <Flex mt={5} justify="space-between">
                    <Button
                      onClick={handleSaveClick}
                      isLoading={isLoading}
                      loadingText="Salvando"
                      colorScheme="teal"
                      variant="outline"
                      width="45%"
                      backgroundColor={"#62FF1F"}
                      color={"black"}
                    >
                      Salvar
                    </Button>
                    <Button
                      onClick={handleCancelClick}
                      variant="outline"
                      width="45%"
                      backgroundColor={"#FD0000"}
                    >
                      Cancelar
                    </Button>
                  </Flex>
                ) : (
                  <Button
                    onClick={handleEditProfileClick}
                    mt={5}
                    width="100%"
                    backgroundColor="#98FF68"
                    color="black"
                    _hover={{ bg: '#2D3748', color: "white" }}
                  >
                    Editar Perfil
                  </Button>
                )}
              </Box>
            </div>
          </Flex>
        </Box>
      </Flex>

      {/* Alert for Save Confirmation */}
      {alerta && (
        <Alert status="success" position='absolute' top='100px' right='30px' borderRadius='md' boxShadow='0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'>
          <AlertIcon />
          Dados do perfil salvos com sucesso!
        </Alert>
      )}
    </div>
  );
}

export default PerfilCliente;

