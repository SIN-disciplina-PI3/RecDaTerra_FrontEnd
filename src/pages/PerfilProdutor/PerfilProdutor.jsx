import { IoLocationSharp } from "react-icons/io5";
import MeninaVeneno from '../../img/PoisonGirl.png';
import { Flex, Box, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Button, Text, Link } from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons';
import { CgProfile, CgInstagram } from "react-icons/cg";
import { HiIdentification } from "react-icons/hi2";
import { FaRoad } from "react-icons/fa";
import { GiVillage } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AddIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from "react-router-dom";



import { useState } from 'react'


function PerfilProdutor() {

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
            <Flex justify="center" align="center" mt={10} flexDirection={{ base: 'column', md: 'row' }}>
                {/* ---------------------Painel Esquerdo:------------------------- */}
                <Box className="Left-Panel" 
                     padding="30px"
                     mr={30} 
                     justify="center" 
                     align="center"
                     boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)">
                        {/* ----------------------------Box da Foto-------------------------------------------- */}
                    <Box justify="center" align="center"
                         boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.01)" 
                         borderRadius='md'>
                        <img src={MeninaVeneno} alt="Chicoin" />
                        <h1 style={{ color: 'white', marginTop: '10%', fontSize: '16px' }}>Produtor(a)</h1>
                        <h1 style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>Menina Veneno</h1>
                    </Box>
                    <br />
                    
                             {/* ----------------------------Box da Foto-------------------------------------------- */}
                             <Box color='white' align='start'
                             >
    <h1 style={{ fontSize: '16px', marginBottom: '5px' }}>Bio</h1>
    <hr style={{
    opacity: '0.1',
    marginBottom: '10px'}}/>

    {!editMode ? (
        
        <div>
            <p style={{ overflowWrap: 'break-word', wordWrap: 'break-word'  }}>{bio}</p>

            <div  style={{display: 'flex' , justifyContent: 'center' }}>
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

            <Link as={RouterLink} to="/post">
            <AddIcon 
            backgroundColor={"white"} 
            color={"black"}
            padding={"6px"}
            boxSize={9}
            borderRadius={"25px"}
            />
            </Link>
            </div>

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
                marginTop= {5}
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
                {/* -------------------------------------DIVISÃO DE PAINEIS----------------------------------------------------- */}
<Flex direction={'row'}>
    <Box className='left-panel' mt={15} mr={50} padding='50px'>

                <Box className='right-panel' mt={15} ml={50} padding='50px' border="1px solid white">
    <Flex direction="column" align="stretch" maxW="600px">
        <div className="title">
            <Box color={'white'} mb={4} textAlign="center">
                <h1>Informações Pessoais</h1>
            </Box>
        </div>

        <FormControl isRequired>
            <FormLabel color="white" fontWeight="regular">Nome</FormLabel>
            <InputGroup mb={4}>
                <InputLeftElement pointerEvents="none" children={<CgProfile />} />
                {/* Usando o Input com isReadOnly */}
                <Input
                   variant='outline'
                   placeholder='Menina Veneno'
                   backgroundColor='#D6CFC5'
                   fontWeight='bold'
                   color='black'
                   border='none'
                   boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                   isReadOnly
                   _placeholder={{ color: 'black', opacity: '1' }} // Definindo a cor e opacidade do placeholder
                   />
            </InputGroup>
        </FormControl>

        <FormControl isRequired>
            <FormLabel color="white" fontWeight="regular">E-mail</FormLabel>
            <InputGroup mb={4}>
                <InputLeftElement pointerEvents='none' children={<EmailIcon />} />
                {/* Usando o Input com isReadOnly */}
                <Input
                  variant='outline'
                  placeholder='toxicgirl@gmail.com'
                  backgroundColor='#D6CFC5'
                  fontWeight='bold'
                  color='black'
                  border='none'
                  boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                  isReadOnly
                  _placeholder={{ color: 'black', opacity: '1' }} // Definindo a cor e opacidade do placeholder
                  />
            </InputGroup>
        </FormControl>

        
        <FormControl isRequired>
            <FormLabel color="white" fontWeight="regular">CNPJ</FormLabel>
            <InputGroup mb={4}>
                <InputLeftElement pointerEvents='none' children={<HiIdentification />} />
                {/* Usando o Input com isReadOnly */}
                <Input
                  variant='outline'
                  placeholder='12.345.678/0001-90'
                  backgroundColor='#D6CFC5'
                  fontWeight='bold'
                  color='black'
                  border='none'
                  boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                  isReadOnly
                  _placeholder={{ color: 'black', opacity: '1' }} // Definindo a cor e opacidade do placeholder
                  />
            </InputGroup>
        </FormControl>
        <FormControl isRequired>



        <FormControl isRequired>
            <FormLabel color="white" fontWeight="regular">Instagram</FormLabel>
            <InputGroup mb={4}>
                <InputLeftElement pointerEvents='none' children={<CgInstagram />} />
                {/* Usando o Input com isReadOnly */}
                <Input
    variant='outline'
    placeholder='Chicoins'
    backgroundColor='#D6CFC5'
    fontWeight='bold'
    color='black'
    border='none'
    boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
    isReadOnly
    _placeholder={{ color: 'black', opacity: '1' }} // Definindo a cor e opacidade do placeholder
/>
            </InputGroup>
        </FormControl>
            <FormLabel color="white" fontWeight="regular">Telefone (WhatsApp)</FormLabel>
            <InputGroup mb={4}>
                <InputLeftElement pointerEvents='none' children={<BsFillTelephoneFill />} />
                {/* Usando o Input com isReadOnly */}
                <Input
                  variant='outline'
                  placeholder='81 9 0000-0000'
                  backgroundColor='#D6CFC5'
                  fontWeight='bold'
                  color='black'
                  border='none'
                  boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                  isReadOnly
                  _placeholder={{ color: 'black', opacity: '1' }} // Definindo a cor e opacidade do placeholder
                  />
            </InputGroup>
        </FormControl>
    </Flex>
</Box>

    {/* ------------------------------DIVISÃO DE PAINEIS: PAINEL DE ENDEREÇO---------------------------------- */}
        <Box className='right-panel' mt={15} ml={50} padding='50px' border="1px solid white">
    <Flex direction="column" align="stretch" maxW="600px">
        <div className="title">
            <Box color={'white'} mb={4} textAlign="center">
                <h1>Endereço</h1>
            </Box>
        </div>

        <FormControl isRequired>
            <FormLabel color="white" fontWeight="regular">CEP</FormLabel>
            <InputGroup mb={4}>
                <InputLeftElement pointerEvents="none" children={<IoLocationSharp />} />
                {/* Usando o Input com isReadOnly */}
                <Input
                   variant='outline'
                   placeholder='544000-000'
                   backgroundColor='#D6CFC5'
                   fontWeight='bold'
                   color='black'
                   border='none'
                   boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                   isReadOnly
                   _placeholder={{ color: 'black', opacity: '1' }} // Definindo a cor e opacidade do placeholder
                   />
            </InputGroup>
        </FormControl>

        <FormControl isRequired>
            <FormLabel color="white" fontWeight="regular">Rua</FormLabel>
            <InputGroup mb={4}>
                <InputLeftElement pointerEvents='none' children={<FaRoad />} />
                {/* Usando o Input com isReadOnly */}
                <Input
                  variant='outline'
                  placeholder='Avenida Bernardo Vieira de Melo'
                  backgroundColor='#D6CFC5'
                  fontWeight='bold'
                  color='black'
                  border='none'
                  boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                  isReadOnly
                  _placeholder={{ color: 'black', opacity: '1' }} // Definindo a cor e opacidade do placeholder
                  />
            </InputGroup>
        </FormControl>

        <FormControl isRequired>
            <FormLabel color="white" fontWeight="regular">Bairro</FormLabel>
            <InputGroup mb={4}>
                <InputLeftElement pointerEvents='none' children={<GiVillage />} />
                {/* Usando o Input com isReadOnly */}
                <Input
    variant='outline'
    placeholder='Piedade'
    backgroundColor='#D6CFC5'
    fontWeight='bold'
    color='black'
    border='none'
    boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
    isReadOnly
    _placeholder={{ color: 'black', opacity: '1' }} // Definindo a cor e opacidade do placeholder
/>
            </InputGroup>
        </FormControl>
    </Flex>
</Box>
    </Box>  
</Flex>

            </Flex>
        </div>
    
    );
}

export default PerfilProdutor;
