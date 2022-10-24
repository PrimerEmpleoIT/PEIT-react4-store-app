<<<<<<< HEAD
import NewProducts from "./Components/Layout/NewProducts/NewProducts";
import Banner from "./Components/Banner/Banner";
import Sponsors from "./Components/Sponsors/Sponsors";
import Banner from "./Components/Banner/Banner";
import { Layout } from "./Components";
=======
import {
  Ads,
  Banner,
  FollowUs,
  Layout,
  NewProducts,
  Sponsors,
  Testimonials,
} from './Components'
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141

function App() {
  return (
    <>
      <Layout>
        <Banner />
        <NewProducts />
<<<<<<< HEAD
        <Banner />
        <Sponsors />
=======
        <Ads />
        <Sponsors />
        <FollowUs />
        <Testimonials />
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141
      </Layout>
    </>
  )
}

export default App
