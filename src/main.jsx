import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
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
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
