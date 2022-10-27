import Logo from '@/assets/navBar/Logo.svg'
import ProfilePhoto from '@/assets/navBar/ProfilePhoto.svg'
import { links, pagesRoutes } from '@/Helpers'
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  useDisclosure,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrCart, GrFormNext } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'

function NavBarMobileScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box borderBottom='1px' borderColor='empty'>
      <Flex
        justify={{ base: 'center', xs: 'space-between' }}
        alignItems='center'
        paddingY={2}
        w={'100vw'}
      >
        <Button
          as={IconButton}
          icon={<GiHamburgerMenu fontSize={24} />}
          onClick={onOpen}
        ></Button>
        <HStack gap={{ base: 2, sm: 6 }}>
          <Image src={Logo} w={6} alt='' />
          <Button
            borderWidth={'2px'}
            border={'solid'}
            borderColor={'logo'}
            color={'logo'}
            fontSize={'general'}
            fontWeight={'semibold'}
            borderRadius='66px'
            px={{ base: 2, sm: 6 }}
          >
            Our deals
          </Button>
        </HStack>
        <HStack>
          <IconButton
            aria-label='Cart'
            icon={<GrCart fontSize={24} />}
            fontSize='large'
            color='transparent'
          />
          <Button w='60px' h='36px' bgColor='transparent'>
            <Image src={ProfilePhoto} alt='' />
          </Button>
        </HStack>

        {/* <Box borderBottom="1px" borderColor="gray" paddingY={2}> */}
      </Flex>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen} gap={2}>
        <DrawerOverlay />
        <DrawerContent>
          <Flex direction='column'>
            <DrawerCloseButton fontSize={'review'} mt='10px' />

            <DrawerHeader>
              <Link as={NavLink} to={'/'}>
                <Image src={Logo} alt='' h='30px' w='40px' mr={'120px'} />
              </Link>
            </DrawerHeader>
            <Divider color={'empty'} w={'90%'} mx={4} />
          </Flex>
          <DrawerBody>
            {links.map((link) => {
              const { id, title } = link

              return (
                <Flex justify='space-between' mt={4} key={id}>
                  <Link
                    as={NavLink}
                    to={pagesRoutes[id - 1]}
                    fontSize={'description'}
                    fontWeight={'normal'}
                    mb={2}
                  >
                    {title}
                  </Link>
                  <GrFormNext />
                </Flex>
              )
            })}
            <Button
              borderWidth={'2px'}
              border={'solid'}
              borderColor={'logo'}
              color={'logo'}
              fontSize={'general'}
              fontWeight={'semibold'}
              borderRadius='66px'
              px={{ base: 8, sm: 10 }}
              mt={4}
            >
              Our deals
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default NavBarMobileScreen
