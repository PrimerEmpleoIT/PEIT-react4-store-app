<<<<<<< HEAD
import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { theme } from "./Theme"
=======
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { theme } from './Theme'
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
