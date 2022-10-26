import {
  AllOtherProducts,
  DesktopPC,
  Laptops,
  NetworkinDevices,
  OurDeals,
  PcParts,
  PrinterScanners,
  Repairs,
} from '@/Pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function ProyectRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/Laptops'>
          <Laptops />
        </Route>
        <Route path='/DesktopPC'>
          <DesktopPC />
        </Route>
        <Route path='/NetworkinDevices'>
          <NetworkinDevices />
        </Route>
        <Route path='/Printer&Scanners'>
          <PrinterScanners />
        </Route>
        <Route path='/PcParts'>
          <PcParts />
        </Route>
        <Route path='/AllOtherProducts'>
          <AllOtherProducts />
        </Route>
        <Route path='/Repairs'>
          <Repairs />
        </Route>
        <Route path='/OurDeals'>
          <OurDeals />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default ProyectRoutes
