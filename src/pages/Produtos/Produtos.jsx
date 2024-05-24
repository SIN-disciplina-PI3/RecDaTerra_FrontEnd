import React from 'react';
import { Flex, Button, Text, Image, Heading, Center } from '@chakra-ui/react';
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
            <Center>
                <Heading as="h1" textAlign="center" color="#98FF68" mt={8} mb={10}>
                    Catálogo de Produtos
                </Heading>
            </Center>
            <Flex justifyContent="center" flexWrap="wrap" flexDirection={{ base: 'column', md: 'row' }}>
                <Flex
                    flexDirection="column"
                    alignItems="center"
                    marginRight={[0, 0, 100]} // Espaçamento horizontal entre as colunas, responsivo
                    marginBottom={8} // Espaçamento entre os blocos de botões
                >
                    <Button
                        marginBottom={4}
                        backgroundColor={'#F0DD32'}
                        borderRadius={15}
                        width={['calc(50% - 20px)', '360px']} // 50% do container menos o espaçamento para telas menores, 360px para telas maiores
                        height={'90px'}
                        justifyContent={'center'}
                        paddingLeft={4}
                        display="flex"
                        alignItems="center"
                    >
                        <Text color={'black'} fontWeight={'bold'} marginRight={4}>Alimentos Veg</Text>
                        <Image src={Veg} alt='icone veg' />
                    </Button>
                    <Button
                        marginBottom={4}
                        backgroundColor={'#E29FAB'}
                        borderRadius={15}
                        width={['calc(50% - 20px)', '360px']} // 50% do container menos o espaçamento para telas menores, 360px para telas maiores
                        height={'90px'}
                        justifyContent={'center'}
                        display="flex"
                        alignItems="center"
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={4}>Cosméticos</Text>
                        <Image src={Cosmetico} alt='icone cosmeticos' />
                    </Button>
                    <Button
                        marginBottom={4}
                        backgroundColor={'#FFFFFF'}
                        borderRadius={15}
                        width={['calc(50% - 20px)', '360px']} // 50% do container menos o espaçamento para telas menores, 360px para telas maiores
                        height={'90px'}
                        justifyContent={'center'}
                        display="flex"
                        alignItems="center"
                    >
                        <Text color={'black'} fontWeight={'bold'} marginRight={4}>Jardinagem</Text>
                        <Image src={Jardinagem} alt='icone jardinagem' />
                    </Button>
                    <Button
                        marginBottom={4}
                        backgroundColor={'#6957D9'}
                        borderRadius={15}
                        width={['calc(50% - 20px)', '360px']} // 50% do container menos o espaçamento para telas menores, 360px para telas maiores
                        height={'90px'}
                        justifyContent={'center'}
                        display="flex"
                        alignItems="center"
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={4}>Limpeza</Text>
                        <Image src={Limpeza} alt='icone limpeza' />
                    </Button>
                    <Button
                        marginBottom={4}
                        backgroundColor={'#8A9784'}
                        borderRadius={15}
                        width={['calc(50% - 20px)', '360px']} // 50% do container menos o espaçamento para telas menores, 360px para telas maiores
                        height={'90px'}
                        justifyContent={'center'}
                        display="flex"
                        alignItems="center"
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={4}>Reciclados</Text>
                        <Image src={Reciclados} alt='icone reciclados' />
                    </Button>
                </Flex>
                <Flex
                    flexDirection="column"
                    alignItems="center"
                    marginLeft={[0, 0, 100]} // Espaçamento horizontal entre as colunas, responsivo
                >
                    <Button
                        marginBottom={4}
                        backgroundColor={'#D9AC7E'}
                        borderRadius={15}
                        width={['calc(50% - 20px)', '360px']} // 50% do container menos o espaçamento para telas menores, 360px para telas maiores
                        height={'90px'}
                        justifyContent={'center'}
                        display="flex"
                        alignItems="center"
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={4}>Artesanato</Text>
                        <Image src={Artesanato} alt='icone artesanato' />
                    </Button>
                    <Button
                        marginBottom={4}
                        backgroundColor={'#95E0F8'}
                        borderRadius={15}
                        width={['calc(50% - 20px)', '360px']} // 50% do container menos o espaçamento para telas menores, 360px para telas maiores
                        height={'90px'}
                        justifyContent={'center'}
                        display="flex"
                        alignItems="center"
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={4}>Higiene</Text>
                        <Image src={Higiene} alt='icone higiene' />
                    </Button>
                    <Button
                        marginBottom={4}
                        backgroundColor={'#D34B10'}
                        borderRadius={15}
                        width={['calc(50% - 20px)', '360px']} // 50% do container menos o espaçamento para telas menores, 360px para telas maiores
                        height={'90px'}
                        justifyContent={'center'}
                        display="flex"
                        alignItems="center"
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={4}>Legumes</Text>
                        <Image src={Legumes} alt='icone legumes' />
                    </Button>
                    <Button
                        marginBottom={4}
                        backgroundColor={'#D42121'}
                        borderRadius={15}
                        width={['calc(50% - 20px)', '360px']} // 50% do container menos o espaçamento para telas menores, 360px para telas maiores
                        height={'90px'}
                        justifyContent={'center'}
                        display="flex"
                        alignItems="center"
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={4}>Moda</Text>
                        <Image src={Moda} alt='icone moda' />
                    </Button>
                    <Button
                        marginBottom={4}
                        backgroundColor={'#80A73A'}
                        borderRadius={15}
                        width={['calc(50% - 20px)', '360px']} // 50% do container menos o espaçamento para telas menores, 360px para telas maiores
                        height={'90px'}
                        justifyContent={'center'}
                        display="flex"
                        alignItems="center"
                    >
                        <Text color={'white'} fontWeight={'bold'} marginRight={4}>Verduras</Text>
                        <Image src={Verdura} alt='icone verdura' />
                    </Button>
                </Flex>
            </Flex>
        </div>
    );
}

export default Produtos;
