import { store } from "@/Store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Components";
import HomeRoute from "./Pages/HomeRoute";
import Laptops from "./Pages/Laptops";
import DesktopPC from "./Pages/DesktopPC";
import NetworkingDevices from "./Pages/NetworkingDevices";
import PrinterScanners from "./Pages/PrinterScanners";
import PcParts from "./Pages/PcParts";
import AllOtherProducts from "./Pages/AllOtherProducts";
import Repairs from "./Pages/Repairs";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route path="/" element={<HomeRoute />} />
              <Route path="/laptops" element={<Laptops />} />
              <Route path="desktopPC" element={<DesktopPC />} />
              <Route path="networkingDevices" element={<NetworkingDevices />} />
              <Route path="/printer&scanners" element={<PrinterScanners />} />
              <Route path="/pcParts" element={<PcParts />} />
              <Route path="/allotherproducts" element={<AllOtherProducts />} />
              <Route path="/repairs" element={<Repairs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
