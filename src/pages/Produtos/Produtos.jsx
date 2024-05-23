import { Flex, Button, Text, Image } from '@chakra-ui/react';
import Veg from '../../img/Veg.png'
import Cosmetico from '../../img/Perfume.png'
import Jardinagem from '../../img/Jardinagem.png'
import Limpeza from '../../img/Limpeza.png'
import Reciclados from '../../img/Reciclados.png'
import Higiene from '../../img/Sabonete.png'
import Legumes from '../../img/Legumes.png'
import Moda from '../../img/Moda.png'
import Verdura from '../../img/Verdura.png'
import Artesanato from '../../img/Artesanato.png'

function Produtos() {
    return (
        <div className="container">
            <div className="title">
                Catálogo de Produtos
            </div>
            <Flex justifyContent="center" flexWrap="wrap" mt={'60px'}>
                <Flex
                    display="flex"
                    flexDirection="column"
                    marginRight={100} // Espaçamento horizontal entre as colunas
                >
                    <Button
                        marginBottom={10}
                        backgroundColor={'#F0DD32'}
                        borderRadius={15}
                        width={"360px"}
                        height={'90px'}
                        justifyContent={'center'} // Alinhar o conteúdo do botão à esquerda
                        paddingLeft={4} // Espaçamento à esquerda do conteúdo do botão
                    >
                        <Text color={'black'} fontWeight={'bold'} marginRight={20}>Alimentos Veg</Text>
                        <Image src={Veg} alt='icone veg' ml={20}></Image>
                    </Button>
                    <Button
                        marginBottom={10}
                        backgroundColor={'#E29FAB'}
                        borderRadius={15}
                        width={"360px"}
                        height={'90px'}
                        justifyContent={'center'} // Alinhar o conteúdo do botão à esquerda
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={20}>Cosméticos</Text>
                        <Image src={Cosmetico} alt='icone cosmeticos' ml={20}></Image>
                    </Button>
                    <Button
                        marginBottom={10}
                        backgroundColor={'#FFFFFF'}
                        borderRadius={15}
                        width={"360px"}
                        height={'90px'}
                        justifyContent={'center'} // Alinhar o conteúdo do botão à esquerda
                    >
                        <Text color={'black'} fontWeight={'bold'} marginRight={20}>Jardinagem</Text>
                        <Image src={Jardinagem} alt='icone jardinagem' ml={20}></Image>
                    </Button>
                    <Button
                        marginBottom={10}
                        backgroundColor={'#6957D9'}
                        borderRadius={15}
                        width={"360px"}
                        height={'90px'}
                        justifyContent={'center'} // Alinhar o conteúdo do botão à esquerda
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={20}>Limpeza</Text>
                        <Image src={Limpeza} alt='icone limpeza' ml={20}></Image>
                    </Button>
                    <Button
                        marginBottom={10}
                        backgroundColor={'#8A9784'}
                        borderRadius={15}
                        width={"360px"}
                        height={'90px'}
                        justifyContent={'center'} // Alinhar o conteúdo do botão à esquerda
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={20}>Reciclados</Text>
                        <Image src={Reciclados} alt='icone reciclados' ml={20}></Image>
                    </Button>
                </Flex>
                <Flex
                    display="flex"
                    flexDirection="column"
                    marginLeft={100} // Espaçamento horizontal entre as colunas
                >
                    <Button
                        marginBottom={10}
                        backgroundColor={'#D9AC7E'}
                        borderRadius={15}
                        width={"360px"}
                        height={'90px'}
                        justifyContent={'center'} // Alinhar o conteúdo do botão à esquerda
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={20}>Artesanato</Text>
                        <Image src={Artesanato} alt='icone artesanato' ml={20}></Image>
                    </Button>
                    <Button
                        marginBottom={10}
                        backgroundColor={'#95E0F8'}
                        borderRadius={15}
                        width={"360px"}
                        height={'90px'}
                        justifyContent={'center'} // Alinhar o conteúdo do botão à esquerda
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={20}>Higiene</Text>
                        <Image src={Higiene} alt='icone higiene' ml={20}></Image>
                    </Button>
                    <Button
                        marginBottom={10}
                        backgroundColor={'#D34B10'}
                        borderRadius={15}
                        width={"360px"}
                        height={'90px'}
                        justifyContent={'center'} // Alinhar o conteúdo do botão à esquerda
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={20}>Legumes</Text>
                        <Image src={Legumes} alt='icone legumes' ml={20}></Image>
                    </Button>
                    <Button
                        marginBottom={10}
                        backgroundColor={'#D42121'}
                        borderRadius={15}
                        width={"360px"}
                        height={'90px'}
                        justifyContent={'center'} // Alinhar o conteúdo do botão à esquerda
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={20}>Moda</Text>
                        <Image src={Moda} alt='icone moda' ml={20}></Image>
                    </Button>
                    <Button
                        marginBottom={10}
                        backgroundColor={'#80A73A'}
                        borderRadius={15}
                        width={"360px"}
                        height={'90px'}
                        justifyContent={'center'} // Alinhar o conteúdo do botão à esquerda

                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={20}>Verduras</Text>
                        <Image src={Verdura} alt='icone verdura' ml={20}></Image>
                    </Button>
                </Flex>
            </Flex>
        </div>
    );
}

export default Produtos;
