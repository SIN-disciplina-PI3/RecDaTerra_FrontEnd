import React, { useState, useEffect } from 'react'
import {Container, Flex, Box, Heading, Text, Image, Button, Divider, AspectRatio} from '@chakra-ui/react'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import cebola from '../../img/cebola.svg'
import couve from '../../img/couve.svg'
import pistache from '../../img/pistache.svg'
import ImgEvento from '../../img/ImgEvento.svg'
import ImgEvento2 from '../../img/ImgEvento2.svg'
import ImgEvento3 from '../../img/ImgEvento3.svg'
import ImgEvento4 from '../../img/ImgEvento4.svg'
import imgperfilProd from '../../img/imgperfilProd.svg'
import insta from '../../img/instagram.svg'

function VerProdutor() {
    const [slidesPerView, setSlidesPerView] = useState(() => (window.innerWidth < 768 ? 1 : 3));

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth < 768 ? 1 : 2);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Container mt={'50px'}>
                <Flex justifyContent={'space-around'} flexDirection={'column'}>
                    <Box display={'flex'} justifyContent={'center'} mb={'15px'}>
                        <Image src={imgperfilProd} />
                    </Box>
                    <Box textAlign={'center'} mb={'15px'}>
                        <Text color={'white'}>Produtor</Text>
                        <Heading color={'white'}>Láctea</Heading>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} mb={'15px'}>
                        <Button borderRadius={'15px'} backgroundColor={'#7ED957'}>Converse com Láctea</Button>
                        <Image src={insta} ml={'35px'} cursor={'pointer'} transition={'all 0.3s ease-in-out'} _hover={{transform: 'scale(1.2)'}} />
                    </Box>
                    <Box>
                        <Text color={'white'} ml={'15px'}>Bio</Text>
                        <Box p={'20px'} pb={'50px'} backgroundColor={'#FFFFFF'} opacity={'70%'} border={'1px solid black'} borderRadius={'15px'}>
                            <Text>Ah mano, produzo de tudo e... Vou falar mais nada nao vsf tmj</Text>
                        </Box>
                    </Box>
                </Flex>
            </Container>
            
            <Divider mt={'60px'} mb={'50px'} mx={'auto'} w={['320px', '380px', '450px', '750px', '1000px']} borderRadius={'25px'} borderWidth={'2px'} color={'#513636'} />

            <Container maxW={'100%'} textAlign={'center'}>
                <Box>
                    <Heading color={'white'}>Onde Encontrar o Láctea</Heading>
                </Box>
                <Box>
                    <AspectRatio maxW={'600px'} m={'20px'} border={'2px solid black'}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.4090385997188!2d-34.872593!3d-8.059692199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a2d9a71009%3A0xd8faf15c291bea0!2sCais%20do%20Apolo%2C%200%20-%20Recife%2C%20PE%2C%2050030-220!5e0!3m2!1spt-BR!2sbr!4v1715542184300!5m2!1spt-BR!2sbr"
                        ></iframe>
                    </AspectRatio>
                </Box>
                <Box>
                    <Text color={'white'}>Cais do Apolo, 000 - Recife Antigo</Text>
                </Box>
            </Container>

            <Divider mt={'60px'} mb={'60px'} mx={'auto'} w={['320px', '380px', '450px', '750px', '1000px']} borderRadius={'25px'} borderWidth={'2px'} color={'#513636'} />

            <Container maxW={'100%'}>
                <Box textAlign={'center'}>
                    <Heading color={'white'}>Produtor</Heading>
                    <Text color={'white'}>Produtos que Láctea oferece</Text>
                </Box>
                <Box display={'flex'} alignItems={'center'} textAlign={'center'}>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={slidesPerView}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Card maxW={['200px', '400px']} m={['25px' ,'90px']} backgroundColor={'#98FF68'} borderRadius={'40px'}>
                                <CardHeader p={'none'} display={'flex'} justifyContent={'space-around'}>
                                    <Image w={'100%'} src={cebola} alt='Imagem do evento'></Image>
                                </CardHeader>
                                <CardBody p={'none'}>
                                    <Box w={'100%'} p={'5px'} backgroundColor={'#98FF68'} borderBottomRadius={'10px'} textAlign={'center'} fontSize={'xl'}>
                                        Cebola
                                    </Box>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Card maxW={['200px', '400px']} m={['25px' ,'90px']} backgroundColor={'#98FF68'} borderRadius={'40px'}>
                                <CardHeader p={'none'} display={'flex'} justifyContent={'space-around'}>
                                    <Image w={'100%'} src={couve} alt='Imagem do evento'></Image>
                                </CardHeader>
                                <CardBody p={'none'}>
                                    <Box w={'100%'} p={'5px'} backgroundColor={'#98FF68'} borderBottomRadius={'10px'} textAlign={'center'} fontSize={'xl'}>
                                        Couve
                                    </Box>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Card maxW={['200px', '400px']} m={['25px' ,'90px']} backgroundColor={'#98FF68'} borderRadius={'40px'}>
                                <CardHeader p={'none'} display={'flex'} justifyContent={'space-around'}>
                                    <Image w={'100%'} src={pistache} alt='Imagem do evento'></Image>
                                </CardHeader>
                                <CardBody p={'none'}>
                                    <Box w={'100%'} p={'5px'} backgroundColor={'#98FF68'} borderBottomRadius={'10px'} textAlign={'center'} fontSize={'xl'}>
                                        Pistache
                                    </Box>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Card maxW={['200px', '400px']} m={['25px' ,'90px']} backgroundColor={'#98FF68'} borderRadius={'40px'}>
                                <CardHeader p={'none'} display={'flex'} justifyContent={'space-around'}>
                                    <Image w={'100%'} src={cebola} alt='Imagem do evento'></Image>
                                </CardHeader>
                                <CardBody p={'none'}>
                                    <Box w={'100%'} p={'5px'} backgroundColor={'#98FF68'} borderBottomRadius={'10px'} textAlign={'center'} fontSize={'xl'}>
                                        Cebola
                                    </Box>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Card maxW={['200px', '400px']} m={['25px' ,'90px']} backgroundColor={'#98FF68'} borderRadius={'40px'}>
                                <CardHeader p={'none'} display={'flex'} justifyContent={'space-around'}>
                                    <Image w={'100%'} src={couve} alt='Imagem do evento'></Image>
                                </CardHeader>
                                <CardBody p={'none'}>
                                    <Box w={'100%'} p={'5px'} backgroundColor={'#98FF68'} borderBottomRadius={'10px'} textAlign={'center'} fontSize={'xl'}>
                                        Couve
                                    </Box>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Card maxW={['200px', '400px']} m={['25px' ,'90px']} backgroundColor={'#98FF68'} borderRadius={'40px'} >
                                <CardHeader p={'none'} display={'flex'} justifyContent={'space-around'}>
                                    <Image w={'100%'} src={pistache} alt='Imagem do evento'></Image>
                                </CardHeader>
                                <CardBody p={'none'}>
                                    <Box w={'100%'} p={'5px'} backgroundColor={'#98FF68'} borderBottomRadius={'10px'} textAlign={'center'} fontSize={'xl'}>
                                        Pistache
                                    </Box>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </Container>

            <Divider mt={'60px'} mb={'60px'} mx={'auto'} w={['320px', '380px', '450px', '750px', '1000px']} borderRadius={'25px'} borderWidth={'2px'} color={'#513636'} />

            <Container maxW={'100%'} mb={'60px'}>
                <Box textAlign={'center'}>
                    <Heading color={'white'}>Eventos</Heading>
                    <Text color={'white'}>Eventos que Láctea participa</Text>
                </Box>
                <Box display={'flex'} alignItems={'center'} textAlign={'center'}>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={slidesPerView}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Card border={'1px solid black'} maxW={['360px', '600px']} m={['10px' ,'30px']}>
                                <CardHeader p={'none'} display={'flex'} justifyContent={'space-around'}>
                                    <Image w={'100%'} src={ImgEvento2} alt='Imagem do evento'></Image>
                                </CardHeader>
                                <CardBody p={'none'}>
                                    <Box w={'100%'} p={'5px'} backgroundColor={'#7ED957'} textAlign={'center'} fontSize={'xl'}>
                                        Titulo do Evento
                                    </Box>
                                    <Box p={'40px'} m={'10px'} backgroundColor={'#D9D9D9'} textAlign={'center'} border={'1px solid black'} borderRadius={'15px'}>
                                        Descrição Geral do Evento
                                    </Box>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Card border={'1px solid black'} maxW={['360px', '600px']} m={['10px' ,'30px']}>
                                <CardHeader p={'none'} display={'flex'} justifyContent={'space-around'}>
                                    <Image w={'100%'} src={ImgEvento} alt='Imagem do evento'></Image>
                                </CardHeader>
                                <CardBody p={'none'}>
                                    <Box w={'100%'} p={'5px'} backgroundColor={'#7ED957'} textAlign={'center'} fontSize={'xl'}>
                                        Titulo do Evento
                                    </Box>
                                    <Box p={'40px'} m={'10px'} backgroundColor={'#D9D9D9'} textAlign={'center'} border={'1px solid black'} borderRadius={'15px'}>
                                        Descrição Geral do Evento
                                    </Box>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Card border={'1px solid black'} maxW={['360px', '600px']} m={['10px' ,'30px']}>
                                <CardHeader p={'none'} display={'flex'} justifyContent={'space-around'}>
                                    <Image w={'100%'} src={ImgEvento3} alt='Imagem do evento'></Image>
                                </CardHeader>
                                <CardBody p={'none'}>
                                    <Box w={'100%'} p={'5px'} backgroundColor={'#7ED957'} textAlign={'center'} fontSize={'xl'}>
                                        Titulo do Evento
                                    </Box>
                                    <Box p={'40px'} m={'10px'} backgroundColor={'#D9D9D9'} textAlign={'center'} border={'1px solid black'} borderRadius={'15px'}>
                                        Descrição Geral do Evento
                                    </Box>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Card border={'1px solid black'} maxW={['360px', '600px']} m={['10px' ,'30px']}>
                                <CardHeader p={'none'} display={'flex'} justifyContent={'space-around'}>
                                    <Image w={'100%'} src={ImgEvento4} alt='Imagem do evento'></Image>
                                </CardHeader>
                                <CardBody p={'none'}>
                                    <Box w={'100%'} p={'5px'} backgroundColor={'#7ED957'} textAlign={'center'} fontSize={'xl'}>
                                        Titulo do Evento
                                    </Box>
                                    <Box p={'40px'} m={'10px'} backgroundColor={'#D9D9D9'} textAlign={'center'} border={'1px solid black'} borderRadius={'15px'}>
                                        Descrição Geral do Evento
                                    </Box>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                        <div className="swiper-button-prev" style={{ color: '#98FF68', paddingRight: '40px' }}></div>
                        <div className="swiper-button-next" style={{ color: '#98FF68', paddingLeft: '40px' }}></div>
                    </Swiper>
                </Box>
            </Container>
        </>
    )
}

export default VerProdutor;