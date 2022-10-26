import { store } from '@/Store'
import { Provider } from 'react-redux'
import {
  Ads,
  Banner,
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
        </Layout>
      </Provider>
    </>
  )
}

export default App
