import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Catalog from "./pages/catalog/Catalog";
import Clients from "./pages/clients/Clients";
import Incomes from "./pages/incomes/Incomes";
import References from "./pages/references/References";
import Sales from "./pages/sales/Sales";
import Service from "./pages/service/Service";
import Stock from "./pages/stock/Stock";
import Returns from "./pages/returns/Returns";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Catalog />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/incomes" element={<Incomes />} />
            <Route path="/references" element={<References />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/service" element={<Service />} />
            <Route path="/stock" element={<Stock />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
