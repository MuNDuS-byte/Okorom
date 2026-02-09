import service from '../../01-Home/01-images/Service.png';
import Delivery from '../../01-Home/01-images/Delivery.png';
import Guarantee from '../../01-Home/01-images/Guarantee.png';
import styles from './HeadingCatalog.module.css';

const HeadingCatalog = () => {
  return (
    <div className={styles.HeadingCatalog}>
      <div className={styles.Info}>
        <img src={service} alt="service" />
        <div>
          <h3>Всегда на связи</h3>
          <p>
            Консультируем при покупке и в дальнейшем при эксплуатации нашего
            оборудования
          </p>
        </div>
      </div>

      <div className={styles.Info}>
        <img src={Delivery} alt="Delivery" />
        <div>
          <h3>Доставка по всей России</h3>
          <p>
            Отправим товар транспортной компанией или почтовым отправлением
            (оплата при получении)
          </p>
        </div>
      </div>

      <div className={styles.Info}>
        <img src={Guarantee} alt="Guarantee" />
        <div>
          <h3>Гарантия на всё</h3>
          <p>
            Предоставляется гарантия сроком до 1 года со дня приобретения товара
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadingCatalog;
