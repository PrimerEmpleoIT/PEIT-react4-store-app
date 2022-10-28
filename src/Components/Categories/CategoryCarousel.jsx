import { NewData } from '@/Helpers'
import { ProductCard } from '@/Utils'
import { Box } from '@chakra-ui/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

function CategoryCarousel() {
  const settings = {
    arrows: false,
    infinite: false,
    slidesToShow: 5,
    swipeToSlide: true,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Box fontFamily={'body'} px={4} my={6}>
      <Slider {...settings}>
        {NewData.map((data) => {
          const { id, stock, img, icon, description, oldPrice, price } = data

          return (
            <ProductCard
              key={id}
              id={id}
              stock={stock}
              img={img}
              icon={icon}
              description={description}
              oldPrice={oldPrice}
              price={price}
            />
          )
        })}
      </Slider>
    </Box>
  )
}
export default CategoryCarousel
