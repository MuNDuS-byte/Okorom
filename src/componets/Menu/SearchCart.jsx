import { BsPlusSquareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addBasket } from "../../redux/slices/basketSlices";
import styles from "./SearchCart.module.css";

const SearchCart = ({ el }) => {
  const dispatch = useDispatch();
  function handleAddBasket(info) {
    dispatch(addBasket(info));
  }
  return (
    <div className={styles.SearchCart}>
      <div>
        <img src={el.cardImg} alt={el.header} />
      </div>
      <div className={styles.Text}>
        <h4 className={styles.header}>{el.header}</h4>
        <div className={styles.Info}>
          <div className={styles.SmallInfo}>
            <p className={styles.answer}>Вес</p>
            <p className={styles.valing}>{el.characteristics.weight}</p>
          </div>

          <div className={styles.SmallInfo}>
            <p className={styles.answer}>Двигатель</p>
            <p className={styles.valing}>{el.characteristics.engine}</p>
          </div>

          <div className={styles.SmallInfo}>
            <p className={styles.answer}>Диам. обраб.</p>
            <p className={styles.valing}>25мм</p>
          </div>
        </div>

        <div className={styles.PriceAdd}>
          <div className={styles.Price}>
            {!el.salePrice ? <p>{el.price} ₽</p> : <p>{el.salePrice} ₽</p>}
          </div>
          <BsPlusSquareFill
            onClick={() => handleAddBasket(el)}
            className={styles.Add}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchCart;
