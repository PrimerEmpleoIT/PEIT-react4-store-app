import NewProducts from "./Components/Layout/NewProducts/NewProducts";
import Banner from "./Components/Banner/Banner";
import Sponsors from "./Components/Sponsors/Sponsors";
import Banner from "./Components/Banner/Banner";
import { Layout } from "./Components";

function App() {
  return (
    <>
      <Layout>
        <Banner />
        <NewProducts />
        <Banner />
        <Sponsors />
      </Layout>
    </>
  );
}

export default App;
