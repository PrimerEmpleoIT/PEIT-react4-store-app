import { benefits } from '@/Helpers/Benefits'
import { Flex, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'

export default function Benefits() {
  return (
    <Stack fontFamily='body'>
      <SimpleGrid
        gap={{ base: 0, md: 6 }}
        columns={{ base: 1, md: 3 }}
        w='100%'
        justifyItems='center'
        px={{ base: 8, md: 10, lg: 20 }}
      >
        {benefits.map((benefit) => {
          const { id, icon, title, info } = benefit

          return (
            <Flex
              direction='column'
              key={id}
              maxH='322px'
              mb={10}
              mt={10}
              alignItems='center'
              w={'12rem'}
            >
              <Image src={icon} w='65px' h='65px' alt='icons' mb={4} />
              <Text
                fontWeight='bold'
                fontSize={{ base: 'general', sm: 'paragraph' }}
                lineHeight='132.5%'
                mb={4}
              >
                {title}
              </Text>
              <Text
                textAlign={'center'}
                w='265px'
                h='40px'
                fontWeight='normal'
                fontSize={{
                  base: 'review',
                  sm: 'general',
                  md: 'small',
                  lg: 'general',
                }}
                color='black'
                opacity={0.7}
                lineHeight='140%'
              >
                {info}
              </Text>
            </Flex>
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}
