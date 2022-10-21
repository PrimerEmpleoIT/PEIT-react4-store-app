import NewProducts from "./Components/Layout/NewProducts/NewProducts";
import Sponsors from "./Components/Sponsors/Sponsors";
import Banner from "./Components/Banner/Banner";
import { Layout } from "./Components";

function App() {
  return (
    <>
      <Layout>
        <Banner />
        <NewProducts />
        <Sponsors />
      </Layout>
    </>
  );
}

export default App;
