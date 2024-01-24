import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const color = {
  body: {
    backgroundColor: 'gray'
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyDZOdXiRW3hmGpf_cu9SS7kOW1AV-Hco3I",
  authDomain: "e-commercecoder-85d02.firebaseapp.com",
  projectId: "e-commercecoder-85d02",
  storageBucket: "e-commercecoder-85d02.appspot.com",
  messagingSenderId: "783260777176",
  appId: "1:783260777176:web:76424edcc8f03c41deb5ad"
};


const app = initializeApp(firebaseConfig);
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#fafafa',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
