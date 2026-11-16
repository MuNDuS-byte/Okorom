import { Link } from "react-router-dom";
import { useCart } from "../../cart";
import styles from "./ProductionCard.module.css";

const ProductionCard = ({ info }) => {
  const { add } = useCart();
  return (
    <div className={styles.ProductionCard}>
      <Link to={info.slug}>
        <div
          className={styles.Buttons}
          style={{ background: `url(${info.cardImg})` }}
        >
          {info.filter.sale && (
            <button className={styles.SaleButton}>-10%</button>
          )}
          {info.filter.armor && (
            <button className={styles.ArmorButton}>Броня</button>
          )}
          {info.filter.press && (
            <button className={styles.PressButton}>Press</button>
          )}
        </div>
      </Link>
      <p className={styles.Header}>{info.header}</p>
      <div className={styles.Info}>
        <div className={styles.SmallInfo}>
          <p className={styles.Apion}>Вес</p>
          <p className={styles.ApionAnswer}>{info.characteristics.weight}</p>
        </div>

        <div className={styles.SmallInfo}>
          <p className={styles.Apion}>Двигатель</p>
          <p className={styles.ApionAnswer}>{info.characteristics.engine}</p>
        </div>

        <div className={styles.SmallInfo}>
          <p className={styles.Apion}>Диам. обраб.</p>
          <p className={styles.ApionAnswer}>{info.characteristics.diometer}</p>
        </div>
      </div>

      <div
        className={
          !info.filter.armor || !info.filter.press || info.filter.sale
            ? styles.Price
            : styles.PricePadding
        }
      >
        <h4>{info.price} ₽</h4>
        <p className={styles.Sale}>{info.salePrice && `${info.salePrice} ₽`}</p>
      </div>
      <button
        className={styles.PriceButton}
        onClick={() => add(info)}
      >
        Купить
      </button>
    </div>
  );
};

export default ProductionCard;
