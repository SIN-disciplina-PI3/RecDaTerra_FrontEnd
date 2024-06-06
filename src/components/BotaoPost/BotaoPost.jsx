import { Link as RouterLink } from 'react-router-dom';
import { Flex, Link } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';

const BotaoPost = () => {
  return (
    <Flex
      position="fixed"
      bottom="20px"
      right="20px"
      alignItems="center"
      justifyContent="center"
      zIndex="9999"
      transition="transform 0.2s ease-in-out" // Transição suave para o efeito de hover
      _hover={{
        transform: "scale(1.2)" // Aumenta em 10% ao passar o cursor
      }}
    >
      <Link as={RouterLink} to="/post">
        <AddIcon
          backgroundColor={"#98FF68"}
          color={"black"}
          padding={"6px"}
          boxSize={"50px"}
          borderRadius={"360px"}
        />
      </Link>
    </Flex>
  );
}

export default BotaoPost;
