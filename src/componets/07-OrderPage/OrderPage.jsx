import { useSelector } from "react-redux";
import { selectBasket } from "../../redux/slices/basketSlices";
import Order from "./Order";
import styles from "./OrderPage.module.css";

const OrderPage = () => {
  const basket = useSelector(selectBasket);
  return (
    <>
      <div className="wrapper">
        <div className={styles.OrderPageContent}>
          <h1>Всего товаров для покупки {basket.length}</h1>
          {basket.length > 0 ? (
            basket.map((el) => {
              return (
                <>
                  <div className={styles.Orders}>
                    <Order key={el.slug} el={el} />
                  </div>
                </>
              );
            })
          ) : (
            <h1>
              В корзине нету товаров,
              <br /> пожалуста добавте товар в корзину
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderPage;
