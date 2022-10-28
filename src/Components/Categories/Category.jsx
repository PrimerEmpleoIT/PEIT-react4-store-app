import { ProductCard } from '@/Utils'
import {
  Button,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

function Category(info) {
  const { name, products, id, bg } = info
  const [filter, setFilter] = useState(products)
  const cat = products.map(p => p.specs)
  const handleFilter = e => {
    const buttonValue = e.target.innerText
    const filter = products.filter(p => p.specs === buttonValue)
    setFilter(filter)
  }

  return (
    <Flex
      flexDirection={{ base: 'column' }}
      fontFamily={'body'}
      mx={{ base: 2, md: 1, xl: 2, '2xl': 0 }}
    >
      <SimpleGrid
        columns={{ base: 3, sm: 4, md: 6 }}
        justifyItems={'self-start'}
        mb={4}
      >
        {cat[0] !== null && (
          <Button
            fontSize={{ base: 'description', sm: 'general', md: 'normal' }}
            fontWeight={'semibold'}
            onClick={e => setFilter(products)}
            borderRadius='0'
            h={'20px'}
            _focus={{
              color: 'black',
              borderBottom: '2px solid #0156FF',
            }}
          >
            Most Popular
          </Button>
        )}
        {products.map(p => (
          <Button
            fontSize={{ base: 'description', sm: 'general', md: 'normal' }}
            fontWeight={'semibold'}
            onClick={e => handleFilter(e)}
            key={p.id}
            borderRadius='0'
            h={'20px'}
            _focus={{
              color: 'black',
              borderBottom: '2px solid #0156FF',
            }}
          >
            {p.specs}
          </Button>
        ))}
      </SimpleGrid>

      <HStack h={'350px'} spacing={{ lg: 2, '2xl': 16 }}>
        <VStack
          maxW={{ base: '100%', md: '200px', xl: '235px' }}
          w={'100%'}
          h={'350px'}
          backgroundImage={bg}
          backgroundSize={'cover'}
          backgroundRepeat={'no-repeat'}
          key={id}
          pt={24}
          justify={'space-around'}
          align='center'
        >
          <Text
            display={'flex'}
            align={'center'}
            color={'white'}
            fontWeight={'bold'}
            fontSize={{ base: 'normal', xl: 'category' }}
            textAlign='center'
            w={{ lg: '50%' }}
          >
            {name}
          </Text>
          <Link
            display={'flex'}
            align={'flex-end'}
            color={'white'}
            fontWeight={'normal'}
            fontSize={{ base: 'small', xl: 'description' }}
            textDecorationLine='underline'
            textAlign='center'
          >
            See all products
          </Link>
        </VStack>

        <Flex my={2}>
          {filter.map(data => {
            const { id, stock, images, icon, title, price } = data

            return (
              <ProductCard
                key={id}
                id={id}
                stock={stock}
                img={images}
                icon={icon}
                description={title}
                oldPrice={parseInt(price).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                price={parseInt(price).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              />
            )
          })}
        </Flex>
      </HStack>
    </Flex>
  )
}

export default Category
