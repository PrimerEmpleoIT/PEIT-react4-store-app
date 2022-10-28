import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { StarRating } from '.'

function ProductCard({ id, stock, img, icon, description, oldPrice, price }) {
  return (
    <Box key={id} fontFamily={'body'} mx={{ base: '4', lg: 2, xl: 2 }}>
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
          <Flex gap={1} pb={2}>
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
          <Flex gap={1} pb={2}>
            <Image w={3} src={icon} alt='available' />
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
        <Image src={img} alt='img-product' w={48} />
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
      </Box>
    </Box>
  )
}
export default ProductCard
