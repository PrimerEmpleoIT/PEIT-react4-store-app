import { Box, Center } from '@chakra-ui/react'
import NewProducts from './NewProducts'

export default function NewProduct() {
  return (
    <>
      <Center>
        <Box breakpoint='(min-width: 800px)' px={4} w='95%' color='black'>
          <NewProducts />
        </Box>
      </Center>
    </>
  )
}
