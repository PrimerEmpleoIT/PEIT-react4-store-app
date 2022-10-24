import NewProduct from "./Components/Layout/NewProducts/NewProductSlider";
import Sponsors from "./Components/Sponsors/Sponsors";
import Banner from "./Components/Banner/Banner";
import { Layout } from "./Components";

function App() {
  return (
    <>
      <Layout>
        <Banner />
        <NewProduct />
        <Sponsors />
      </Layout>
    </>
  );
}

export default App;
