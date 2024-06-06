import React from 'react';
import ReactDOM from 'react-dom/client'; 
import AppWrapper from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { register } from 'swiper/element/bundle';

register();

import { BrowserRouter } from 'react-router-dom'
import { extendTheme } from '@chakra-ui/react'
import './App.css';

const theme = extendTheme({
  styles: {
    global: {
      "body": {
        bg: '#76603F',
      },
    },
  },
  fonts: {
    body: "Rowdies, sans-serif",
    heading: "Rowdies, sans-serif",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    bold: 700,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <ChakraProvider theme={theme}>
          <AppWrapper />
        </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
