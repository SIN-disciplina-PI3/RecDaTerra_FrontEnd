import { Container, Select, Box, Text, Divider, Button } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

function AdicionarPosts(){
    return(
        <>
            <Container maxW={"100%"}>
                <Box mb={'40px'}>
                    <Select backgroundColor={"#D9D9D9"} width={"10%"} borderRadius={"20px"}>
                    <option value='produto'>Produto</option>
                    <option value='evento'>Evento</option>
                    </Select>
                </Box>
            
                <Box textAlign={"center"} backgroundColor={"#D9D9D9"} opacity={"30%"} padding={"200px"}>
                <Box>
                    <DownloadIcon boxSize={20} />
                    <Text>
                    Adicione uma imagem do seu produto/evento
                    </Text>
                    </Box>
                </Box>
            </Container>
            
            <Container>

            </Container>
        </>
    )

}
export default AdicionarPosts;