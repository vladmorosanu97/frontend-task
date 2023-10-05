import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Trips from "./components/Trips/Trips"
//import Trip from "./components/Trip/Trip"

import { extendTheme } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes  } from "react-router-dom"

const theme = extendTheme({
  colors: {
    blue: {
      100: "#4066bd",
      // ...
      900: "#151a2e",
    },
    gray: {
      100: "#e1e1e1"
    }
  },
})

export const App = () => (
  <ChakraProvider theme={theme}>
      <Routes>
          <Route path="/" element={<Trips/>}/>
          <Route path="/trips" element={<Trips/>}/>
          
        </Routes>
  </ChakraProvider>
)
