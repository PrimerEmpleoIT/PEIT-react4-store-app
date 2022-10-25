import {
  Ads,
  Banner,
  Benefits,
  FollowUs,
  Layout,
  NewProductSlider,
  Sponsors,
  Testimonials,
} from './Components'

function App() {
  return (
    <>
      <Layout>
        <Banner />
        <NewProductSlider />
        <Ads />
        <Sponsors />
        <FollowUs />
        <Testimonials />
        <Benefits />
      </Layout>
    </>
  )
}

export default App
