// import { extendTheme } from "@chakra-ui/react";
//
// /**
//  * Customizes the Chakra UI theme with brand-specific colors.
//  * @constant theme
//  */
// const theme = extendTheme({
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// });
//
// export default theme;


// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme