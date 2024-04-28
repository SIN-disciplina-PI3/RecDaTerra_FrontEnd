import { Link as RouterLink } from 'react-router-dom';
import { Button, Flex } from "@chakra-ui/react";

function Cadastro() {
    return (
        <div className='container'>
            <div className="title">
                <h1 style={{ color: 'white', marginTop: '10%' }}>Você deseja se cadastrar como:</h1>
            </div>
            <Flex 
                alignItems='center'
                justifyContent='center'
                p='30px'
                mt='50px'
            >
                <Button
                    mr='100px'
                    as={RouterLink} 
                    to="/cadastroCliente" 
                    type='submit'
                    _hover={{ 
                        backgroundColor: '#76E1FF', // Estilo de hover para a cor de fundo
                    }} 
                    h='88'
                    w='360px'
                    borderRadius='20px'
                    color='black'
                    fontWeight='bold'
                    backgroundColor='#98FF68'
                    boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                    transition='all 0.3s ease-in-out'
                >
                    Cliente
                </Button>
                <Button
                    as={RouterLink} 
                    to="/cadastroProdutor" 
                    type='submit'
                    _hover={{ 
                        backgroundColor: '#76E1FF', // Estilo de hover para a cor de fundo
                    }} 
                    h='88'
                    w='360px'
                    borderRadius='20px'
                    color='black'
                    fontWeight='bold'
                    backgroundColor='#98FF68'
                    boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                    transition='all 0.3s ease-in-out'
                >
                    Produtor
                </Button>
            </Flex>
        </div>
    );
}

export default Cadastro;
