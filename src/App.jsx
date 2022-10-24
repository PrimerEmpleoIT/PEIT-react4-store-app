import {
  Ads,
  Banner,
  FollowUs,
  Layout,
  NewProductSlider,
  Sponsors,
  Testimonials,
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
      </Layout>
    </>
  );
}

export default App;
