import { store } from "@/Store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Components";
import {
  AllOtherProducts,
  DesktopPC,
  HomeRoute,
  Laptops,
  NetworkingDevices,
  PcParts,
  PrinterScanners,
  Repairs,
} from "./Pages";

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
