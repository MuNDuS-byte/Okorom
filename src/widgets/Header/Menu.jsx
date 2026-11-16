import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { ShopCart, useCart } from "../../features/cart";
import { useConsultation } from "../../features/consultation";
import useHeaderPanels from "./useHeaderPanels";
import logo from "./Images/Group 336871.png";
import styles from "./Menu.module.css";

const Menu = ({ setBurgerMenu }) => {
  const navigate = useNavigate();
  const { scrollToConsultation } = useConsultation();
  const { panels: cart, toggleCart } = useHeaderPanels();
  const { items: order, total: maxSum } = useCart();

  const handleCartClick = () => {
    if (window.innerWidth <= 1024) {
      navigate("/Order");
      return;
    }
    toggleCart();
  };

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
            <div className={styles.CartIcon} onClick={handleCartClick}>
              {order.length > 0 && <p>{order.length}</p>}

              <FaShoppingCart
                className={`${styles.shopCartIcon} ${
                  cart.shopCart && styles.shopCartActiveIcon
                }`}
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

            <button
              className={styles.consultionButton}
              onClick={scrollToConsultation}
            >
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
