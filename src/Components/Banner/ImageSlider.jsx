import { Box, Image } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ImageSlider = ({ slides }) => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      dynamicHeight={true}
      showThumbs={false}
    >
      {slides.map((slide) => {
        const { id, image } = slide

        return (
          <Box key={id}>
            <Image
              src={image}
              h={{ base: '20vh', lg: 'auto' }}
              alt='banner-img'
            />
          </Box>
        )
      })}
    </Carousel>
  )
}

export default ImageSlider
