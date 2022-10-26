import { Box } from '@chakra-ui/react'
import { Benefits, Footer, Header, Navbar } from '..'

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <Box maxW={'1440px'} mx={'auto'}>
        {children}
      </Box>
      <Benefits />
      <Footer />
    </>
  )
}
export default Layout
