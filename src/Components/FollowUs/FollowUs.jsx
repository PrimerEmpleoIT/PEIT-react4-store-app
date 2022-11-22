import { followUs } from '@/Helpers'
import {
  Flex,
  Heading,
  Hide,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

function FollowUs() {
  return (
    <Hide below='lg'>
      <Stack fontFamily={'body'} px={{ lg: 2, '2xl': 0 }}>
        <Heading fontSize={'category'} fontWeight={'semibold'}>
          Follow us on Instagram for News, Offers & More
        </Heading>
        <SimpleGrid gap={3} py={4} columns={6} w='100%' justifyItems='center'>
          {followUs.map((follow) => {
            const { id, description, img, date } = follow

            return (
              <Flex
                direction='column'
                key={id}
                maxW='235px'
                maxH='322px'
                mb={3}
              >
                <Image src={img} w='235px' h='152px' alt='notebook' />
                <Text
                  mt={1}
                  textAlign='center'
                  fontSize='review'
                  fontWeight='medium'
                >
                  {' '}
                  {description}
                </Text>
                <Text
                  mt={2}
                  fontWeight={'normal'}
                  fontSize={'stock'}
                  color={'gray'}
                  textAlign={'center'}
                >
                  {date}
                </Text>
              </Flex>
            )
          })}
        </SimpleGrid>
      </Stack>
    </Hide>
  )
}

export default FollowUs
