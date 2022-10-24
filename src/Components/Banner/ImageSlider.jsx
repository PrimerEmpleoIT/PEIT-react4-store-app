<<<<<<< HEAD
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
=======
import { Image } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141

const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop showIndicators={false} showStatus={false}>
      {slides.map((slide) => {
        return <Image src={slide.image} height='auto' width='800px' />
      })}
    </Carousel>
  )
}

export default ImageSlider
