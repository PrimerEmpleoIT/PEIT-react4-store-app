import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import Laptops from "./Pages/Laptops";
import DesktopPC from "./Pages/DesktopPC";
import NetworkinDevices from "./Pages/NetworkinDevices";
import PrinterScanners from "./Pages/PrinterScanners";
import PcParts from "./Pages/PcParts";
import AllOtherProducts from "./Pages/AllOtherProducts";
import Repairs from "./Pages/Repairs";
import OurDeals from "./Pages/OurDeals";

function ProyectRoutes() {
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Route path="/Laptops">
            <Laptops />
          </Route>
          <Route path="/DesktopPC">
            <DesktopPC />
          </Route>
          <Route path="/NetworkinDevices">
            <NetworkinDevices />
          </Route>
          <Route path="/Printer&Scanners">
            <PrinterScanners />
          </Route>
          <Route path="/PcParts">
            <PcParts />
          </Route>
          <Route path="/AllOtherProducts">
            <AllOtherProducts />
          </Route>
          <Route path="/Repairs">
            <Repairs />
          </Route>
          <Route path="/OurDeals">
            <OurDeals />
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default ProyectRoutes;
