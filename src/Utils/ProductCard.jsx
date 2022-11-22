import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'

import { RiShoppingCartLine } from 'react-icons/ri'
import { StarRating } from '.'
import { addToCart } from '@/Store/features/Cart'
import { useDispatch } from 'react-redux'

function ProductCard({
  id,
  stock,
  img,
  icon,
  description,
  oldPrice,
  price,
  quantity = 1,
}) {
  const dispatch = useDispatch()
  return (
    <Box key={id} fontFamily={'body'} mx={{ base: 4, lg: 2, xl: 2 }}>
      <Box
        fontSize={'general'}
        bg='white'
        borderRadius={'3px'}
        cursor='pointer'
        mx={{ base: 2, md: '2' }}
        p={0}
        w={{ lg: '90%', xl: '100%' }}
      >
        {stock === 'check availability' ? (
          <Flex gap={1} pt={4} pb={2}>
            <Image w={3} src={icon} alt='unavailable' />
            <Heading
              as={'h4'}
              color={'unavailable'}
              fontWeight={'normal'}
              fontSize={'stock'}
            >
              {stock}
            </Heading>
          </Flex>
        ) : (
          <Flex gap={1} pt={4} pb={2}>
            <Image w={3} h={3} src={icon} alt='available' />
            <Heading
              as={'h4'}
              color={'available'}
              fontWeight={'normal'}
              fontSize={'stock'}
            >
              {stock}
            </Heading>
          </Flex>
        )}

        <Image
          src={img}
          alt='img-product'
          w={{ base: '100%', xs: 48 }}
          h={{ base: 40, xl: 48 }}
        />
        <StarRating />
        <Text
          fontWeight={'normal'}
          fontSize={{ base: 'small', md: 'description' }}
        >
          {description}
        </Text>
        <Text color={'disable'} textDecorationLine={'line-through'}>
          {' '}
          $ {oldPrice}
        </Text>
        <Heading as={'h2'} fontSize={'paragraph'} fontWeight={'bold'}>
          {' '}
          $ {price}
        </Heading>
        <Flex justify='center'>
          <Button
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
            borderWidth={'1px'}
            border={'solid'}
            borderColor={'logo'}
            color={'logo'}
            fontSize={{ base: 'small', sm: 'review', md: 'description' }}
            fontWeight={'semibold'}
            borderRadius='66px'
            mt={4}
            onClick={() =>
              dispatch(
                addToCart({
                  id,
                  stock,
                  img,
                  icon,
                  description,
                  oldPrice,
                  price,
                  quantity,
                })
              )
            }
          >
            <RiShoppingCartLine
              fontSize={'1rem'}
              color={'rgba(1, 86, 255, 1)'}
            />
            Add to cart
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
export default ProductCard
