import { Route, Routes } from 'react-router-dom';
import MainLayout from '../widgets/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalog/Catalog';
import ProductPage from '../pages/ProductPage/ProductPage';
import Compony from '../pages/Company/Compony';
import Contact from '../pages/Contact/Contact';
import ShippingPayment from '../pages/ShippingPayment/ShippingPayment';
import Guarantee from '../pages/Guarantee/Guarantee';
import OrderPage from '../pages/Order/OrderPage';
import CheckoutPage from '../pages/Checkout/CheckoutPage';
import OrderSuccessPage from '../pages/OrderSuccess/OrderSuccessPage';
import NotFound from '../pages/NotFound/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:slug" element={<ProductPage />} />
        <Route path="/compony" element={<Compony />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shippingPayment" element={<ShippingPayment />} />
        <Route path="/guarantee" element={<Guarantee />} />
        <Route path="/Order" element={<OrderPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
