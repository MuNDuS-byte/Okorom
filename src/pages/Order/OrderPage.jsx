import { Link } from "react-router-dom";
import { useCart, Order } from "../../features/cart";
import styles from "./OrderPage.module.css";

const OrderPage = () => {
  const { items: basket, total } = useCart();
  const itemsCount = basket.reduce((sum, el) => sum + el.count, 0);

  return (
    <div className="wrapper">
      <div className={styles.OrderPageContent}>
        <h1>Корзина</h1>
        {basket.length > 0 ? (
          <div className={styles.Layout}>
            <div className={styles.List}>
              {basket.map((el) => {
                return <Order key={el.slug} el={el} />;
              })}
            </div>
            <aside className={styles.Summary}>
              <h3>Итого</h3>
              <div className={styles.SummaryRow}>
                <span>Позиций</span>
                <span>{basket.length}</span>
              </div>
              <div className={styles.SummaryRow}>
                <span>Товаров</span>
                <span>{itemsCount}</span>
              </div>
              <div className={`${styles.SummaryRow} ${styles.SummaryTotal}`}>
                <span>Сумма</span>
                <span>{total} ₽</span>
              </div>
              <Link to="/checkout" className={styles.CheckoutButton}>
                Перейти к оформлению
              </Link>
            </aside>
          </div>
        ) : (
          <div className={styles.Empty}>
            <h3>В корзине нет товаров</h3>
            <p>Добавьте товар из каталога, чтобы оформить заказ</p>
            <Link to="/catalog" className={styles.CheckoutButton}>
              Перейти в каталог
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
