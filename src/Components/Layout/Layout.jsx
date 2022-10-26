import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Benefits, Footer, Header, Navbar } from '..'

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <Box maxW={'1440px'} mx={'auto'}>
        <Outlet />
      </Box>
      <Benefits />
      <Footer />
    </>
  )
}
export default Layout
