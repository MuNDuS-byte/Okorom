import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import catalogData from '../../data/cardCatalogData';
import cartContext from '../../context/cartContext';
import Menu from '../Menu/Menu';
import BurgerMenu from '../Menu/BurgerMenu';
import navigate from '../../data/routesBurgerMenu';
import Footer from '../Footer/Footer';

const MainLayout = ({ refConsultion, handleRef }) => {
  const [order, setOrder] = useState([]);
  const [burgerMenu, setBurgerMenu] = useState(false);

  function addOrder(el) {
    let inArray = false;
    order.forEach((item) => {
      if (item.slug === el.slug) {
        inArray = true;
      }
    });
    if (!inArray) {
      setOrder([...order, el]);
    }
  }

  function deleteOrder(el) {
    setOrder(
      order.filter((item) => {
        return item.slug !== el;
      })
    );
  }
  return (
    <div>
      <Menu
        handleRef={handleRef}
        setBurgerMenu={setBurgerMenu}
        catalogData={catalogData}
        onAdd={addOrder}
        order={order}
        onDelete={deleteOrder}
      />
      {burgerMenu && (
        <BurgerMenu
          navigate={navigate}
          setBurgerMenu={setBurgerMenu}
          handleRef={handleRef}
        />
      )}
      <cartContext.Provider
        value={{ addOrder: addOrder, onDelete: deleteOrder, order: order }}
      >
        <Outlet />
      </cartContext.Provider>
      <Footer refConsultion={refConsultion} />
    </div>
  );
};

export default MainLayout;
