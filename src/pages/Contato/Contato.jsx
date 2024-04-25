import { Flex, Icon, Text, Card, CardBody, Image } from "@chakra-ui/react";
import NavbarSemPesquisa from "../../components/NavbarSemPesquisa/NavbarSemPesquisa";
import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import FotoGabriel from '../../img/FotoGabriel.png';
import FotoMatheus from '../../img/FotoMatheus.png';
import FotoArthur from '../../img/FotoArthur.png';
import FotoYuri from '../../img/FotoYuri.png';
import FotoCecilia from '../../img/FotoCecilia.png';

function Contato() {
    // Gabriel
  const linkedinURLGabriel = "https://www.linkedin.com/in/gabriel-henrique-lins/";
  const instagramURLGabriel = "https://www.instagram.com/_gaabs98/";
  const githubURLGabriel = "https://github.com/gabrielhilins";

//    Arthur
  const linkedinURLArthur = "https://www.linkedin.com/in/arthur-moraes-830815270/";
  const instagramURLArthur = "https://www.instagram.com/_gaabs98/";
  const githubURLArthur = "https://github.com/gabrielhilins";

//   Cecilia
  const linkedinURLCecilia= "https://www.linkedin.com/in/cecilia-sitcovsky-678919270/";
  const instagramURLCecilia = "https://www.instagram.com/csitcovsky/";
  const githubURLCecilia = "hhttps://github.com/Ceciliasitcovsky";

//   Matheus
  const linkedinURLMatheus = "";
  const instagramURLMatheus = "";
  const githubURLMatheus = "https://github.com/matheusviniciusga";

//   Yuri
  const linkedinURLYuri = "https://www.linkedin.com/in/yuri-catunda-5316402a3/";
  const instagramURLYuri = "https://www.instagram.com/yuri.catunda/";
  const githubURLYuri = "https://github.com/yuuricathugaa";

    return (
        <div className="container">
            <NavbarSemPesquisa />
                <Flex flexDirection={{ base: 'column', md: 'row' }} // Alinha os itens em coluna em telas pequenas e em linha em telas médias e maiores
                justify="center" // Centraliza os itens horizontalmente
                alignItems="center" // Centraliza os itens verticalmente
                flexWrap={{ base: 'nowrap', md: 'wrap' }}>
                    {/* Card Gabriel */}
                    <Card maxW="320px" textAlign="justified" m="4" backgroundColor="transparent">
                        <Image src={FotoGabriel} alt="LinkedIn" borderRadius="full" boxSize="150px" m="auto" backgroundColor="transparent" />
                        <Card backgroundColor={"#98FF68"} border="1px" borderColor="black" borderRadius="15px" textAlign="center" p="2">
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaLinkedin} size={30} />
                                <a 
                                    href={linkedinURLGabriel} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >Gabriel Henrique Lins</Text>
                                </a>
                            </CardBody>
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaInstagramSquare} size={30} />
                                <a 
                                    href={instagramURLGabriel} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >_gaabs98</Text>
                                </a>
                            </CardBody>
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaGithub} size={30} />
                                <a 
                                    href={githubURLGabriel} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >gabrielhilins</Text>
                                </a>
                            </CardBody>
                        </Card>
                    </Card>
                    {/* Card Arthur */}
                    <Card maxW="320px" textAlign="justified" m="4" backgroundColor="transparent">
                        <Image src={FotoArthur} alt="LinkedIn" borderRadius="full" boxSize="150px" m="auto" backgroundColor="transparent" />
                        <Card backgroundColor={"#98FF68"} border="1px" borderColor="black" borderRadius="15px" textAlign="center" p="2">
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaLinkedin} size={30} />
                                <a 
                                    href={linkedinURLArthur} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >Arthur Moraes</Text>
                                </a>
                            </CardBody>
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaInstagramSquare} size={30} />
                                <a 
                                    href={instagramURLArthur} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >081_neguinho</Text>
                                </a>
                            </CardBody>
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaGithub} size={30} />
                                <a 
                                    href={githubURLArthur} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >Lngg21</Text>
                                </a>
                            </CardBody>
                        </Card>
                    </Card>
                    {/* Card Yuri */}
                    <Card maxW="320px" textAlign="justified" m="4" backgroundColor="transparent">
                        <Image src={FotoYuri} alt="LinkedIn" borderRadius="full" boxSize="150px" m="auto" backgroundColor="transparent" />
                        <Card backgroundColor={"#98FF68"} border="1px" borderColor="black" borderRadius="15px" textAlign="center" p="2">
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaLinkedin} size={30} />
                                <a 
                                    href={linkedinURLYuri} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >Yuri Catunda</Text>
                                </a>
                            </CardBody>
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaInstagramSquare} size={30} />
                                <a 
                                    href={instagramURLYuri} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >yuri.catunda</Text>
                                </a>
                            </CardBody>
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaGithub} size={30} />
                                <a 
                                    href={githubURLYuri} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >yuuricathugaa</Text>
                                </a>
                            </CardBody>
                        </Card>
                    </Card>
                    {/* Card Matheus */}
                    <Card maxW="320px" textAlign="justified" m="4" backgroundColor="transparent">
                        <Image src={FotoMatheus} alt="LinkedIn" borderRadius="full" boxSize="150px" m="auto" backgroundColor="transparent" />
                        <Card backgroundColor={"#98FF68"} border="1px" borderColor="black" borderRadius="15px" textAlign="center" p="2">
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaLinkedin} size={30} />
                                <a 
                                    href={linkedinURLMatheus} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >Matheus Vinicius</Text>
                                </a>
                            </CardBody>
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaInstagramSquare} size={30} />
                                <a 
                                    href={instagramURLMatheus} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >matheus</Text>
                                </a>
                            </CardBody>
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaGithub} size={30} />
                                <a 
                                    href={githubURLMatheus} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >matheusviniciusga</Text>
                                </a>
                            </CardBody>
                        </Card>
                    </Card>
                    {/* Card Cecilia */}
                    <Card maxW="320px" textAlign="justified" m="4" backgroundColor="transparent">
                        <Image src={FotoCecilia} alt="LinkedIn" borderRadius="full" boxSize="150px" m="auto" backgroundColor="transparent" />
                        <Card backgroundColor={"#98FF68"} border="1px" borderColor="black" borderRadius="15px" textAlign="center" p="2">
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaLinkedin} size={30} />
                                <a 
                                    href={linkedinURLCecilia} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >Cecilia Sitcovsky</Text>
                                </a>
                            </CardBody>
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaInstagramSquare} size={30} />
                                <a 
                                    href={instagramURLCecilia} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >csitcovsky</Text>
                                </a>
                            </CardBody>
                            <CardBody display="flex" alignItems="center" justifyContent="center">
                                <Icon as={FaGithub} size={30} />
                                <a 
                                    href={githubURLCecilia} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ textDecoration: 'none', color: 'inherit', marginLeft: '4px' }}
                                >
                                    <Text _hover={{ textDecoration: 'underline' }} >CeciliaSitcovsky</Text>
                                </a>
                            </CardBody>
                        </Card>
                    </Card>
                </Flex>
        </div>
    );
    
}

export default Contato;
