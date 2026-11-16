import { Link, Navigate, useLocation } from 'react-router-dom';
import styles from './OrderSuccessPage.module.css';

const OrderSuccessPage = () => {
  const { state } = useLocation();
  const order = state?.order;

  if (!order) {
    return <Navigate to="/catalog" replace />;
  }

  return (
    <div className="wrapper">
      <div className={styles.Page}>
        <div className={styles.Card}>
          <div className={styles.Check}>✓</div>
          <h1>Спасибо за заказ!</h1>
          <p className={styles.Lead}>
            Заказ № {order.number} оформлен. Мы свяжемся с вами в ближайшее
            время для подтверждения.
          </p>

          <div className={styles.Block}>
            <h3>Контакты</h3>
            <p>{order.contact.name}</p>
            <p>{order.contact.phone}</p>
            <p>{order.contact.email}</p>
          </div>

          <div className={styles.Block}>
            <h3>Доставка и оплата</h3>
            <p>{order.delivery}</p>
            {order.address && <p>{order.address}</p>}
            <p>{order.payment}</p>
          </div>

          <div className={styles.Block}>
            <h3>Состав заказа</h3>
            {order.items.map((el) => (
              <div key={el.slug} className={styles.Item}>
                <span>
                  {el.header} × {el.count}
                </span>
                <span>{el.price * el.count} ₽</span>
              </div>
            ))}
            <div className={`${styles.Item} ${styles.Total}`}>
              <span>Итого</span>
              <span>{order.total} ₽</span>
            </div>
          </div>

          <Link to="/catalog" className={styles.Button}>
            Вернуться в каталог
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
