import React, { useEffect, useState } from 'react';
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
  Text,
  Button,
  FormLabel
} from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';

function ModalProdutor({ isOpen, onClose }) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [rua, setRua] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [bairro, setBairro] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [estado, setEstado] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [instagram, setInstagram] = React.useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [produtorId, setProdutorId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Verificar se o modal já foi exibido anteriormente
  useEffect(() => {
    const modalDisplayed = localStorage.getItem('modalDisplayed');
    if (!modalDisplayed) {
      setShowModal(true);
    }
  }, []);

  // Buscar ID do produtor no local storage ao inicializar o componente
  useEffect(() => {
    const id = localStorage.getItem('produtorId');
    setProdutorId(id);

    if (id) {
      fetch(`http://localhost:8080/api/produtores/${id}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Falha ao carregar dados do produtor');
          }
          return res.json();
        })
        .then(data => {
          // Preencher os campos com os dados recuperados
          setRua(data.rua || '');
          setNumero(data.numero || '');
          setBairro(data.bairro || '');
          setCidade(data.cidade || '');
          setEstado(data.estado || '');
          setTelefone(data.telefone || '');
          setInstagram(data.instagram || '');
        })
        .catch(error => {
          console.error('Erro ao carregar dados do produtor:', error);
        });
    }
  }, []);

  // Limpar a entrada no localStorage em uma atualização significativa do aplicativo
  useEffect(() => {
    const handleAppUpdate = () => {
      localStorage.removeItem('modalDisplayed');
    };

    // Subscrever ao evento de atualização do aplicativo
    window.addEventListener('appUpdate', handleAppUpdate);

    return () => {
      // Limpar o evento de atualização do aplicativo ao desmontar o componente
      window.removeEventListener('appUpdate', handleAppUpdate);
    };
  }, []);

  const handleChangeRua = (value) => {
    setRua(value);
  };

  const handleChangeNumero = (value) => {
    setNumero(value);
  };

  const handleChangeBairro = (value) => {
    setBairro(value);
  };

  // Formatar telefone para o formato (00) 00000-0000
  const formatarTelefone = (value) => {
    const onlyNums = value.replace(/[^\d]/g, '');
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
        setRua(data.logradouro || '');
        setBairro(data.bairro || '');
        setCidade(data.localidade || '');
        setEstado(data.uf || '');
      })
      .catch(error => {
        console.error('Erro ao buscar CEP:', error);
      });
  };

  // Salvar dados para "fazer depois" no localStorage ao fechar o modal
  const handleDoLater = () => {
    localStorage.setItem('modalProdutorData', JSON.stringify({
      rua,
      numero,
      bairro,
      cidade,
      estado,
      telefone,
      instagram
    }));
    onClose();
  };

  // Limpar dados do "fazer depois" ao enviar o formulário
  const handleClearDoLaterData = () => {
    localStorage.removeItem('modalProdutorData');
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const produtorData = {
      rua: rua,
      numero: numero,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      telefone: telefone,
      instagram: instagram,
    };

    try {
      const response = await fetch(`http://localhost:8080/api/produtores/atualizar/${produtorId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produtorData),
      });

      if (response.ok) {
        console.log('Dados do produtor atualizados com sucesso!');
        handleClearDoLaterData(); // Limpar dados de "fazer depois"
        onClose(); // Fechar o modal após a atualização
      } else {
        console.error('Erro ao atualizar dados do produtor:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao atualizar dados do produtor:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen && showModal}
      onClose={handleDoLater} // Fechar ao clicar em "Fazer Depois"
      size={'xl'}
    >
      <ModalOverlay />
      <ModalContent bgColor={'#76603F'}>
        <ModalHeader fontSize={'32px'} color={'#98FF68'}>
          Cadastre suas informações adicionais
        </ModalHeader>
        <ModalCloseButton backgroundColor={'#98FF68'} />
        <ModalBody pb={6}>
          <Text color={'#98FF68'} pt={3} pb={3} fontSize={20}>
            Endereço
          </Text>
          <FormControl isRequired>
            <FormLabel color={'white'}>CEP</FormLabel>
            <Input
              ref={initialRef}
              placeholder='Digite seu CEP'
              onBlur={checkCep}
              bgColor="white"
              borderRadius={12}
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel color={'white'}>Rua</FormLabel>
            <Input
              type="text"
              placeholder="Rua"
              value={rua}
              onChange={(e) => handleChangeRua(e.target.value)}
              bgColor="white"
              borderRadius={12}
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel color={'white'}>Número</FormLabel>
            <Input
              type="number"
              placeholder="Número"
              value={numero}
              onChange={(e) => handleChangeNumero(e.target.value)}
              bgColor="white"
              borderRadius={12}
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel color={'white'}>Bairro</FormLabel>
            <Input
              type="text"
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => handleChangeBairro(e.target.value)}
              bgColor="white"
              borderRadius={12}
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel color={'white'}>Cidade</FormLabel>
            <Input
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              bgColor="white"
              borderRadius={12}
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel color={'white'}>Estado</FormLabel>
            <Input
              type="text"
              placeholder="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              bgColor="white"
              borderRadius={12}
/>
</FormControl>

php
Copy code
      <Text color={'#98FF68'} pt={10} pb={3} fontSize={20}>
        Informações Pessoais ou do Empreendimento
      </Text>
      <FormControl mt={1} isRequired>
        <FormLabel color={'white'}>Telefone (Whatsapp)</FormLabel>
        <Input
          type="tel"
          placeholder="(81) 90000-0000"
          value={telefone}
          onChange={(e) => handleChangeTelefone(e.target.value)}
          bgColor="white"
          borderRadius={12}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel color={'white'}>Instagram</FormLabel>
        <Input
          type="text"
          placeholder="@usuario"
          value={instagram}
          onChange={(e) => handleChangeInstagram(e.target.value)}
          bgColor="white"
          borderRadius={12}
        />
      </FormControl>
    </ModalBody>

    <ModalFooter>
      <Button
        colorScheme="green"
        w={'150px'}
        mr={3}
        isLoading={isLoading}
        style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
        onClick={handleSubmit}
      >
        Cadastrar
      </Button>
      <Button
        colorScheme="red"
        w={'150px'}
        onClick={onClose}
        style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
      >
        Cancelar
      </Button>
      <Text
        cursor={'pointer'}
        pl={'35px'}
        onClick={handleDoLater}
        color={'white'}
        opacity={0.7}
        textDecoration={'underline'}
        textAlign={'justify'}
        whiteSpace="nowrap"
      >
        Fazer depois
      </Text>
    </ModalFooter>
  </ModalContent>
</Modal>
);
}

export default ModalProdutor;
