import { MdDelete } from "react-icons/md";
import { useCart } from "../model/useCart";
import styles from "./Order.module.css";

const Order = ({ el }) => {
  const { remove, changeCount, getUnitPrice, minCount, maxCount } = useCart();
  const unitPrice = getUnitPrice(el);

  return (
    <div className={styles.Order}>
      <img className={styles.Image} src={el.cardImg} alt={el.header} />
      <div className={styles.Info}>
        <h3 className={styles.Title}>{el.header}</h3>
        <p className={styles.UnitPrice}>{unitPrice} ₽ за шт.</p>
      </div>
      <div className={styles.Counter}>
        <button
          disabled={el.count <= minCount}
          onClick={() => changeCount(el.slug, false)}
        >
          -
        </button>
        <span>{el.count}</span>
        <button
          disabled={el.count >= maxCount}
          onClick={() => changeCount(el.slug, true)}
        >
          +
        </button>
      </div>
      <p className={styles.LineTotal}>{unitPrice * el.count} ₽</p>
      <button
        className={styles.Remove}
        onClick={() => remove(el.slug)}
        aria-label="Удалить"
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default Order;
