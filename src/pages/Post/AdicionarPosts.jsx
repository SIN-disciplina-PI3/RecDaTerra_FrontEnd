import { useState } from "react";
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
  Spinner,
  Alert,
  AlertIcon,
  SliderThumb
} from "@chakra-ui/react";
import { PiUploadSimpleBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function AdicionarPosts() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("produto");
  const [nomeEvento, setNomeEvento] = useState("");
  const [informacoes, setInformacoes] = useState("");
  const [descricao, setDescricao] = useState("");
  const [saibaMaisEvento, setSaibaMaisEvento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estoque, setEstoque] = useState(0);
  const [disponibilidade, setDisponibilidade] = useState("");
  const [fotoProduto, setFotoProduto] = useState("");
  const [fotoEvento, setFotoEvento] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alerta, setAlerta] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedFile(file);
      setImageUrl(imageUrl);
    } else {
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
    if (value === 0) {
      setDisponibilidade("indisponivel");
    }
  };

  const formatarTelefone = (value) => {
    const onlyNums = value.replace(/[^\d]/g, "");
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

  const handlePostar = async () => {
    setAlerta(false); // Resetando o alerta ao tentar postar novamente
  
    if (selectedOption === "evento") {
      if (
        nomeEvento &&
        informacoes &&
        descricao &&
        saibaMaisEvento &&
        telefone &&
        imageUrl
      ) {
        const eventoData = {
          nomeEvento,
          informacoes,
          descricao,
          saibaMaisEvento,
          fotoEvento: imageUrl,
          contato: telefone,
          dataEvento: new Date().toISOString(),
          produtores: [],
        };
  
        try {
          setIsLoading(true);
          const response = await fetch(
            "http://localhost:8080/api/eventos/criar",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(eventoData),
            }
          );
  
          console.log("JSON enviado para criação do Evento:", eventoData);
  
          if (response.ok) {
            console.log("Evento criado com sucesso!");
            navigate("/home");
          } else {
            console.log("Erro ao criar evento.");
          }
        } catch (error) {
          console.log("Erro ao enviar requisição:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setAlerta(true); // Mostrar alerta se algum campo estiver vazio
      }
    } else if (selectedOption === "produto") {
      if (
        nomeProduto &&
        descricao &&
        categoria &&
        estoque > 0 &&
        imageUrl
      ) {
        const produtoData = {
          nomeProduto,
          descricao,
          categoria,
          estoque,
          disponibilidade: disponibilidade === "disponivel" ? true : false,
          fotoProduto: imageUrl,
          dataRegistroProduto: new Date().toISOString(),
        };
  
        try {
          setIsLoading(true);
          const response = await fetch(
            "http://localhost:8080/api/produtos/criar",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(produtoData),
            }
          );
  
          console.log("JSON enviado para criação do produto:", produtoData);
  
          if (response.ok) {
            console.log("Produto criado com sucesso!");
            navigate("/home");
          } else {
            console.log("Erro ao criar produto.");
          }
        } catch (error) {
          console.log("Erro ao enviar requisição:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setAlerta(true); // Mostrar alerta se algum campo estiver vazio
      }
    }
  };
  

  return (
    <div className="container">
      <Container maxW={"100%"}>
      {alerta && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            Por favor, preencha todos os campos antes de postar.
          </Alert>
        )}
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
              width={{ base: "400px", md: "700px" }}
              height={"auto"}
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
                    mt={4}
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
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              ml={30}
              textAlign={"left"}
              backgroundColor={"#D9D9D9"}
              borderRadius="20px"
              padding="30px"
              height={"auto"}
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
                    value={nomeProduto}
                    onChange={(e) => setNomeProduto(e.target.value)}
                  />
                 
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    mt={4}
                    color={"#524541"}
                  >
                    Descrição
                  </Text>
                  <Textarea
                    mb={4}
                    placeholder={`Digite a descrição`}
                    borderColor="gray.300"
                    backgroundColor="white"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  />

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    color={"#524541"}
                    mt={4}
                  >
                    Categoria
                  </Text>
                  <Select
                    mb={4}
                    placeholder="Selecione a categoria"
                    borderColor="gray.300"
                    backgroundColor="white"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
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
                    mt={4}
                    color={"#524541"}
                  >
                    Estoque
                  </Text>
                  <Slider
                    defaultValue={0}
                    min={0}
                    max={100}
                    step={1}
                    onChange={handleEstoqueChange}
                    mb={2}
                  >
                    <SliderTrack bg="white">
                      <SliderFilledTrack bg="#438545" />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                  </Slider>
                  <Text fontSize="lg" mb={2} mt={0} color={"#438545"}>
                    Quantidade: {estoque}
                  </Text>

                  <Text
                  fontSize="lg"
                  fontWeight="bold"
                  mb={2}
                  color={"#524541"}
                  mt={4}
                >
                  Disponibilidade
                </Text>
                <Text
                  mb={4}
                  borderColor="gray.300"
                  backgroundColor="white"
                  p={2}
                  borderRadius="md"
                >
                  {estoque > 0 ? "Disponível" : "Indisponível"}
                </Text>
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
                    mb={4}
                    placeholder={`Digite o nome do evento`}
                    borderColor="gray.300"
                    backgroundColor="white"
                    value={nomeEvento}
                    onChange={(e) => setNomeEvento(e.target.value)}
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
                    mb={4}
                    placeholder={`Digite as informações do evento`}
                    borderColor="gray.300"
                    backgroundColor="white"
                    value={informacoes}
                    onChange={(e) => setInformacoes(e.target.value)}
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
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  />

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    color={"#524541"}
                  >
                    Saiba mais sobre o evento
                  </Text>
                  <Input
                    mb={4}
                    placeholder={`Digite um link para mais informações`}
                    borderColor="gray.300"
                    backgroundColor="white"
                    value={saibaMaisEvento}
                    onChange={(e) => setSaibaMaisEvento(e.target.value)}
                  />

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                    color={"#524541"}
                  >
                    Telefone de Contato
                  </Text>
                  <Input
                    mb={4}
                    placeholder={`Digite o telefone`}
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
                    placeholder={`Digite o Instagram`}
                    borderColor="gray.300"
                    backgroundColor="white"
                    value={instagram}
                    onChange={(e) => handleChangeInstagram(e.target.value)}
                  />
                </>
              )}

              <Button
                backgroundColor={"#76603F"}
                color={"white"}
                onClick={handlePostar}
                isFullWidth
                mt={4}
                disabled={isLoading}
              >
                {isLoading ? <Spinner size="sm" /> : "Postar"}
              </Button>
            </Box>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default AdicionarPosts;
