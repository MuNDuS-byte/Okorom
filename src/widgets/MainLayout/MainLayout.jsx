import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Menu from '../Header/Menu';
import BurgerMenu from '../Header/BurgerMenu';
import Footer from '../Footer/Footer';

const MainLayout = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div>
      <Menu setBurgerMenu={setBurgerMenu} />
      {burgerMenu && <BurgerMenu setBurgerMenu={setBurgerMenu} />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
