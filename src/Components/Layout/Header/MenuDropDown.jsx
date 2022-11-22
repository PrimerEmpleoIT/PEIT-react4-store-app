import Clock from '@/assets/Header/bx_bx-time.svg'
import Location from '@/assets/Header/location.svg'
import {
  Box,
  Button,
  Divider,
  Flex,
  Highlight,
  Image,
  MenuButton,
  MenuGroup,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'

function MenuDropDown() {
  return (
    <Box fontFamily={'body'} py={2}>
      <MenuButton
        border={{ base: '1px solid gray', md: 'none' }}
        borderRadius='1rem'
        as={Button}
        rightIcon={<FaChevronDown color='white' />}
        color='gray'
        fontSize={['small', 'small', 'review']}
        fontWeight='extrabold'
        transition='all 0.5s'
      >
        <Flex align={'center'} gap={2}>
          Mon-Thu: <Text color={'white'}>9:00 AM - 5:30 PM</Text>
        </Flex>
        <MenuList
          minWidth={'320px'}
          display='flex'
          flexDir={'column'}
          justifyContent='center'
          alignItems={'center'}
        >
          <MenuGroup>
            <Flex alignItems='flex-start' justify='flex-start' gap={4}>
              <Image src={Clock} h='35px' w='35px' alt='' />
              <Flex
                py={1}
                direction='column'
                mt={1}
                gap={2}
                fontWeight='normal'
              >
                <Text textAlign='left' fontSize='review' color={'black'}>
                  We Are Open
                </Text>
                <Text textAlign='left' fontWeight='semibold' fontSize='review'>
                  Mon-Thu:
                  <Text as='span' color='black'>
                    {' '}
                    9:00 AM - 5:30 PM
                  </Text>
                </Text>
                <Text textAlign='left' fontWeight='semibold'>
                  Fr:
                  <Text as='span' color='black'>
                    {' '}
                    9:00 AM - 6:00 PM
                  </Text>
                </Text>
                <Text textAlign='left' fontWeight='semibold'>
                  Sat:
                  <Text as='span' color='black'>
                    {' '}
                    11:00 AM - 5:00 PM
                  </Text>
                </Text>
              </Flex>
            </Flex>
            <Divider color={'empty'} w={'100%'} mt={1} />
          </MenuGroup>
          <MenuGroup>
            <Flex paddingY={1} gap={4} align='center' justify='flex-start'>
              <Image src={Location} w={'35px'} h={'35px'} alt='' />
              <Flex direction='column' fontWeight='normal' mt={1}>
                <Text fontSize='description' color='black'>
                  Address: 1234 Street Adress,
                </Text>
                <Text textAlign='left' fontSize='decription' color='black'>
                  City Address, 1234
                </Text>
              </Flex>
            </Flex>
            <Divider color={'empty'} w={'100%'} mt={1} />
          </MenuGroup>
          <MenuGroup>
            <Flex direction='column' paddingY={1} paddingX={5} mt={2}>
              <Text
                textAlign='left'
                fontSize='description'
                fontWeight='regular'
                color='black'
              >
                Phones:{' '}
                <Highlight
                  query={'(00) 1234 5678'}
                  styles={{ color: 'contact', fontWeight: 'normal' }}
                >
                  (00) 1234 5678
                </Highlight>
              </Text>
              <Text
                textAlign='left'
                fontSize='description'
                fontWeight='normal'
                color='black'
              >
                E-mail:{' '}
                <Highlight
                  query={'shop@email.com'}
                  styles={{ color: 'contact', fontWeight: 'normal' }}
                >
                  shop@email.com
                </Highlight>
              </Text>
            </Flex>
          </MenuGroup>
        </MenuList>
      </MenuButton>
    </Box>
  )
}

export default MenuDropDown
