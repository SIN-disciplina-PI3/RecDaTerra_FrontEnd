import NavbarSemPesquisa from "../../components/NavbarSemPesquisa/NavbarSemPesquisa";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

function Sobre() {
    return (
        <div className="container">
            <NavbarSemPesquisa />
            <Flex direction="column" align="center">
                <Box className="sobre-container" maxW="900px" textAlign="justify" mx="auto" p="20px" mt={100}>
                    <Center mb="20px">
                        <div className="title">
                            <Text as="h1">Sobre o RecDaTerra</Text>
                        </div>
                    </Center>

                    <Center mb="20px">
                        <Text as="p" color={'white'} opacity={0.8} fontSize={24}>Conectando produtores Locais e Pernambucanos Conscientes</Text>
                    </Center>

                    <Box mb="20px">
                        <Text fontSize={20} color={'#98FF68'} as="p">O que é o RecDaterra?</Text>
                    </Box>

                    <Box mb="20px">
                        <Text color={'white'} as="p">Às margens do Rio Capibaribe, nasce o RecDaterra, mais do que uma plataforma digital, uma ponte entre pequenos empreendimentos locais e a comunidade. Nosso objetivo é simples, mas poderoso: fortalecer a produção local, desde os pequenos produtores familiares até os grandes urbanos que moldam a paisagem do Recife. Imagine um lugar onde cada produto tem uma história para contar, cada serviço reflete o amor pela terra e cada evento é uma celebração da cultura agrícola. O RecDaterra é esse lugar. Para os exploradores curiosos, nossos visitantes têm acesso a uma variedade de produtos e serviços oferecidos pelos nossos fornecedores. Eles podem navegar por feiras, exposições, eventos e descobrir o que a riqueza de material que Pernambuco tem a oferecer. Já para os clientes comprometidos, oferecemos uma experiência completa. Eles podem não apenas adquirir produtos e serviços, mas também participar ativamente, avaliando, comentando e interagindo com os fornecedores por meio de nossa plataforma intuitiva. Acreditamos no poder do feedback para impulsionar a qualidade e a inovação. E para os heróis da terra, nossos fornecedores, o RecDaterra é uma vitrine para seu trabalho árduo. Eles podem exibir seus produtos, organizar eventos, compartilhar suas histórias em seus Perfis e, o mais importante, se conectar diretamente com os clientes. Nosso objetivo é capacitar esses empreendedores, oferecendo-lhes as ferramentas necessárias para prosperar. No RecDaterra, não apenas vendemos produtos, promovemos conexões. Conexões entre produtores e consumidores, entre o rural e o urbano, entre a tradição e a inovação. Somos uma comunidade unida pelo amor à terra e àqueles que a cultivam. Junte-se a nós e seja parte dessa jornada rumo a um futuro mais sustentável e próspero para todos.</Text>
                    </Box>

                    <Box mb="20px">
                        <Text fontSize={20} color={'#98FF68'} as="p">Objetivo do RecDaTerra?</Text>
                    </Box>

                    <Box mb="20px">
                        <Text color={'white'} as="p">Nosso objetivo é promover pequenos empreendimentos sustentáveis locais do Recife e região, incluindo agricultura, artesanato e outras áreas, conectando produtores e consumidores através de uma plataforma intuitiva. Facilitamos a comunicação direta entre eles, fornecendo acesso a outros meios de comunicação, se preferido. Junte-se a nós para apoiar o local, garantir qualidade e fazer parte de uma comunidade vibrante de apaixonados por uma vida sustentável.</Text>
                    </Box>

                    <Box mb="20px">
                        <Text fontSize={20} color={'#98FF68'} as="p">Entre em Contato</Text>
                    </Box>

                    <Box mb="20px">
                        <Text color={'white'} as="p">Estamos sempre abertos a feedback, sugestões e parcerias. Se você deseja saber mais sobre o RecDaterra ou gostaria de se envolver de alguma forma, entre em contato conosco. Estamos ansiosos para ouvir de você!</Text>
                    </Box>

                    <Box mb="20px">
                        <Text fontSize={20} color={'#98FF68'} as="p">Junte se a Nós</Text>
                    </Box>

                    <Box>
                        <Text color={'white'} as="p">Junte-se a nós nessa jornada rumo a um futuro mais sustentável e conectado com a terra. No RecDaterra, celebramos a diversidade da agricultura local, honramos as tradições do campo e trabalhamos juntos para construir uma comunidade mais forte e resiliente.</Text>
                    </Box>
                </Box>
            </Flex>
            
        </div>
    );
}

export default Sobre;
