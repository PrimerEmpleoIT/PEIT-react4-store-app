import NewProducts from "./Components/Layout/NewProducts/NewProducts"
import Banner from "./Components/Banner/Banner"
import { Layout } from "./Components"

function App() {
  return (
    <>
      <Layout>        
        <Banner/>
        <NewProducts />
      </Layout>
    </>
  );
}

export default App
