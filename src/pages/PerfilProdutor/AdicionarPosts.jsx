import { Container, Select, Box, Text, Flex, Input, Textarea, Button } from '@chakra-ui/react';
import { PiUploadSimpleBold } from "react-icons/pi";

function AdicionarPosts() {
    return (
        <>
            <Container maxW={"100%"}>
                <Box mb={'40px'}>
                    <Select backgroundColor={"#D9D9D9"} width={"10%"} borderRadius={"20px"}>
                        <option value='produto'>Produto</option>
                        <option value='evento'>Evento</option>
                    </Select>
                </Box>

                <div className="paineis" style={{ display: 'flex', justifyContent: 'center', padding: '0' }}>
                    <Flex justify="center" align="center" flexDirection={{ base: 'column', md: 'row' }}>
                        <div className="ladoesquerdo">
                            <Box
                                textAlign={"center"}
                                mr={30} ml={30}
                                backgroundColor={"#D9D9D9"}
                                opacity={"30%"}
                                paddingTop={200} paddingRight={400} paddingBottom={200} paddingLeft={400}
                                display={"flex"}
                                flexDirection={"column"}
                                justifyContent="center"
                                alignItems="center"
                                width={"700px"}
                            >
                                <PiUploadSimpleBold size="100px" />
                                <Text
                                    fontSize={30}
                                    whiteSpace={"nowrap"}
                                >
                                    Adicione uma imagem do seu produto/evento
                                </Text>
                            </Box>
                        </div>

                        <div className="ladodireito">
                            <Box
                                ml={30} // ajuste a margem esquerda conforme necessário
                                textAlign={"left"}
                                backgroundColor={"#D9D9D9"} // ajuste a cor de fundo conforme necessário
                                borderRadius="10px"
                                opacity={"30%"}
                                padding="30px"
                                height={"550px"}
                                width={"300px"} // ajuste a largura conforme necessário
                            >
                                <Text fontSize="lg" fontWeight="bold" mb={2}>Nome do Produto</Text>
                                <Input mb={4} placeholder="Digite o nome do produto" borderColor="gray.300" backgroundColor="white"/>

                                <Text fontSize="lg" fontWeight="bold" mb={2}>Informações</Text>
                                <Textarea mb={4} placeholder="Digite as informações" borderColor="gray.300" backgroundColor="white"/>

                                <Text fontSize="lg" fontWeight="bold" mb={2}>Descrição</Text>
                                <Textarea mb={4} placeholder="Digite a descrição" borderColor="gray.300" backgroundColor="white"/>

                                <Button bg="#76603F" colorScheme="brown" width="100%" mt={4}>
                                    <Text color={"white"}>Postar</Text>
                                </Button>
                            </Box>
                        </div>
                    </Flex>
                </div>
            </Container>
        </>
    );
}

export default AdicionarPosts;
