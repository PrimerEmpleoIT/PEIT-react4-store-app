import { storeProducts } from '@/Helpers'
import { getProducts } from '@/Store/features/Products/index'
import { Hide, Show, Stack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Category, CategoryCarousel } from '..'

function Categories() {
  const { loading, data, error } = useSelector(state => state.productos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts(storeProducts))
  }, [])

  return (
    <>
      {loading ? (
        <div>cargando...</div>
      ) : (
        data.map(info => (
          <Stack my={4} key={info.id}>
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
