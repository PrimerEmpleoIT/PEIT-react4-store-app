import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Button,
  Text,
  Stack,
  MenuDivider,
  Image,
} from '@chakra-ui/react'
import { useState } from 'react'
import { NewData } from '@/Helpers'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const styles = {
  menu: {
    position: 'absolute',
    left: '-240px',
    color: 'black',
    fontFamily: 'Poppins',
    border: 'none',
    borderRadius: '10px',
    margin: '0px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: ' 0px 8px 8px 0px rgba(255,255,255,0.5)',
  },
}

const Dropdown = () => {
  const onCart = useSelector(state => state.cart)
  // let [onCart, setOnCart] = useState([NewData[0], NewData[1]])
  useEffect(() => {
    console.log(onCart.quantity.lenght)
    console.log(onCart.producto.map(p => p.name))
  }, [onCart])

  return (
    <>
      <Menu>
        <MenuButton
          px={2}
          py={1}
          borderWidth={'2px'}
          border={'solid'}
          borderColor={'logo'}
          color={'logo'}
          fontSize={{ md: 'description', lg: 'general' }}
          fontWeight={'semibold'}
          w={{ md: '3rem', xl: '4rem' }}
          borderRadius='66px'
        >
          {onCart.length}
        </MenuButton>

        <MenuList maxW='310px'>
          <Flex direction='column' width='310px' alignItems='center' gap={3}>
            <Text>My Cart</Text>
            <Text>{onCart.quantity} on cart</Text>
            <Button> View or Edit Your Cart</Button>
          </Flex>
          <MenuDivider />
          {onCart.producto.map(p => {
            return (
              <>
                <MenuItem key={p.id}>
                  <Flex justify='space-around' alignItems='center'>
                    <Text>{p.quantity}X</Text>
                    <Image
                      src={p.img}
                      alt='producto'
                      width='65px'
                      height='65px'
                    />

                    <Text>{p.description}</Text>
                  </Flex>
                </MenuItem>
                <MenuDivider />
              </>
            )
          })}

          <Flex direction='column' justify='space-around' alignItems='center'>
            <Text>Sub-Total:1000</Text>
            <Button>Go to checkout</Button>
            <Button>Check out with</Button>
          </Flex>
        </MenuList>
      </Menu>
    </>
  )
}

export default Dropdown
