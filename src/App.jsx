import { store } from "@/Store";
import { useEffect } from "react";
import { Provider } from "react-redux";
import {
  Ads,
  Banner,
  FollowUs,
  Layout,
  NewProductSlider,
  Sponsors,
  Testimonials,
  Benefits,
} from "./Components";
import ProyectRoutes from "./ProyectRoutes";

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
  );
}

export default App;
