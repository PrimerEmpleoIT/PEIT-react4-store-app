import { NewData } from '@/Helpers'
import { ProductCard } from '@/Utils'
import { Flex, Text } from '@chakra-ui/react'
import { useWindowWidth } from '@react-hook/window-size'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './NewProducts.css'

export default function NewProducts() {
  const onlyWidth = useWindowWidth()

  let [slides, setSlides] = useState(6)
  let slidesToShow = Math.round(innerWidth / 240)
  if (slidesToShow !== slides && slidesToShow < 7 && slidesToShow >= 1) {
    setSlides(slidesToShow)
  }

  useEffect(() => {
    slides = slidesToShow
  }, [onlyWidth])

  let settings = {
    arrows: true,
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 5,
  }

  return (
    <>
      <Flex fontFamily={'body'} justifyContent={'space-between'}>
        <Text
          fontSize={{ base: 'paragraph', lg: 'category' }}
          padding='22px'
          fontWeight='semibold'
        >
          New Products
        </Text>
        <Text
          marginTop='30px'
          fontSize={{ base: 'stock', lg: 'description' }}
          textAlign='right'
          color='logo'
          textDecorationLine='underline'
          cursor='pointer'
        >
          see all new products
        </Text>
      </Flex>

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
    </>
  )
}
