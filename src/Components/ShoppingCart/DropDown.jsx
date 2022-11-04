import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { useState } from 'react'
import { NewData } from '@/Helpers'

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
          0
        </MenuButton>
        <MenuList minWidth='400px' style={styles.menu}>
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
                  <img src={data.img} alt='' width='36' height='36' />
                </span>
                <span>{data.Name}</span>
                <span> ${data.price.toFixed(2)}</span>
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
            <span> $4500,00 </span>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

export default Dropdown
