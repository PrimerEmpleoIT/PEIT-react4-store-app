import { store } from '@/Store'
import { Provider } from 'react-redux'
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
import { ProyectRoutes } from './Routes'

function App() {
  return (
    <>
      <ProyectRoutes />
      <Provider store={store}>
        <Layout>
          <Banner />
          <NewProductSlider />
          <Ads />
          <Sponsors />
          <FollowUs />
          <Testimonials />
          <Benefits />
        </Layout>
      </Provider>
    </>
  )
}

export default App
