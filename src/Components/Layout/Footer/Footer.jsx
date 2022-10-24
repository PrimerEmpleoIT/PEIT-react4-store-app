import { footerIcons, footerList } from '@/Helpers'
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Hide,
  Highlight,
  HStack,
  Image,
  Input,
  Show,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import AccordionFooter from './AccordionFooter'

function Footer() {
  return (
    <Box
      fontFamily={'body'}
      bg={useColorModeValue('dark', 'white')}
      color={useColorModeValue('white', 'black')}
      overflowX={'hidden'}
    >
      <Container
        as={Stack}
        maxW={'7xl'}
        py={10}
        px={16}
        display={'flex'}
        gap={10}
      >
        <Grid
          gridTemplateColumns={'repeat(auto-fit, minmax(200px, 1fr))'}
          justify={{ base: 'center', md: 'space-between' }}
          align={'center'}
          gap={5}
        >
          <Stack gap={1} textAlign={'left'}>
            <Text
              fontWeight={'medium'}
              fontSize={{ base: 'paragraph', md: 'large', lg: 'title' }}
              color={'white'}
            >
              Sign Up To Our Newsletter.
            </Text>
            <Text
              fontWeight={'regular'}
              fontSize={{ base: 'review', lg: 'normal' }}
              color={'white'}
            >
              Be the first to hear about the latest offers.
            </Text>
          </Stack>
          <HStack align={'center'} gap={3} color={'white'}>
            <Input
              type={'email'}
              w={{ base: '60%', md: '100%' }}
              focusBorderColor={'white'}
              placeholder={'Your Email'}
              fontWeight={'regular'}
              fontSize={{ base: 'small', lg: 'general' }}
            />
            <Button
              bg={'logo'}
              textAlign={'center'}
              fontWeight={'semibold'}
              fontSize={{ base: 'description', lg: 'general' }}
              borderRadius={{ base: '1rem', md: '3rem' }}
              w={{ base: '40%', md: '9.4rem' }}
              py={3}
              px={5}
            >
              Suscribe
            </Button>
          </HStack>
        </Grid>
        <AccordionFooter />
        <Hide below={'lg'}>
          <SimpleGrid columns={5} spacing={4}>
            {footerList.map((footer) => {
              const { id, title, list } = footer

              return (
                <Stack key={id} gap={4}>
                  <Text
                    fontWeight={'bold'}
                    fontSize={{ md: 'small', lg: 'general' }}
                    color={'disable'}
                  >
                    {title}
                  </Text>
                  <Flex flexDirection={'column'} gap={1}>
                    {list.map((pages, i) => (
                      <Text
                        key={i}
                        fontWeight={'normal'}
                        fontSize={{ base: 'review', lg: 'description' }}
                        color={'white'}
                      >
                        <Highlight
                          query={['(00) 1234 5678', 'shop@email.com']}
                          styles={{ color: 'contact' }}
                        >
                          {pages}
                        </Highlight>
                      </Text>
                    ))}
                  </Flex>
                </Stack>
              )
            })}
          </SimpleGrid>
        </Hide>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Grid
          gridTemplateColumns={'repeat(auto-fit, minmax(300px, 1fr))'}
          py={10}
          justify={{ base: 'center', sm: 'space-between' }}
          align={'center'}
          gap={5}
        >
          <HStack display={'flex'} justify={'center'}>
            <FaFacebook />
            <FaInstagram />
          </HStack>
          <Hide above={'md'}>
            <Text fontWeight={'medium'} fontSize={'review'} color={'disable'}>
              Copyright © 2022 Shop Pty. Ltd.
            </Text>
          </Hide>
          <HStack display={'flex'} justify={'center'}>
            {footerIcons.map((icons) => {
              const { id, icon } = icons

              return <Image key={id} src={icon} alt='footer-icon' />
            })}
          </HStack>
          <Show above={'md'}>
            <Text fontWeight={'medium'} fontSize={'review'} color={'disable'}>
              Copyright © 2022 Shop Pty. Ltd.
            </Text>
          </Show>
        </Grid>
      </Box>
    </Box>
  )
}
export default Footer
