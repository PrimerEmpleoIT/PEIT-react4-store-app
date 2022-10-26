import { store } from "@/Store";
import { Provider } from "react-redux";
import {
  Ads,
  Banner,
  Benefits,
  FollowUs,
  Layout,
  NewProductSlider,
  Sponsors,
  Testimonials,
  Categories,
} from "./Components";
import { ProyectRoutes } from "./Routes";

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
          <Categories />
          <FollowUs />
          <Testimonials />
          <Benefits />
        </Layout>
      </Provider>
    </>
  );
}

export default App;
