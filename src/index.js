import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  colors: {
    brand: {
      50: '#F8F8F8',
      100: '#F2F2F2',
      200: '#D9D9D9',
      300: '#BFBFBF',
      400: '#8C8C8C',
      500: '#595959',
      600: '#525252',
      700: '#363636',
      800: '#2B2B2B',
      900: '#171a26',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
