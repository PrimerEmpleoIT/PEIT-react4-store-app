import {
  Banner,
  FollowUs,
  Layout,
  NewProducts,
  Sponsors,
  Testimonials,
} from './Components'

function App() {
  return (
    <>
      <Layout>
        <Banner />
        <NewProducts />
        <Sponsors />
        <FollowUs />
        <Testimonials />
      </Layout>
    </>
  )
}

export default App
