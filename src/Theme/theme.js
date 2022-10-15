import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    body: "'Poppins', sans-serif",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
})

export default theme
