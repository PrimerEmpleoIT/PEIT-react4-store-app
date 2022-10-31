import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { useState } from 'react'
import { NewData } from '@/Helpers'

const styles = {
  menu: {
    color: 'black',
    fontFamily: 'Poppins',
    border: 'none',
  },
}

const Dropdown = () => {
  let [onCart, setOnCart] = useState([NewData[0], NewData[1], NewData[5]])

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
        <MenuList minWidth='300px' style={styles.menu}>
          {onCart.map(data => {
            const { props } = data

            return (
              <MenuItem
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '12px',
                }}
              >
                <span>
                  <img src={data.img} alt='' width='30' height='30' />
                </span>
                <span>{data.Name}</span>
                <span> ${data.price},00</span>
              </MenuItem>
            )
          })}
          <MenuItem
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '12px',
            }}
          >
            <span>Total</span>
            <span> $100.000,00 </span>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

export default Dropdown
