import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../styles/Fonts'
import '../styles/globals.scss'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
