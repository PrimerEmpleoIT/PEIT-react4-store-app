import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { StarRating } from '.'

function ProductCard({ id, stock, img, icon, description, oldPrice, price }) {
  return (
    <Box key={id} fontFamily={'body'}>
      <Box
        fontSize={'general'}
        bg='white'
        borderRadius={'3px'}
        cursor='pointer'
        m={0}
        p={0}
      >
        {stock === 'check availability' ? (
          <Flex gap={1}>
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
          <Flex gap={1}>
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
        <del> $ {oldPrice.toFixed(2)}</del>
        <Heading as={'h2'} fontSize={'paragraph'} fontWeight={'bold'}>
          {' '}
          $ {price.toFixed(2)}
        </Heading>
      </Box>
    </Box>
  )
}
export default ProductCard
