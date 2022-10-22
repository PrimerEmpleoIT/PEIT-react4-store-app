import { FollowUs, Layout } from './Components'
import Banner from './Components/Banner/Banner'
import NewProducts from './Components/Layout/NewProducts/NewProducts'
import Sponsors from './Components/Sponsors/Sponsors'

function App() {
  return (
    <>
      <Layout>
        <Banner />
        <NewProducts />
        <Sponsors />
        <FollowUs />
      </Layout>
    </>
  )
}

export default App
