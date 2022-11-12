import { Benefits, Footer, Header, Navbar } from '..'

import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <Box maxW={'1440px'} mx={'auto'} px={2}>
        <Outlet />
      </Box>
      <Benefits />
      <Footer />
    </>
  )
}
export default Layout
