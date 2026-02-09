import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectBasket } from "../../redux/slices/basketSlices";
import ShopCart from "./ShopCart";
import logo from "./Images/Group 336871.png";
import styles from "./Menu.module.css";
import SearchCart from "./SearchCart";

const Menu = (props) => {
  const { handleRef, setBurgerMenu, catalogData } = props;
  const [cart, setCart] = useState({ shopCart: false, searchCart: false });
  const order = useSelector(selectBasket);
  let maxSum = 0;
  order.forEach((el) => {
    maxSum += el.salePrice
      ? parseInt(el.salePrice) * el.count
      : parseInt(el.price) * el.count;
  });
  return (
    <div className={styles.Menu}>
      <div className="wrapper">
        <div className={styles.MenuUp}>
          <div className={styles.Logo}>
            <img src={logo} alt="logo" />
            <h3>okorom</h3>
          </div>
          <div className={styles.MenuInfo}>
            <div className={styles.MenuSmallInfo}>
              <h5 className={styles.InfoPadding}>okoprom@gmail.com</h5>
              <h5>+7 (800) 707-31-01</h5>
            </div>
            <div className={styles.MenuSmallInfoRoutes}>
              <h5 className={styles.InfoPadding}>
                <NavLink
                  to="shippingPayment"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.default
                  }
                >
                  Доставка и оплата
                </NavLink>
              </h5>
              <h5>
                <NavLink
                  to="guarantee"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.default
                  }
                >
                  Гарантия
                </NavLink>
              </h5>
            </div>
          </div>
        </div>

        <div className={styles.MenuBottom}>
          <div className={styles.MenuRoutes}>
            <NavLink
              to="catalog"
              className={({ isActive }) =>
                isActive ? styles.BottomActive : styles.BottomDefault
              }
            >
              Каталог
            </NavLink>
            <NavLink
              to="."
              end
              className={({ isActive }) =>
                isActive ? styles.BottomActive : styles.BottomDefault
              }
            >
              Наше производство
            </NavLink>
            <NavLink
              to="compony"
              className={({ isActive }) =>
                isActive ? styles.BottomActive : styles.BottomDefault
              }
            >
              О компании
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? styles.BottomActive : styles.BottomDefault
              }
            >
              Контакты
            </NavLink>
          </div>

          <div className={styles.search}>
            <BiSearch
              className={`${styles.searchCartIcon} ${
                cart.searchCart && styles.searchCartActiveIcon
              }`}
              onClick={() =>
                setCart({ shopCart: false, searchCart: !cart.searchCart })
              }
            />
            {cart.searchCart && (
              <div className={styles.searchCart}>
                <h3>Всего товаров в магазине {catalogData.length}</h3>
                {catalogData.map((el) => {
                  return <SearchCart key={el.slug} el={el} />;
                })}
              </div>
            )}
            <div className={styles.CartIcon}>
              {order.length > 0 && <p>{order.length}</p>}

              <FaShoppingCart
                className={`${styles.shopCartIcon} ${
                  cart.shopCart && styles.shopCartActiveIcon
                }`}
                onClick={() =>
                  setCart({ shopCart: !cart.shopCart, searchCart: false })
                }
              />
            </div>
            {cart.shopCart && (
              <div className={styles.shopCart}>
                {order.length > 0 ? (
                  <div>
                    <h3 className={styles.OrderLength}>
                      Всего товаров: {order.length}
                    </h3>
                    {order.map((item) => {
                      return <ShopCart key={item.slug} item={item} />;
                    })}
                    <div className={styles.Pricing}>
                      <h4>
                        Общия сумма:
                        <span className={styles.Sum}> {maxSum} ₽</span>
                      </h4>
                      <Link to="Order">
                        <button className={styles.buyButton}>
                          Перейти покупке
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <p>Товара в корзине нету</p>
                )}
              </div>
            )}

            <button className={styles.consultionButton} onClick={handleRef}>
              Запросить консультацию
            </button>
          </div>

          <div className={styles.AddaptiveBurgerMenu}>
            <AiOutlineMenu
              onClick={() => {
                setBurgerMenu(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
