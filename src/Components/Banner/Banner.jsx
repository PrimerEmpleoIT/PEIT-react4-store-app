<<<<<<< HEAD
import { Box } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";
import { Center } from "@chakra-ui/react";
=======
import { Box, Center } from '@chakra-ui/react'
import { ImageSlider } from '..'
import { SlideData } from './SlideData'
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141

export default function Banner() {
  return (
    <>
      <Center>
<<<<<<< HEAD
        <Box w="80%" p={1} color="white">
=======
        <Box w='80%' p={4} color='white'>
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141
          <ImageSlider slides={SlideData} />
        </Box>
      </Center>
    </>
  )
}
