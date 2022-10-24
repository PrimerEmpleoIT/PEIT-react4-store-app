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
  NewProductSlider,
  Sponsors,
  Testimonials,
  Benefits,
} from "./Components";

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
  );
}

export default App;
