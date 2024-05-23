import React, { useState } from 'react';
import { Box, Flex, Text, VStack, Input, IconButton, Image, Center, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';
import { IoMdAttach } from "react-icons/io";
import { BsEmojiGrin } from "react-icons/bs";
import Picker from 'emoji-picker-react';
import LacteaChat from '../../img/LacteaChat.png';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setMessage(prevInput => prevInput + emojiObject.emoji);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Implementar lógica de envio de arquivo
    console.log('Arquivo selecionado:', file);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = { text: message, timestamp: new Date().toLocaleTimeString() };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setMessage('');
    }
  };

  return (
    <Center minH="100vh" p={{ base: 2, md: 4 }}>
      <Box 
        bg="white" 
        p={{ base: 2, md: 4 }} 
        borderRadius={20} 
        width={{ base: "full", md: "800px", lg: "1000px", xl: "1200px", '2xl': "1400px" }} 
        shadow="md"
        mx={{ base: 2, md: 4 }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        position="relative"
      >
        <Box>
          <Box bg="#7AC42A" p={4} borderRadius={20} display="flex" alignItems="center" mb={4}>
            <Image src={LacteaChat} boxSize="50px" alt="Lactea Logo" />
            <Text color="white" ml={4} fontSize="xl" fontWeight="bold">Láctea</Text>
          </Box>

          <Box flex="1" overflowY="auto" mb={4}>
            <VStack align="start" spacing={4}>
              {messages.map((msg, index) => (
                <Box key={index} bg="#76603F" p={3} borderRadius="md" alignSelf="flex-start">
                  <Text color="white">{msg.text}</Text>
                  <Text color="white" fontSize="xs" align="right">{msg.timestamp}</Text>
                </Box>
              ))}
            </VStack>
          </Box>
        </Box>

        {showEmojiPicker && (
          <Box position="absolute" bottom="80px" zIndex="1000">
            <Picker onEmojiClick={(event, emojiObject) => onEmojiClick(event, emojiObject)} />
          </Box>
        )}

        <Flex p={4} bg="gray.100" borderRadius={20} align="center" position="sticky" bottom={4} left={0} right={0}>
          <IconButton icon={<BsEmojiGrin />} aria-label="Emoji" onClick={() => setShowEmojiPicker(val => !val)} />
          <InputGroup>
            <IconButton icon={<IoMdAttach />} aria-label="Anexar Arquivo" onClick={() => document.getElementById('fileInput').click()} />
            <Input 
              type="file" 
              id="fileInput" 
              style={{ display: 'none' }} 
              onChange={handleFileUpload}
            />
            <Input 
              placeholder="Mensagem" 
              mx={2} 
              flex="1" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <InputRightElement>
              <IconButton icon={<FiSend />} aria-label="Enviar mensagem" onClick={handleSendMessage} />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>
    </Center>
  );
}

export default Chat;