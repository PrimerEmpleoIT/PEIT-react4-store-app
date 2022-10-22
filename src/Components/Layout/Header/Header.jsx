import { Box, Flex, Icon, Menu, Show, Text } from '@chakra-ui/react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'
import './header.css'
import MenuDropDown from './MenuDropDown'

function Header() {
  return (
    <Menu>
      <Flex bgColor='black' w='100%'>
        <Flex justify='space-around' align='center' w='100%'>
          <MenuDropDown />
          <Show breakpoint='(min-width: 800px)'>
            <Box>
              <Text
                color='#ACACAC'
                fontSize='12px'
                fontWeight='800'
                fontFamily='Poppins'
              >
                {' '}
                Visit our showroom in 1234 Street Adress City Adress,1234
                <span className='header_ContacUS'> Contact US</span>
              </Text>
            </Box>
          </Show>
          <Box>
            <Flex gap='2' align='center'>
              <Text
                color='grey'
                fontSize={{ base: '10px', md: '12px' }}
                fontWeight='600'
              >
                Call us:(00)1234 5678
              </Text>
              <Show Show breakpoint='(min-width: 800px)'>
                <Icon as={FaFacebookSquare} color='#fff' fontSize={21} />
                <Icon as={AiFillInstagram} color='#fff' fontSize={22} />
              </Show>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Menu>
  )
}
export default Header
