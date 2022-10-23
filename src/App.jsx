import {
  Banner,
  FollowUs,
  Layout,
  NewProducts,
  Sponsors,
  Testimonials,
  Benefits,
} from './Components'

function App() {
  return (
    <>
      <Layout>
        <Banner />
        
        <Sponsors />
        <FollowUs />
        <Testimonials />
        <Benefits />
      </Layout>
    </>
  )
}

export default App
