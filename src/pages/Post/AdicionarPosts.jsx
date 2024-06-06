import React, { useState } from "react";
import {
  Container,
  Select,
  Box,
  Text,
  Flex,
  Input,
  Textarea,
  Button,
  Link,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { PiUploadSimpleBold } from "react-icons/pi";

function AdicionarPosts() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("produto"); // Estado para controlar a opção selecionada
  const [estoque, setEstoque] = useState(0); // Estado para controlar o valor do estoque
  const [telefone, setTelefone] = useState("");
  const [instagram, setInstagram] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedFile(file);
      setImageUrl(imageUrl);
    } else {
      // Exibir mensagem de erro ou ignorar arquivo
      console.log("Por favor, selecione um arquivo JPG ou PNG.");
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setImageUrl("");
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleEstoqueChange = (value) => {
    setEstoque(value);
  };

  const formatarTelefone = (value) => {
    // Remover qualquer caractere que não seja número
    const onlyNums = value.replace(/[^\d]/g, "");
    // Aplicar a máscara de telefone com DDD
    let formattedTelefone = "";
    if (onlyNums.length > 0) {
      formattedTelefone = "(" + onlyNums.substring(0, 2);
    }
    if (onlyNums.length > 2) {
      formattedTelefone += ") " + onlyNums.substring(2, 7);
    }
    if (onlyNums.length > 7) {
      formattedTelefone += "-" + onlyNums.substring(7, 11);
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
    if (value.length === 1 && value !== "@") {
      formattedInstagram = "@" + value;
    }
    setInstagram(formattedInstagram);
  };

  return (
    <div className="container">
      <Container maxW={"100%"}>
      <Box mb={"40px"} maxWidth="300px" mx="auto">
    <Select
        backgroundColor={"#D9D9D9"}
        width={"100%"}
        borderRadius={"20px"}
        value={selectedOption}
        onChange={handleSelectChange}
    >
        <option value="produto">Produto</option>
        <option value="evento">Evento</option>
    </Select>
    </Box>

        <Flex
          justify="center"
          align="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <div className="ladoesquerdo">
            <Box
              textAlign={"center"}
              mr={30}
              ml={30}
              backgroundColor={"#D9D9D9"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent="center"
              alignItems="center"
              width={{base: "400px", md: "700px"}}
              height={"auto"} // Altura dinâmica conforme a opção selecionada
              marginBottom={"100px"}
              borderRadius={"20px"}
              padding="30px"
            >
              {imageUrl ? (
                <>
                  <img
                    src={imageUrl}
                    alt="Imagem selecionada"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      borderRadius: "20px",
                    }}
                  />
                  <Link
                    mt={4}
                    onClick={handleRemoveFile}
                    variant="link"
                    size="sm"
                    textDecoration={"underline"}
                  >
                    Remover arquivo
                  </Link>
                </>
              ) : (
                <>
                  <PiUploadSimpleBold size="100px" color="#6A554E" />
                  <Text
                    fontSize={20}
                    whiteSpace={"nowrap"}
                    color="#6A554E"
                    mt={4} // Adicionando margem superior
                  >
                    Adicione uma imagem do seu{" "}
                    {selectedOption === "produto" ? "produto" : "evento"}
                  </Text>
                  <input
                    type="file"
                    id="fileInput"
                    accept=".jpg, .png"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  {selectedFile ? null : (
                    <label
                      htmlFor="fileInput"
                      style={{
                        cursor: "pointer",
                        marginTop: "10px",
                        textDecoration: "underline",
                        color: "#4973DE",
                      }}
                    >
                      Escolher arquivo
                    </label>
                  )}
                </>
              )}
            </Box>
          </div>

          <div className="ladodireito">
            <Box
              ml={30}
              textAlign={"left"}
              backgroundColor={"#D9D9D9"}
              borderRadius="20px"
              padding="30px"
              height={"auto"} // Altura dinâmica conforme a opção selecionada
              width={"300px"}
              marginBottom="100px"
            >
              {selectedOption === "produto" ? (
                <>
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    color={"#524541"}
                  >
                    Nome do Produto
                  </Text>
                  <Input
                    mb={4}
                    placeholder={`Digite o nome do produto`}
                    borderColor="gray.300"
                    backgroundColor="white"
                  />
                 
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    color={"#524541"}
                  >
                    Descrição
                  </Text>
                  <Textarea
                    mb={4}
                    placeholder={`Digite a descrição`}
                    borderColor="gray.300"
                    backgroundColor="white"
                  />

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    color={"#524541"}
                  >
                    Categoria
                  </Text>
                  <Select
                    mb={4}
                    placeholder="Selecione a categoria"
                    borderColor="gray.300"
                    backgroundColor="white"
                  >
                    <option value="Alimentos Veg">Alimentos Veg</option>
                    <option value="Artesanato">Artesanato</option>
                    <option value="Cosmético">Cosmético</option>
                    <option value="Jardinagem">Jardinagem</option>
                    <option value="Limpeza">Limpeza</option>
                    <option value="Reciclados">Reciclados</option>
                    <option value="Higiene">Higiene</option>
                    <option value="Legumes">Legumes</option>
                    <option value="Moda">Moda</option>
                    <option value="Verdura">Verdura</option>
                  </Select>

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    color={"#524541"}
                  >
                    Estoque
                  </Text>
                  <Slider
                    aria-label="slider-estoque"
                    value={estoque}
                    min={0}
                    max={100}
                    step={1}
                    onChange={handleEstoqueChange}
                  >
                    <SliderTrack bg="gray.100">
                      <SliderFilledTrack bg="#76603F" />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                  </Slider>
                  <Text fontSize="lg" mb={2} mt={4} color={"#524541"}>
                    Quantidade: {estoque}
                  </Text>

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    mt={4}
                    color={"#524541"}
                  >
                    Disponibilidade
                  </Text>
                  <Select
                    mb={4}
                    placeholder="Selecione a disponibilidade"
                    borderColor="gray.300"
                    backgroundColor="white"
                  >
                    <option value="disponivel">Disponível</option>
                    <option value="nao-disponivel">Não disponível</option>
                  </Select>
                </>
              ) : (
                <>
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    color={"#524541"}
                  >
                    Nome do Evento
                  </Text>
                  <Input
                    required
                    mb={4}
                    placeholder={`Digite o nome do evento`}
                    borderColor="gray.300"
                    backgroundColor="white"
                  />

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    color={"#524541"}
                  >
                    Informações
                  </Text>
                  <Textarea
                    required
                    mb={4}
                    placeholder={`Digite as informações do evento`}
                    borderColor="gray.300"
                    backgroundColor="white"
                  />

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    color={"#524541"}
                  >
                    Descrição
                  </Text>
                  <Textarea
                    mb={4}
                    placeholder={`Digite a descrição do evento`}
                    borderColor="gray.300"
                    backgroundColor="white"
                  />

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    color={"#524541"}
                  >
                    Saiba mais
                  </Text>
                  <Input
                    mb={4}
                    placeholder={`Link para mais informações`}
                    borderColor="gray.300"
                    backgroundColor="white"
                  />

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    color={"#524541"}
                  >
                    Telefone
                  </Text>
                  <Input
                    mb={4}
                    type="tel"
                    placeholder={`Digite o telefone de contato`}
                    borderColor="gray.300"
                    backgroundColor="white"
                    value={telefone}
                    onChange={(e) => handleChangeTelefone(e.target.value)}
                  />

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    color={"#524541"}
                  >
                    Instagram
                  </Text>
                  <Input
                    mb={4}
                    placeholder={`Digite o Instagram de contato`}
                    borderColor="gray.300"
                    backgroundColor="white"
                    value={instagram}
                    onChange={(e) => handleChangeInstagram(e.target.value)}
                  />
                </>
              )}

              <Button
                bg="#76603F"
                color="white"
                width="100%"
                mt={4}
                _hover={{ bg: "#5C4D31" }}
                _active={{ bg: "#5C4D31" }}
                _focus={{ outline: "none" }}
                borderRadius="10px"
              >
                Postar
              </Button>
            </Box>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default AdicionarPosts;
