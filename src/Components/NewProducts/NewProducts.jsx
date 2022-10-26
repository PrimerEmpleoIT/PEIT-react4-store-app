import { NewData } from '@/Helpers'
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useWindowWidth } from '@react-hook/window-size'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { StarRating } from '..'
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
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 5,
  }

  return (
    <>
      <Box
        fontFamily={'body'}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Text style={{ fontSize: '22px', padding: '22px', fontWeight: 'bold' }}>
          New Products
        </Text>
        <Text
          marginTop='30px'
          fontSize='review'
          textAlign='right'
          color='logo'
          textDecorationLine='underline'
          cursor='pointer'
        >
          see all new products
        </Text>
      </Box>

      <Slider {...settings}>
        {NewData.map((data) => {
          const {
            id,
            Stock,
            img,
            Reviews,
            icon,
            Description,
            OldPrice,
            Price,
          } = data

          return (
            <Container key={id}>
              <Box
                fontSize={'general'}
                bg='white'
                borderRadius={'3px'}
                cursor='pointer'
                m={0}
                p={0}
              >
                {Stock === 'check availability' ? (
                  <Flex gap={1}>
                    <Image w={3} src={icon} alt='unaavailable' />
                    <Heading
                      as={'h4'}
                      color={'unavailable'}
                      fontWeight={'normal'}
                      fontSize={'stock'}
                    >
                      {Stock}
                    </Heading>
                  </Flex>
                ) : (
                  <Flex gap={1}>
                    <Image w={3} src={icon} alt='available' />
                    <Heading
                      as={'h4'}
                      color={'available'}
                      fontWeight={'normal'}
                      fontSize={'stock'}
                    >
                      {Stock}
                    </Heading>
                  </Flex>
                )}
                <Image src={img} alt='img-product' />
                <StarRating />
                <Text
                  fontWeight={'normal'}
                  fontSize={{ base: 'small', md: 'description' }}
                >
                  {Description}
                </Text>
                <del> $ {OldPrice.toFixed(2)}</del>
                <Heading as={'h2'} fontSize={'paragraph'} fontWeight={'bold'}>
                  {' '}
                  $ {Price.toFixed(2)}
                </Heading>
              </Box>
            </Container>
          )
        })}
      </Slider>
    </>
  )
}
