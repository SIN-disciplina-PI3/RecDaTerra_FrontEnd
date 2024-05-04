import { useState, useEffect } from 'react'
import {Icon} from '@chakra-ui/react'
import { IoMdSend } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { ArrowLeftIcon, ArrowRightIcon, InfoOutlineIcon, SmallAddIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from "react-router-dom"
import { Avatar, Flex, Heading, Box, Container, Image, Text, Link, Divider, Stat, StatNumber, Grid, GridItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Input, InputGroup, InputRightElement, InputLeftElement } from '@chakra-ui/react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import ModalProdutor from '../../components/ModalProdutor/ModalProdutor'
import SwiperCore from 'swiper'
import 'swiper/css'
import ImgDest from '../../img/ImgDestaque.svg'
import ImgDest2 from '../../img/ImgScroll2.svg'
import ImgDest3 from '../../img/ImgScroll3.svg'
import ImgEvento from '../../img/ImgEvento.svg'
import ImgEvento2 from '../../img/ImgEvento2.svg'
import ImgEvento3 from '../../img/ImgEvento3.svg'
import ImgEvento4 from '../../img/ImgEvento4.svg'
import Estrela from '../../img/EstrelaImg.svg'
import ImgProdutor from '../../img/ImgProdutor.svg'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function Home() {
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

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        setIsOpen(true); // Definir isOpen como true ao montar o componente
    }, []);

    return (
        <>
            <ModalProdutor isOpen={isOpen} onClose={handleCloseModal} />
            <Container maxW={'100%'} mb={'30px'} mt={'80px'}>
                <Box mb={'40px'} textAlign={'center'}>
                    <Heading color={'#98FF68'}>Destaques Semanais</Heading>
                </Box>
                <Box display={'flex'} alignItems={'center'} textAlign={'center'}>
                    
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={slidesPerView}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
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

            <Divider mx={'auto'} w={['320px', '380px', '450px', '750px', '1000px']} mt={'80px'} mb={'60px'} borderRadius={'25px'} borderWidth={'2px'} color={'#513636'} />

            <Container maxW={'100%'}>
                <Box mb={'40px'} textAlign={'center'}>
                    <Heading size='2xl' color={'#98FF68'}>Eventos</Heading>
                    <Text color={'white'}>Aqui você poderá acompanhar os eventos mais recentes em Recife Região</Text>
                </Box>
                <Grid templateColumns={['1fr', '1fr', '1fr 1fr']} gap={0}>
                    <GridItem display={'flex'} justifyContent={'center'}>
                        <Card border={'2px solid black'} maxW={['360px', '600px']} m={['10px' ,'30px']}>
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
                                <Box m={'20px'}>
                                    <Text>Uma descrição breve sobre o evento, o que vai se encontrar, produtos disponíveis, produtores presentes e entre outras atrações...</Text>
                                    <Text color={'#7A5448'}>Clique abaixo para saber mais...</Text>
                                </Box>
                                <Box mb={'20px'} textAlign={'center'}>
                                    <Link as={RouterLink} to="#" display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <InfoOutlineIcon />
                                        <Text pl={'5px'}>Saiba Mais</Text>
                                    </Link>
                                </Box>
                            </CardBody>
                            <Divider borderWidth={'1px'} />
                            <CardFooter flexDirection={'column'}>
                                <Box m={'5px'}>
                                    <InputGroup mb={'10px'}>
                                        <InputLeftElement>
                                            <Icon as={MdOutlineEmojiEmotions} color='black' boxSize={6}/>
                                        </InputLeftElement>
                                        <Input
                                            backgroundColor={'#C1C1C1'}
                                            border={'1px solid black'}
                                            borderRadius={'15px'}
                                            placeholder={'Adicionar um comentário...'}
                                            _placeholder={{ color: 'black' }}
                                            fontWeight='light'
                                            fontSize={'sm'}
                                        />
                                        <InputRightElement>
                                            <Icon as={IoMdSend} color='black' boxSize={6}/>
                                        </InputRightElement>
                                    </InputGroup>
                                </Box>
                                <Box m={'5px'} textAlign={'center'}>
                                    <Stat>
                                        <StatNumber fontSize={'xl'}>4.5</StatNumber>
                                    </Stat>
                                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                    </Box>
                                </Box>
                                <Box m={'5px'} textAlign={'center'} alignItems={'center'}>
                                    <Link as={RouterLink} to="#" display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <SmallAddIcon color={'white'} boxSize={5} backgroundColor={'#438545'} borderRadius={'50%'} />
                                        <Text pl={'5px'} color={'#438545'} fontSize={'sm'}>Avaliar o evento</Text>
                                    </Link>
                                </Box>
                                <Divider borderWidth={'1px'} borderColor={'black'}  />
                                <Box m={'5px'} p={'3px'} textAlign={'center'}>
                                    <Link as={RouterLink} to="#" display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <ExternalLinkIcon />
                                        <Text pl={'5px'}>Compartilhar</Text>
                                    </Link>
                                </Box>
                                <Divider borderWidth={'1px'} borderColor={'black'}  />
                                <Box m={'5px'} pt={'15px'} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                    <Image src={ImgProdutor} alt='Imagem de perfil do produtor' />
                                    <Text pl={'10px'}>Postado por: <Link as={RouterLink} to="/perfilprodutor">Lactéa</Link></Text>
                                </Box>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem display={'flex'} justifyContent={'center'}>
                        <Card border={'2px solid black'} maxW={['360px', '600px']} m={['10px' ,'30px']}>
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
                                <Box m={'20px'}>
                                    <Text>Uma descrição breve sobre o evento, o que vai se encontrar, produtos disponíveis, produtores presentes e entre outras atrações...</Text>
                                    <Text color={'#7A5448'}>Clique abaixo para saber mais...</Text>
                                </Box>
                                <Box mb={'20px'} textAlign={'center'}>
                                    <Link as={RouterLink} to="#" display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <InfoOutlineIcon />
                                        <Text pl={'5px'}>Saiba Mais</Text>
                                    </Link>
                                </Box>
                            </CardBody>
                            <Divider borderWidth={'1px'} />
                            <CardFooter flexDirection={'column'}>
                                <Box m={'5px'}>
                                    <InputGroup mb={'10px'}>
                                        <InputLeftElement>
                                            <Icon as={MdOutlineEmojiEmotions} color='black' boxSize={6}/>
                                        </InputLeftElement>
                                        <Input
                                            backgroundColor={'#C1C1C1'}
                                            border={'1px solid black'}
                                            borderRadius={'15px'}
                                            placeholder={'Adicionar um comentário...'}
                                            _placeholder={{ color: 'black' }}
                                            fontWeight='light'
                                            fontSize={'sm'}
                                        />
                                        <InputRightElement>
                                            <Icon as={IoMdSend} color='black' boxSize={6}/>
                                        </InputRightElement>
                                    </InputGroup>
                                </Box>
                                <Box m={'5px'} textAlign={'center'}>
                                    <Stat>
                                        <StatNumber fontSize={'xl'}>4.5</StatNumber>
                                    </Stat>
                                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                    </Box>
                                </Box>
                                <Box m={'5px'} textAlign={'center'} alignItems={'center'}>
                                    <Link as={RouterLink} to="#" display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <SmallAddIcon color={'white'} boxSize={5} backgroundColor={'#438545'} borderRadius={'50%'} />
                                        <Text pl={'5px'} color={'#438545'} fontSize={'sm'}>Avaliar o evento</Text>
                                    </Link>
                                </Box>
                                <Divider borderWidth={'1px'} borderColor={'black'}  />
                                <Box m={'5px'} p={'3px'} textAlign={'center'}>
                                    <Link as={RouterLink} to="#" display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <ExternalLinkIcon />
                                        <Text pl={'5px'}>Compartilhar</Text>
                                    </Link>
                                </Box>
                                <Divider borderWidth={'1px'} borderColor={'black'}  />
                                <Box m={'5px'} pt={'15px'} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                    <Image src={ImgProdutor} alt='Imagem de perfil do produtor' />
                                    <Text pl={'10px'}>Postado por: <Link as={RouterLink} to="/perfilprodutor">Lactéa</Link></Text>
                                </Box>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem display={'flex'} justifyContent={'center'}>
                        <Card border={'2px solid black'} maxW={['360px', '600px']} m={['10px' ,'30px']}>
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
                                <Box m={'20px'}>
                                    <Text>Uma descrição breve sobre o evento, o que vai se encontrar, produtos disponíveis, produtores presentes e entre outras atrações...</Text>
                                    <Text color={'#7A5448'}>Clique abaixo para saber mais...</Text>
                                </Box>
                                <Box mb={'20px'} textAlign={'center'}>
                                    <Link as={RouterLink} to="#" display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <InfoOutlineIcon />
                                        <Text pl={'5px'}>Saiba Mais</Text>
                                    </Link>
                                </Box>
                            </CardBody>
                            <Divider borderWidth={'1px'} />
                            <CardFooter flexDirection={'column'}>
                                <Box m={'5px'}>
                                    <InputGroup mb={'10px'}>
                                        <InputLeftElement>
                                            <Icon as={MdOutlineEmojiEmotions} color='black' boxSize={6}/>
                                        </InputLeftElement>
                                        <Input
                                            backgroundColor={'#C1C1C1'}
                                            border={'1px solid black'}
                                            borderRadius={'15px'}
                                            placeholder={'Adicionar um comentário...'}
                                            _placeholder={{ color: 'black' }}
                                            fontWeight='light'
                                            fontSize={'sm'}
                                        />
                                        <InputRightElement>
                                            <Icon as={IoMdSend} color='black' boxSize={6}/>
                                        </InputRightElement>
                                    </InputGroup>
                                </Box>
                                <Box m={'5px'} textAlign={'center'}>
                                    <Stat>
                                        <StatNumber fontSize={'xl'}>4.5</StatNumber>
                                    </Stat>
                                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                    </Box>
                                </Box>
                                <Box m={'5px'} textAlign={'center'} alignItems={'center'}>
                                    <Link as={RouterLink} to="#" display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <SmallAddIcon color={'white'} boxSize={5} backgroundColor={'#438545'} borderRadius={'50%'} />
                                        <Text pl={'5px'} color={'#438545'} fontSize={'sm'}>Avaliar o evento</Text>
                                    </Link>
                                </Box>
                                <Divider borderWidth={'1px'} borderColor={'black'}  />
                                <Box m={'5px'} p={'3px'} textAlign={'center'}>
                                    <Link as={RouterLink} to="#" display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <ExternalLinkIcon />
                                        <Text pl={'5px'}>Compartilhar</Text>
                                    </Link>
                                </Box>
                                <Divider borderWidth={'1px'} borderColor={'black'}  />
                                <Box m={'5px'} pt={'15px'} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                    <Image src={ImgProdutor} alt='Imagem de perfil do produtor' />
                                    <Text pl={'10px'}>Postado por: <Link as={RouterLink} to="/perfilprodutor">Lactéa</Link></Text>
                                </Box>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem display={'flex'} justifyContent={'center'}>
                        <Card border={'2px solid black'} maxW={['360px', '600px']} m={['10px' ,'30px']}>
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
                                <Box m={'20px'}>
                                    <Text>Uma descrição breve sobre o evento, o que vai se encontrar, produtos disponíveis, produtores presentes e entre outras atrações...</Text>
                                    <Text color={'#7A5448'}>Clique abaixo para saber mais...</Text>
                                </Box>
                                <Box mb={'20px'} textAlign={'center'}>
                                    <Link as={RouterLink} to="#" display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <InfoOutlineIcon />
                                        <Text pl={'5px'}>Saiba Mais</Text>
                                    </Link>
                                </Box>
                            </CardBody>
                            <Divider borderWidth={'1px'} />
                            <CardFooter flexDirection={'column'}>
                                <Box m={'5px'}>
                                    <InputGroup mb={'10px'}>
                                        <InputLeftElement>
                                            <Icon as={MdOutlineEmojiEmotions} color='black' boxSize={6}/>
                                        </InputLeftElement>
                                        <Input
                                            backgroundColor={'#C1C1C1'}
                                            border={'1px solid black'}
                                            borderRadius={'15px'}
                                            placeholder={'Adicionar um comentário...'}
                                            _placeholder={{ color: 'black' }}
                                            fontWeight='light'
                                            fontSize={'sm'}
                                        />
                                        <InputRightElement>
                                            <Icon as={IoMdSend} color='black' boxSize={6}/>
                                        </InputRightElement>
                                    </InputGroup>
                                </Box>
                                <Box m={'5px'} textAlign={'center'}>
                                    <Stat>
                                        <StatNumber fontSize={'xl'}>4.5</StatNumber>
                                    </Stat>
                                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                        <Image src={Estrela} alt='Nível de Avaliação' />
                                    </Box>
                                </Box>
                                <Box m={'5px'} textAlign={'center'} alignItems={'center'}>
                                    <Link as={RouterLink} to="#" display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <SmallAddIcon color={'white'} boxSize={5} backgroundColor={'#438545'} borderRadius={'50%'} />
                                        <Text pl={'5px'} color={'#438545'} fontSize={'sm'}>Avaliar o evento</Text>
                                    </Link>
                                </Box>
                                <Divider borderWidth={'1px'} borderColor={'black'}  />
                                <Box m={'5px'} p={'3px'} textAlign={'center'}>
                                    <Link as={RouterLink} to="#" display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <ExternalLinkIcon />
                                        <Text pl={'5px'}>Compartilhar</Text>
                                    </Link>
                                </Box>
                                <Divider borderWidth={'1px'} borderColor={'black'}  />
                                <Box m={'5px'} pt={'15px'} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                    <Image src={ImgProdutor} alt='Imagem de perfil do produtor' />
                                    <Text pl={'10px'}>Postado por: <Link as={RouterLink} to="/perfilprodutor">Lactéa</Link></Text>
                                </Box>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}

export default Home;