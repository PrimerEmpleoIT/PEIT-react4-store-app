import { Box, Center } from '@chakra-ui/react'
import { ImageSlider } from '..'
import { SlideData } from './SlideData'

export default function Banner() {
  return (
    <>
      <Center>
        <Box w='80%' p={4} color='white'>
          <ImageSlider slides={SlideData} />
        </Box>
      </Center>
    </>
  )
}
