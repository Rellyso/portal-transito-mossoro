import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: 'Poppins',
    body: 'Roboto'
  }
})