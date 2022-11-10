import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { Box, Button, Flex, Link, SimpleGrid, Text } from '@chakra-ui/react'

import { ProductCard } from '@/Utils'
import Slider from 'react-slick'
import { useState } from 'react'

function CategoryCarousel(info) {
  const { name, products, id, bg } = info
  const [filter, setFilter] = useState(products)
  const cat = products.map(p => p.specs)
  const handleFilter = e => {
    const buttonValue = e.target.innerText
    const filter = products.filter(p => p.specs === buttonValue)
    setFilter(filter)
  }

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
    <Box
      display={'flex'}
      flexDirection={{ base: 'column' }}
      fontFamily={'body'}
    >
      <Box
        display={'flex'}
        gap={2}
        flexDirection={{ base: 'column', md: 'column' }}
      >
        <Flex
          maxW={{ base: '100%' }}
          w={'100%'}
          maxH={{ base: '100%', md: '350px' }}
          h={'100%'}
          backgroundImage={bg}
          backgroundSize={'cover'}
          backgroundRepeat={'no-repeat'}
          direction='column'
          justify='center'
          key={id}
          gap={6}
          py={6}
        >
          <Text
            color={'white'}
            fontWeight={'bold'}
            fontSize={{ base: 'paragraph', lg: 'category' }}
            textAlign='center'
          >
            {name}
          </Text>
          <Link
            color={'white'}
            fontWeight={'normal'}
            fontSize={{ base: 'review', md: 'description' }}
            textDecorationLine='underline'
            textAlign='center'
          >
            See all products
          </Link>
        </Flex>

        <SimpleGrid
          columns={{ base: 3, sm: 4, md: 5 }}
          gap={{ base: 2, md: 2 }}
          mx={2}
          maxW={'fit-content'}
        >
          {cat[0] !== null && (
            <Button
              fontSize={{ base: 'description', sm: 'general', md: 'normal' }}
              fontWeight={'semibold'}
              onClick={e => setFilter(products)}
              borderRadius='0'
              h={'20px'}
              _focus={{
                color: 'black',
                borderBottom: '2px solid #0156FF',
              }}
              align='center'
            >
              Most Popular
            </Button>
          )}
          {products.map(p => (
            <Button
              fontSize={{ base: 'description', sm: 'general', md: 'normal' }}
              fontWeight={'semibold'}
              onClick={e => handleFilter(e)}
              key={p.id}
              borderRadius='0'
              h={'20px'}
              _focus={{
                color: 'black',
                borderBottom: '2px solid #0156FF',
              }}
            >
              {p.specs}
            </Button>
          ))}
        </SimpleGrid>
      </Box>

      <Box px={4} my={6}>
        <Slider {...settings}>
          {filter.map(data => {
            const { id, stock, images, icon, title, price } = data

            return (
              <ProductCard
                key={id}
                id={id}
                stock={stock}
                img={images}
                icon={icon}
                description={title}
                oldPrice={parseInt(price).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                price={parseInt(price).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              />
            )
          })}
        </Slider>
      </Box>
    </Box>
  )
}
export default CategoryCarousel
