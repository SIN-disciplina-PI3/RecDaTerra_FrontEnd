import React, { useState, useEffect } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from "react-router-dom"
import { Flex, Heading, Box, Container, Image, Text, Link, Button, Divider } from '@chakra-ui/react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import ImgVisi from '../../img/ImagemVisi.svg'
import ImgDest from '../../img/ImgDestaque.svg'
import ImgDest2 from '../../img/ImgScroll2.svg'
import ImgDest3 from '../../img/ImgScroll3.svg'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function PaginaInicial() {
    const swiper = useSwiper();

    const [slidesPerView, setSlidesPerView] = useState(() => (window.innerWidth < 768 ? 1 : 3));

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSlidePrev = () => {
        if (swiper) {
            console.log('Slide anterior');
            swiper.slidePrev();
        }
    };

    const handleSlideNext = () => {
        if (swiper) {
            console.log('Próximo slide');
            swiper.slideNext();
        }
    };    

    return (
        <>
            <Container maxW={'100%'} alignItems={'center'} display={'flex'} justifyContent={'space-evenly'} mt={'80px'} flexDirection={['column', 'row']}>
                <Box>
                    <Box mb={'40px'} textAlign={['center', 'left']}>
                        <Heading fontSize={'60px'} color={'#98FF68'}>Bem Vindo ao RecDaTerra</Heading>
                        <Text color={'white'}>Conectando produtores Locais e Pernambucanos Conscientes</Text>
                    </Box>
                    <Box textAlign={'center'} mb={['20px', '0px']}>
                        <Link as={RouterLink} to="/cadastro">
                            <Button
                                pl={'30px'} pr={'30px'}
                                borderRadius={'15px'}
                                color={'#76603F'}
                                fontWeight='regular'
                                backgroundColor={'#98FF68'}
                                boxShadow='7px 7px 10px rgba(0, 0, 0, 0.1)'
                                transition='all 0.3s ease-in-out'
                            >Cadastre-se já</Button>
                        </Link>
                        <Box justifyContent={'space-around'}>
                            <Text color={'white'}>Ou</Text>
                        </Box>
                        <Link as={RouterLink} to="/home">
                            <Text color={'white'} _hover={{ textDecoration: 'underline', color: 'white' }}>Entre como Visitante</Text>
                        </Link>

                    </Box>
                </Box>
                <Box>
                    <Image src={ImgVisi} alt='Imagem Ilustrativa' />
                </Box>
            </Container>

            <Divider mx={'auto'} w={['380px', '450px', '750px', '1000px']} mt={'80px'} mb={'80px'} borderRadius={'25px'} borderWidth={'2px'} color={'#513636'} />

            <Container maxW={'100%'} mb={'30px'}>
                <Box mb={'40px'} textAlign={'center'}>
                    <Heading color={'#98FF68'}>Destaques Semanais</Heading>
                </Box>
                <Box display={'flex'} alignItems={'center'} textAlign={'center'}>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={slidesPerView}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Image src={ImgDest} backgroundColor={'#7CC152'} p={'20px'} borderRadius={'15px'} />
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Image src={ImgDest2} backgroundColor={'#7CC152'} p={'20px'} borderRadius={'15px'} />
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Image src={ImgDest3} backgroundColor={'#7CC152'} p={'20px'} borderRadius={'15px'} />
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Image src={ImgDest} backgroundColor={'#7CC152'} p={'20px'} borderRadius={'15px'} />
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Image src={ImgDest2} backgroundColor={'#7CC152'} p={'20px'} borderRadius={'15px'} />
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <Image src={ImgDest3} backgroundColor={'#7CC152'} p={'20px'} borderRadius={'15px'} />
                        </SwiperSlide>
                        <div className="swiper-button-prev" style={{ color: '#98FF68', paddingRight: '40px' }}></div>
                        <div className="swiper-button-next" style={{ color: '#98FF68', paddingLeft: '40px' }}></div>
                    </Swiper>
                </Box>
            </Container>
        </>
    )
}

export default PaginaInicial;