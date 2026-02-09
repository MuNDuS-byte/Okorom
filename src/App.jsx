import { BrowserRouter, Route, Routes } from 'react-router-dom';

// componets
import MainLayout from './componets/MainLayout/MainLayout';
import Home from './componets/01-Home/Home';
import Catalog from './componets/02-Сatalog/Catalog';
import ProductionPage from './componets/02-Сatalog/Production/ProductionPage';
import Compony from './componets/03-Compony/Compony';
import Contact from './componets/04-Contact/Contact';
import ShippingPayment from './componets/05-ShippingPayment/ShippingPayment';
import Guarantee from './componets/06-Guarantee/Guarantee';
import OrderPage from './componets/07-OrderPage/OrderPage';
import NotFound from './componets/NotFound/NotFound';

// css
import './App.css';
import { useRef } from 'react';

function App() {
  const refConsultion = useRef();
  function handleRef() {
    refConsultion.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout refConsultion={refConsultion} handleRef={handleRef} />
            }
          >
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route
              path="/catalog/:slug"
              element={<ProductionPage handleRef={handleRef} />}
            />
            <Route path="/compony" element={<Compony />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shippingPayment" element={<ShippingPayment />} />
            <Route path="/guarantee" element={<Guarantee />} />
            <Route path="/Order" element={<OrderPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
