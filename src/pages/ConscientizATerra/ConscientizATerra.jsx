import './ConscientizATerra.css';
import NavbarSemPesquisa from '../../components/NavbarSemPesquisa/NavbarSemPesquisa';
import Footer from '../../components/Footer/Footer';
import { Flex, Box, Center, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function ConscientizAterra() {
    return (
        <div className="container">
            <NavbarSemPesquisa />

            <Flex direction="column" align="center">
                <Center>
                    <div className="title">
                        <h1>ConscientizATerra</h1>
                    </div>
                </Center>

                <Center mb="20px">
                    <Text as="p" color={'white'} opacity={0.9} fontSize={14} maxW={700} textAlign={'justify'} mt={3}>Aqui você vai encontrar as melhores informações, notícias, curiosidades e dicas sobre o mundo da sustentabilidade, agricultura, artesanato, nutrição, higiene, entre outras conhecimentos que ajudam a ConscientizAr a nossa Terra</Text>
                </Center>

                <Box w="100%" h="1300px" display="flex" justifyContent="center" alignItems="center">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={false} // Desativar o loop
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </Box>

            </Flex>
            <Footer />
        </div>
    )
}

export default ConscientizAterra;
