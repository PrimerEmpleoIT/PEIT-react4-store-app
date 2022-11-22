import { Box, Container, Flex, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
}

function StarRating() {
  const [currentValue, setCurrentValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)
  const stars = Array(5).fill(0)

  const handleClick = (value) => {
    setCurrentValue(value)
  }

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  return (
    <Container
      display={'flex'}
      alignItems='center'
      pt={2.5}
      pr='5px'
      pb={2}
      pl={0}
    >
      <Flex align={'center'}>
        {stars.map((_, index) => {
          return (
            <IconButton
              icon={<FaStar />}
              key={index}
              fontSize={{ base: 'small', sm: 'review', md: 'description' }}
              size={12}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              cursor='pointer'
              color={`${
                (hoverValue || currentValue) > index ? 'star' : 'empty'
              }`}
            ></IconButton>
          )
        })}
        <Box
          fontSize={{ base: 'stock', sm: 'reviews', md: 'description' }}
          fontWeight={'normal'}
          ml={{ base: '8px', md: '10px' }}
          color='gray'
        >
          Reviews ({currentValue})
        </Box>
      </Flex>
    </Container>
  )
}

export default StarRating
