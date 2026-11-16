import { MdDelete } from "react-icons/md";
import { useCart } from "../model/useCart";
import styles from "./ShopCart.module.css";

const ShopCart = ({ item }) => {
  const { remove, changeCount, minCount, maxCount } = useCart();

  return (
    <div className={styles.ShopCart}>
      <div>
        <img src={item.cardImg} alt={item.header} />
      </div>
      <div className={styles.Text}>
        <h4 className={styles.header}>{item.header}</h4>
        <div className={styles.Info}>
          <div className={styles.SmallInfo}>
            <p className={styles.answer}>Вес</p>
            <p className={styles.valing}>{item.characteristics.weight}</p>
          </div>

          <div className={styles.SmallInfo}>
            <p className={styles.answer}>Двигатель</p>
            <p className={styles.valing}>{item.characteristics.engine}</p>
          </div>

          <div className={styles.SmallInfo}>
            <p className={styles.answer}>Диам. обраб.</p>
            <p className={styles.valing}>25мм</p>
          </div>
        </div>

        <div className={styles.PriceDelete}>
          <div className={styles.Price}>
            {item.numAftonom && <p>{item.price * item.count} ₽</p>}
            {item.numStanok && <p>{item.salePrice * item.count} ₽</p>}
            {item.numStanokTwo && <p>{item.price * item.count} ₽</p>}
          </div>
          <div className={styles.Input}>
            <button
              className={styles.Minus}
              disabled={item.count <= minCount}
              onClick={() =>
                changeCount(item.slug, false)
              }
            >
              -
            </button>
            <div className={styles.Count}>{item.count}</div>
            <button
              className={styles.Plus}
              disabled={item.count >= maxCount}
              onClick={() => changeCount(item.slug, true)}
            >
              +
            </button>
          </div>
          <MdDelete
            className={styles.Delete}
            onClick={() => remove(item.slug)}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
