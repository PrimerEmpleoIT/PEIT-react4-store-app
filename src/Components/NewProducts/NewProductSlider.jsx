import { Box, Center } from '@chakra-ui/react'
import NewProducts from './NewProducts'

export default function NewProduct() {
  return (
    <>
      <Center>
        <Box breakpoint='(min-width: 800px)' w='95%' color='black'>
          <NewProducts />
        </Box>
      </Center>
    </>
  )
}
