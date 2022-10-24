import {  SimpleGrid, Image, Flex, Text, Stack, Hide} from '@chakra-ui/react'
import { benefits } from '@/Helpers/Benefits'

export default function Benefits() {
    return (
        <Hide below='lg'>
        <Stack>
        <SimpleGrid
          gap={6}
          columns={3}
          w='100%'
          justifyItems='center'
          paddingX={20} 
        >
          {benefits.map((benefit) => {
            return (
              <Flex
                direction='column'
                key={benefit.id}
                maxW='235px'
                maxH='322px'
                mb={10}
                mt={10}
                alignItems='center'
              >
                <Image 
                src={benefit.icon} 
                w='65px' 
                h='65px' 
                alt='icons'
                mb={4}
                />
                <Text
                 fontFamily= 'Poppins'
                 fontWeight= '700'
                 fontSize= '18px'
                 lineHeight= '132.5%'
                 mb={4}
                >
                  {benefit.title}
                </Text>
                <Text
                  w='265px' h='40px'
                  fontFamily= 'Poppins'
                  fontWeight= '400'
                  fontSize= '14px'
                  lineHeight= '140%'
                >
                  {benefit.info}
                </Text>
              </Flex>
            )
          })}
        </SimpleGrid>
      </Stack>
      </Hide>
   )
}