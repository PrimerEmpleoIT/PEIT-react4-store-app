import NewProducts from "./Components/Layout/NewProducts/NewProducts";
import Sponsors from "./Components/Sponsors/Sponsors";
import Banner from "./Components/Banner/Banner";
import { Layout, FollowUs } from "./Components";

function App() {
  return (
    <>
      <Layout>
        <Banner />
        <NewProducts />
        <Sponsors />
        <FollowUs />
      </Layout>
    </>
  );
}

export default App;
