import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Button,
  Text,
  MenuDivider,
  Image,
  IconButton,
  Badge,
  Box,
} from '@chakra-ui/react'
import { TiDeleteOutline } from 'react-icons/ti'
import { TbEditCircle } from 'react-icons/tb'
import PayPal from '@/assets/Cart/Group 106.svg'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '@/Store/features/Cart/index'
import { GrCart } from 'react-icons/gr'

const Dropdown = () => {
  let screen = window.innerWidth
  console.log(screen)

  const onCart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <Menu pos='relative'>
      <MenuButton
        as={IconButton}
        fontSize={'large'}
        aria-label='cart'
        icon={<GrCart />}
      >
        {onCart.producto.length}
      </MenuButton>
      {onCart.producto.length >= 1 && (
        <Flex
          bgColor='#0156FF'
          color='white'
          borderRadius='50%'
          w='16px'
          h='16px'
          p={0}
          display='flex'
          justify='center'
          alignItems='center'
          pos='absolute'
          right={{
            base: '68px',
            md: '75px',
            '2xl': '90px',
            '3xl': '270px',
            '4xl': '320px',
          }}
          top={{ base: '60px', md: '95px' }}
        >
          <Text as='span' fontSize='10px'>
            {onCart.quantity}
          </Text>
        </Flex>
      )}

      <MenuList maxW='310px'>
        {onCart.quantity === 0 ? (
          <Flex maxW='310px' justify='center' p={2}>
            <Text fontWeight='semibold' fontSize='paragraph'>
              {' '}
              Nothing here, let 's buy!!
            </Text>
          </Flex>
        ) : (
          <>
            <Flex
              direction='column'
              width='310px'
              alignItems='center'
              gap={3}
              p={3}
            >
              <Text fontWeight='semibold' fontSize='paragraph'>
                My Cart
              </Text>
              <Text color='grey' fontSize='description'>
                {onCart.quantity} in Cart
              </Text>
              <Button
                w='80%'
                borderWidth={'2px'}
                border={'solid'}
                borderColor={'logo'}
                color={'logo'}
                fontSize={{ md: 'description', lg: 'general' }}
                fontWeight={'semibold'}
                borderRadius='66px'
              >
                {' '}
                View or Edit Your Cart
              </Button>
            </Flex>
            <MenuDivider color='grey' />
            {onCart.producto.map(p => {
              return (
                <>
                  <MenuItem key={p.id}>
                    <Flex
                      alignItems='center'
                      lineHeight='19.5px'
                      w='100%'
                      justify='space-between'
                      p={1}
                    >
                      <Text fontSize='paragraph' fontWeight='normal' w='4rem'>
                        {p.quantity}X
                      </Text>
                      <Image
                        src={p.img}
                        alt='producto'
                        width='65px'
                        height='65px'
                      />

                      <Text
                        fontWeight='medium'
                        fontSize='13px'
                        maxW='153px'
                        maxH='62px'
                      >
                        {p.description
                          .replace(/^(.{40}\S*).*$/, '$1')
                          .toUpperCase()}
                        ...
                      </Text>
                      <Flex
                        direction='column'
                        alignItems='center'
                        justify='flex-start'
                      >
                        <IconButton
                          icon={<TiDeleteOutline />}
                          fontSize='22px'
                          color='grey'
                          h='22px'
                          w='22px'
                          onClick={() => dispatch(deleteCart(p.id))}
                        />

                        <IconButton
                          h='22px'
                          w='22px'
                          icon={<TbEditCircle />}
                          alt='edit button'
                          fontSize='22px'
                          color='grey'
                        />
                      </Flex>
                    </Flex>
                  </MenuItem>
                  <MenuDivider color='grey' />
                </>
              )
            })}

            <Flex
              direction='column'
              justify='space-around'
              alignItems='center'
              h='100%'
              mb={3}
              gap={3}
            >
              <Text fontSize='general' fontWeight='semibold' color='grey' p={2}>
                SubTotal:
                <Text
                  ml={1}
                  as='span'
                  color='black'
                  fontSize='paragraph'
                  fontWeight='semibold'
                >
                  $
                  {onCart.producto.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </Text>
              </Text>
              <Flex direction='column' gap={2}>
                <Button
                  w='250px'
                  h='37px'
                  color='white'
                  bgColor='#0156FF'
                  borderRadius='66px'
                  fontSize='14px'
                >
                  Go to checkout
                </Button>
                <Button
                  w='250px'
                  h='37px'
                  color='white'
                  bgColor='#FFB800'
                  borderRadius='66px'
                  fontSize='12px'
                >
                  Check out with <Image src={PayPal} ml={2} h='18px' w='72px' />
                </Button>
              </Flex>
            </Flex>
          </>
        )}
      </MenuList>
    </Menu>
  )
}

export default Dropdown
