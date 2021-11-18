import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: 'Poppins',
    body: 'Roboto'
  },
  styles: {
    global: {
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-track': {
        width: '8px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#00ADEF',
        borderRadius: '24px',
      },
    }
  }
})