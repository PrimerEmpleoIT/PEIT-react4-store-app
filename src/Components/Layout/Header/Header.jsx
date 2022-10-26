import { Flex, Hide, Icon, Menu, Show, Text } from '@chakra-ui/react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'
import MenuDropDown from './MenuDropDown'

function Header() {
  return (
    <Menu>
      <Flex bgColor='dark' w='100%' fontFamily='body'>
        <Flex justify='space-around' align='center' w='100%' py={{ md: 2 }}>
          <MenuDropDown />
          <Show above='md'>
            <Flex
              align={'center'}
              gap={2}
              fontSize='review'
              fontWeight='extrabold'
            >
              <Show above='lg'>
                <Text color='headerFont'>
                  Visit our showroom in 1234 Street Adress City Adress,1234
                </Text>
                <Text color='white' textDecorationLine='underline'>
                  Contact US
                </Text>
              </Show>
            </Flex>
          </Show>
          <Show above='md'>
            <Flex gap={3} align='center'>
              <Text
                color={{ base: 'white', md: 'gray' }}
                fontSize={{ base: 'stock', md: 'review' }}
                fontWeight='semibold'
              >
                Call us: (00) 1234 5678
              </Text>
              <Show breakpoint='(min-width: 800px)'>
                <Icon as={FaFacebookSquare} color={'white'} fontSize={21} />
                <Icon as={AiFillInstagram} color={'white'} fontSize={22} />
              </Show>
            </Flex>
          </Show>
          <Hide above='md'>
            <Text
              fontSize='review'
              fontWeight='extrabold'
              color='white'
              textDecorationLine='underline'
            >
              Contact US
            </Text>
          </Hide>
        </Flex>
      </Flex>
    </Menu>
  )
}
export default Header
