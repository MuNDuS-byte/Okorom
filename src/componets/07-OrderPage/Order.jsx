import { useDispatch } from "react-redux";
import { deleteBasket } from "../../redux/slices/basketSlices";
import { GrClose } from "react-icons/gr";
import styles from "./Order.module.css";

const Order = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.Order}>
      <img src={el.cardImg} alt={el.header} />
      <h2>{el.header}</h2>
      <div className={styles.CloseIcon}>
        <GrClose onClick={() => dispatch(deleteBasket(el.slug))} />
      </div>
    </div>
  );
};

export default Order;
