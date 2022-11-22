import { Category, CategoryCarousel } from '..'
import { Flex, Hide, Show, Spinner, Stack } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '@/Store/features/Products/index'
import { storeProducts } from '@/Helpers'
import { useEffect } from 'react'

function Categories() {
  const { loading, data, error } = useSelector(state => state.productos)
  const dispatch = useDispatch()

  /* const makeAPICall = async () => {
    try {
      const response = await fetch(
        'http://tech-store-api.onrender.com/categories',
        {
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      const data = await response.json()
      console.log('fetch', { data })
    } catch (e) {
      console.log('fetch', e)
    }
  }

  useEffect(() => {
    makeAPICall()
  }, []) */

  useEffect(() => {
    setTimeout(function () {
      dispatch(getProducts(storeProducts))
    }, 1000)
  }, [])

  return (
    <>
      {loading ? (
        <Flex justify='center' mt={10}>
          <Spinner thickness='4px' color='blue.500' boxSize={24} />
        </Flex>
      ) : (
        data.map(info => (
          <Stack my={6} key={info.id}>
            <Show below={'lg'}>
              <CategoryCarousel {...info} key={info.id} />
            </Show>
            <Hide below={'lg'}>
              <Category {...info} key={info.id} />
            </Hide>
          </Stack>
        ))
      )}
    </>
  )
}

export default Categories
