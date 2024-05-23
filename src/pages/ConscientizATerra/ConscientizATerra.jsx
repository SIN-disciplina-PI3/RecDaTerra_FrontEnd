import { Flex, Box, Center, Text, Image, Link } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Imagem1 from '../../img/NationalGeographic.png'
import Imagem2 from '../../img/JoaoCampos1.png'
import Imagem3 from '../../img/FolhaPE.jpeg'
import Imagem4 from '../../img/reciclagem-em-familia.jpg'
import Imagem5 from '../../img/RLHigiene.webp'
import Imagem6 from '../../img/InvesteRecife.jpeg'

function ConscientizAterra() {
    return (
        <div className="container">
            <Flex direction="column" align="center">
                <Center>
                    <div className="title">
                        <h1>ConscientizATerra</h1>
                    </div>
                </Center>
                <Center mb="20px">
                    <Text as="p" color={'white'} opacity={0.9} fontSize={14} maxW={700} textAlign={'justify'} mt={3}>Aqui você vai encontrar as melhores informações, notícias, curiosidades e dicas sobre o mundo da sustentabilidade, agricultura, artesanato, nutrição, higiene, entre outras conhecimentos que ajudam a ConscientizAr a nossa Terra</Text>
                </Center>
                <Box w="90%" h="auto" display="flex" justifyContent="center" alignItems="center" pt={70}>
                    <Swiper
                        slidesPerView={2} 
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true} 
            
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Box bg="#7ED957" color="white" p={4} borderRadius="20px" width="550px" height="530px" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                <Text textAlign="justify" mt={3} mb={8}>Segundo a <Text as="span" color={'#7A5448'} fontWeight={'bold'}>Agência Internacional de Energia Renovável (IRENA)</Text>, a instalação de painéis solares pode reduzir significativamente a pegada de carbono de uma casa ao longo do tempo.</Text>
                                <Center>
                                    <Image src={Imagem1} alt="Imagem 1" />
                                </Center>
                               <Link href='https://www.nationalgeographicbrasil.com/meio-ambiente/2022/04/a-energia-solar-e-um-caminho-para-reduzir-o-aquecimento-global' textDecoration={'underline'} pt={2}>Saiba mais</Link>
                                <Text pt={2} mb={2} fontSize={'11px'} color={'white'} opacity={0.7}>Fonte: National Geographic</Text>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Box bg="#7ED957" color="white" p={4} borderRadius="20px" width="550px" height="530px" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                <Text textAlign="justify" mt={3} mb={8}><Text as="span" color={'#7A5448'} fontWeight={'bold'}>Prefeitura do Recife</Text> inaugura Econúcleo dedicado à educação ambiental na Lagoa do Araçá.</Text>
                                <Center>
                                    <Image src={Imagem2} alt="Imagem 2" />
                                </Center>
                                <Link href='https://www2.recife.pe.gov.br/noticias/25/03/2024/prefeitura-do-recife-inaugura-econucleo-dedicado-educacao-ambiental-na-lagoa-do' textDecoration={'underline'} pt={2}>Saiba mais</Link>
                                <Text pt={2} mb={2} fontSize={'11px'} color={'white'} opacity={0.7}>Fonte: Prefeitura do Recife</Text>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Box bg="#7ED957" color="white" p={4} borderRadius="20px" width="550px" height="530px" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                <Text textAlign="justify" mt={3} mb={8}><Text as="span" color={'#7A5448'} fontWeight={'bold'}>Governo do Estado de Pernambuco</Text> promove ações para incentivar agricultores familiares no Estado</Text>
                                <Center>
                                    <Image src={Imagem3} alt="Imagem 3" borderRadius={20}/>
                                </Center>
                                <Link href='https://www.folhape.com.br/economia/governo-de-pernambuco-promove-acoes-para-incentivar-agricultores/317502/' textDecoration={'underline'} pt={2}>Saiba mais</Link>
                                <Text pt={2} mb={2} fontSize={'11px'} color={'white'} opacity={0.7}>Fonte: Folha de Pernambuco</Text>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Box bg="#7ED957" color="white" p={4} borderRadius="20px" width="550px" height="530px" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                <Text textAlign="justify" mt={3} mb={8}><Text as="span" color={'#7A5448'} fontWeight={'bold'}>13 Hbábitos Sustentáveis </Text> que ajudam o planeta e economizam dinheiro</Text>
                                <Center>
                                    <Image src={Imagem4} alt="Imagem 4" borderRadius={20}/>
                                </Center>
                                <Link href='https://blog.cresol.com.br/habitos-sustentaveis-que-ajudam-o-planeta-e-economizam-dinheiro/' textDecoration={'underline'} pt={2}>Saiba mais</Link>
                                <Text pt={2} mb={2} fontSize={'11px'} color={'white'} opacity={0.7}>Fonte: Blog Cresol</Text>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Box bg="#7ED957" color="white" p={4} borderRadius="20px" width="550px" height="530px" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                <Text textAlign="justify" mt={3} mb={8}><Text as="span" color={'#7A5448'} fontWeight={'bold'}>Os 12 Princípios da Limpeza Sustentável</Text> da RL Higiene</Text>
                                <Center>
                                    <Image src={Imagem5} alt="Imagem 5" borderRadius={20}/>
                                </Center>
                                <Link href='https://rl.com.br/12-principios-limpeza-sustentavel/' textDecoration={'underline'} pt={2}>Saiba mais</Link>
                                <Text pt={2} mb={2} fontSize={'11px'} color={'white'} opacity={0.7}>Fonte: RL Higiene</Text>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Box bg="#7ED957" color="white" p={4} borderRadius="20px" width="550px" height="530px" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                <Text textAlign="justify" mt={3} mb={8}><Text as="span" color={'#7A5448'} fontWeight={'bold'}>Recife</Text> é a melhor capital do Nordeste em desenvolvimento sustentável</Text>
                                <Center>
                                    <Image src={Imagem6} alt="Imagem 6" borderRadius={20}/>
                                </Center>
                                <Link href='https://investerecife.recife.pe.gov.br/recife-e-melhor-capital-do-nordeste-em-desenvolvimento-sustentavel' textDecoration={'underline'} pt={2}>Saiba mais</Link>
                                <Text pt={2} mb={2} fontSize={'11px'} color={'white'} opacity={0.7}>Fonte: Investe Recife</Text>
                            </Box>
                        </SwiperSlide>

                    </Swiper>
                        <div className="swiper-button-prev" style={{ color: '#98FF68', marginleft: '40px', marginTop: '60px' }}></div>
                        <div className="swiper-button-next" style={{ color: '#98FF68', marginRight: '10px', marginTop: '60px' }}></div>
                </Box>
            </Flex>
        </div>
    );
}

export default ConscientizAterra;
