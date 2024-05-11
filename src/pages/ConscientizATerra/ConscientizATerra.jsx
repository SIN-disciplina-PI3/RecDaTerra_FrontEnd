import { Flex, Box, Center, Text, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import NationalGeographic from '../../img/NationalGeographic'
import JoaoCampos1 from '../../img/JoaoCampos1'

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
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Box bg="#7ED957" color="white" p={4} borderRadius="20px" width="550px" height="530px" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                <Text textAlign="center" mt={3}>Texto do Slide 1</Text>
                                <Center>
                                    <Image src={NationalGeographic} alt="Imagem 1" />
                                </Center>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Box bg="#7ED957" color="white" p={4} borderRadius="20px" width="550px" height="530px" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                <Text textAlign="center" mt={3}>Texto do Slide 2</Text>
                                <Center>
                                    <Image src={JoaoCampos1} alt="Imagem 2" />
                                </Center>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Box bg="#7ED957" color="white" p={4} borderRadius="20px" width="550px" height="530px" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                <Text textAlign="center" mt={3}>Texto do Slide 3</Text>
                                <Center>
                                    <Image src="imagem3.jpg" alt="Imagem 3" />
                                </Center>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Box bg="#7ED957" color="white" p={4} borderRadius="20px" width="550px" height="530px" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                <Text textAlign="center" mt={3}>Texto do Slide 3</Text>
                                <Center>
                                    <Image src="imagem3.jpg" alt="Imagem 3" />
                                </Center>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Box bg="#7ED957" color="white" p={4} borderRadius="20px" width="550px" height="530px" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                <Text textAlign="center" mt={3}>Texto do Slide 3</Text>
                                <Center>
                                    <Image src="imagem3.jpg" alt="Imagem 3" />
                                </Center>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Box bg="#7ED957" color="white" p={4} borderRadius="20px" width="550px" height="530px" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                <Text textAlign="center" mt={3}>Texto do Slide 3</Text>
                                <Center>
                                    <Image src="imagem3.jpg" alt="Imagem 3" />
                                </Center>
                            </Box>
                        </SwiperSlide>

                    </Swiper>
                        <div className="swiper-button-prev" style={{ color: '#98FF68', marginleft: '40px' }}></div>
                        <div className="swiper-button-next" style={{ color: '#98FF68', marginRight: '10px' }}></div>
                </Box>
            </Flex>
        </div>
    );
}

export default ConscientizAterra;
