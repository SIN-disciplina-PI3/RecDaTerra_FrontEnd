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
import { useParams } from "react-router-dom";

function PerfilProdutor() {
  const [editProfile, setEditProfile] = useState(false);
  const [editBio, setEditBio] = useState(false);
  const [tempNome, setTempNome] = useState('');
  const [tempBio, setTempBio] = useState('');
  const [tempContato, setTempContato] = useState('');
  const [tempCep, setTempCep] = useState('');
  const [tempFotoPerfil, setTempFotoPerfil] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const { produtorId } = useParams();

  const [produtor, setProdutor] = useState({
    nomeUsuario: '',
    email: '',
    bio: '',
    fotoPerfil: null,
    tipoDeDocumento: '',
    documento: '',
    contato: '',
    cep: '',
    rua: '',
    bairro: '',
    numero: '',
    estado: ''
  });

  useEffect(() => {
    async function fetchProdutorData() {
      try {
        const response = await fetch(`http://localhost:8080/api/produtores/${produtorId}`);
        if (!response.ok) {
          throw new Error('Falha ao carregar dados do produtor');
        }
        const data = await response.json();
        setProdutor(data);
        setTempNome(data.nomeUsuario);
        setTempBio(data.bio);
        setTempContato(data.contato);
        setTempCep(data.cep);
      } catch (error) {
        console.error('Erro ao carregar dados do produtor:', error);
      }
    }

    fetchProdutorData();
  }, [produtorId]);

  const handleEditProfileClick = () => {
    setTempNome(produtor.nomeUsuario);
    setTempCep(produtor.cep);
    setTempContato(produtor.contato);
    setEditProfile(true);
    setEditBio(false);
  };

  const handleEditBioClick = () => {
    setTempBio(produtor.bio);
    setEditBio(true);
    setEditProfile(false);
  };

  const handleSaveClick = async () => {
    try {
      setIsLoading(true);

      const payload = {
        nomeUsuario: tempNome,
        bio: tempBio,
        cep: tempCep,
        contato: tempContato,
        fotoPerfil: tempFotoPerfil ? tempFotoPerfil.imageUrl : produtor.fotoPerfil
      };

      const response = await fetch(`http://localhost:8080/api/produtores/atualizar/${produtorId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao salvar dados do produtor');
      }

      const updatedProdutor = await response.json();

      setProdutor({
        ...produtor,
        nomeUsuario: updatedProdutor.nomeUsuario,
        bio: updatedProdutor.bio,
        cep: updatedProdutor.cep,
        contato: updatedProdutor.contato,
        fotoPerfil: updatedProdutor.fotoPerfil
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
    setTempNome(produtor.nomeUsuario);
    setTempCep(produtor.cep);
    setTempBio(produtor.bio);
    setEditProfile(false);
    setEditBio(false);
    setTempFotoPerfil(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nomeUsuario') {
      setTempNome(value);
    } else if (name === 'cep') {
      setTempCep(value);
    } else if (name === 'contato') {
      setTempContato(value);
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
      <Flex
        justify="center"
        align="center"
        mt={10}
        flexDirection={{ base: "column", md: "row" }}
      >
        {/* Left Panel */}
        <Box
          className="Left-Panel"
          padding="30px"
          mr={30}
          justify="center"
          align="center"
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        >
          {/* Profile Picture */}
          <Box
            justify="center"
            align="center"
            boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.01)"
            borderRadius="md"
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
                {produtor.fotoPerfil ? (
                  <img src={produtor.fotoPerfil} alt="Profile" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
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
                    {produtor.fotoPerfil ? null : (
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
            <h1 style={{ color: 'white', marginTop: '10%', fontSize: '16px' }}>Produtor(a)</h1>
            <h1 style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>{produtor.nomeUsuario}</h1>
          </Box>
          <br />

          {/* Bio Section */}
          <Box color='white' align='start'>
            <h1 style={{ fontSize: '16px', marginBottom: '5px' }}>Bio</h1>
            <hr style={{ opacity: '0.9', marginBottom: '10px' }} />

            {!editBio ? (
              <div>
                <p                 style={{ color: 'white', marginBottom: '10px', whiteSpace: 'pre-wrap' }}>
                  {produtor.bio}
                </p>
                <Button
                  onClick={handleEditBioClick}
                  border='1px   solid black'
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
                  size="sm"
                  width="100%"
                  placeholder="Escreva algo sobre você..."
                  borderColor="#E2E8F0"
                />
                <Flex justify="space-between" mt={4}>
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
                    Cancelar
                  </Button>
                  <Button
                    onClick={handleSaveClick}
                    size="sm"
                    colorScheme="blue"
                    isLoading={isLoading}
                  >
                    Salvar
                  </Button>
                </Flex>
              </div>
            )}
          </Box>
        </Box>

        {/* Right Panel */}
        <Box
          mt={15}
          ml={50}
          mr={[0, 50]}
          padding="30px"
          border={['none', '1px solid white']}
          maxWidth={['100%', '600px']}
          borderRadius='md'
          boxShadow='0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        >
          {/* Informações do Produtor */}
          <h1 style={{ color: 'white', fontSize: '24px', marginBottom: '20px' }}>Informações do Produtor</h1>
          <FormControl mt={5}>
            <FormLabel>Nome</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <CgProfile color="#A0AEC0" />
              </InputLeftElement>
              <Input
                type="text"
                name="nomeUsuario"
                value={editProfile ? tempNome : produtor.nomeUsuario}
                onChange={handleInputChange}
                isReadOnly={!editProfile}
                borderColor="#E2E8F0"
                _hover={{ borderColor: "#C6F6D5" }}
              />
            </InputGroup>
          </FormControl>

          <FormControl mt={5}>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<EmailIcon color="#A0AEC0" />} />
              <Input
                type="email"
                name="email"
                value={produtor.email}
                isReadOnly
                borderColor="#E2E8F0"
              />
            </InputGroup>
          </FormControl>

          <FormControl mt={5}>
            <FormLabel>Contato</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<CgInstagram color="#A0AEC0" />} />
              <Input
                type="text"
                name="contato"
                value={editProfile ? tempContato : produtor.contato}
                onChange={handleInputChange}
                isReadOnly={!editProfile}
                borderColor="#E2E8F0"
                _hover={{ borderColor: "#C6F6D5" }}
              />
            </InputGroup>
          </FormControl>

          <FormControl mt={5}>
            <FormLabel>CEP</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <CgProfile color="#A0AEC0" />
              </InputLeftElement>
              <Input
                type="text"
                name="cep"
                value={editProfile ? tempCep : produtor.cep}
                onChange={handleInputChange}
                isReadOnly={!editProfile}
                borderColor="#E2E8F0"
                _hover={{ borderColor: "#C6F6D5" }}
              />
            </InputGroup>
          </FormControl>

          <Flex justify={['center', 'space-between']} mt={5}>
            {!editProfile && (
              <Button
                onClick={handleEditProfileClick}
                variant="link"
                size="sm"
                textDecoration="underline"
                color="#4973DE"
              >
                Editar Perfil
              </Button>
            )}
            {editProfile && (
              <Flex>
                <Button
                  onClick={handleCancelClick}
                  variant="link"
                  size="sm"
                  textDecoration="underline"
                  color="#E53E3E"
                  mr={2}
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleSaveClick}
                  size="sm"
                  colorScheme="blue"
                  isLoading={isLoading}
                >
                  Salvar
                </Button>
              </Flex>
            )}
          </Flex>
        </Box>
      </Flex>

      {/* Alerta de Salvamento */}
      {alerta && (
        <Alert status="success" position="absolute" bottom="10px" right="10px">
          <AlertIcon />
          Dados salvos com sucesso!
        </Alert>
      )}
    </div>
  );
}

export default PerfilProdutor;

