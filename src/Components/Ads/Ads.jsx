import ads from '@/assets/Ads/adsLogo.svg'
import {
  Box,
  Container,
  Flex,
  GridItem,
  Hide,
  Highlight,
  Image,
} from '@chakra-ui/react'

function Ads() {
  return (
    <Container bg={'divBg'} maxW={'100%'} py={5} mt={10}>
      <Flex
        mx={'auto'}
        flexDirection={{ base: 'column', sm: 'row' }}
        align={'center'}
        justify={'center'}
        gap={{ base: 4, sm: '2%', md: 4 }}
        fontFamily={'body'}
        fontWeight={'normal'}
        fontSize={{ base: 'review', sm: 'general', lg: 'paragraph' }}
        color={'ads'}
      >
        <GridItem>
          <Image w={{ base: '3rem', sm: '4rem' }} src={ads} alt='adsLogo' />
        </GridItem>
        <Hide below={'sm'}>
          <Box
            height={{ sm: '17px', lg: '23px' }}
            border={'2px solid'}
            borderColor={'div'}
            transform={'rotate(180deg'}
          />
        </Hide>
        <GridItem>
          <Highlight
            query={'own'}
            styles={{ color: 'ads', fontWeight: 'semibold' }}
          >
            own it now, up to 6 months interest free
          </Highlight>
        </GridItem>
        <GridItem fontSize={'general'} textDecoration={'underline'}>
          learn more
        </GridItem>
      </Flex>
    </Container>
  )
}
export default Ads
