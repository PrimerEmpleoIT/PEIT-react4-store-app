import { Hide, Show, Stack, Spinner, Flex } from '@chakra-ui/react'

import { Category, CategoryCarousel } from '..'
import { useGetAllCategoriesQuery } from '@/Store/features/Products/index'
function Categories() {
  const { isLoading, data, error } = useGetAllCategoriesQuery()

  console.log('rktquery', data, error)
  // const makeAPICall = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://cors-anywhere.herokuapp.com/http://tech-store-api.onrender.com/categories',
  //       {
  //         mode: 'cors',
  //         headers: {
  //           'Access-Control-Allow-Origin': '*',
  //         },
  //       }
  //     )
  //     const data = await response.json()
  //     console.log('fetch', { data })
  //   } catch (e) {
  //     console.log('fetch', e)
  //   }
  // }
  // useEffect(() => {
  //   makeAPICall()
  // }, [])

  // const { loading, data, error } = useSelector(state => state.productos)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   setTimeout(function () {
  //     dispatch(getProducts(storeProducts))
  //   }, 3000)
  // }, [])

  return (
    <>
      <div>..</div>
    </>
  )
}

export default Categories
