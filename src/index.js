
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import Helmet from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Helmet bodyAttributes={{style: 'background-color : #121212; font-family: Rubik'}}/>
    <App />
  </ChakraProvider>
);