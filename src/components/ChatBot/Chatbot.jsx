// Chatbot.js

import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'LacteaBot',
  initialMessages: [createChatBotMessage('Olá! Eu sou o LacteaBot. Como posso ajudar?')],
};

const Chatbot = () => {
  return (
    <div>
    </div>
  );
};

export default Chatbot;
