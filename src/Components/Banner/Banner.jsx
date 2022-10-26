import { SlideData } from '@/Helpers'
import { Box, Center } from '@chakra-ui/react'
import { ImageSlider } from '..'

export default function Banner() {
  return (
    <>
      <Center>
        <Box w={'100%'} h={'100%'} color={'white'}>
          <ImageSlider slides={SlideData} />
        </Box>
      </Center>
    </>
  )
}
