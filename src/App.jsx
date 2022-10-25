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

function App() {
  return (
    <>
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
