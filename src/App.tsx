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
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import Analytics from "./pages/analytics/Analytics";
import Login from "./pages/login/Login";
import Register from "./pages/sign-in/Register";

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Sidebar />}>
              <Route index element={<Catalog />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/incomes" element={<Incomes />} />
              <Route path="/references" element={<References />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/service" element={<Service />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/analytics" element={<Analytics />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </HelmetProvider>
    </>
  );
}

export default App;
