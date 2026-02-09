import logo from '../Menu/Images/Group 336871.png';
import instagramm from './Images/Instagram.png';
import youtube from './Images/YouTube.png';
import styles from './FooterContent.module.css';

const FooterContent = () => {
  return (
    <div className={styles.FooterContent}>
      <div className={styles.Logo}>
        <img src={logo} alt="logo" />
        <h3>okorom</h3>
      </div>

      <div className={styles.Content}>
        <div className={styles.Txt}>
          <div className={styles.Header}>
            <h2>
              Тураевское шоссе дом 17, д. Островцы, Раменский район, МО, Россия
            </h2>
          </div>
          <h2>+7 (800) 707-31-01</h2>
          <h2>okoprom@gmail.com</h2>
          <div className={styles.Buttons}>
            <button>Whatsapp</button>
            <button>Telegram</button>
          </div>
          <div className={styles.social}>
            <img src={instagramm} alt="instagramm" />
            <img src={youtube} alt="whatsapp" />
            <p>Подписывайтесь на нас в социальных сетях</p>
          </div>
        </div>

        <div className={styles.Info}>
          <div>
            <h3>Наша продукция</h3>
            <div>
              <p>Станки для разделки кабеля</p>
              <p>Сепараторы</p>
              <p>Станок для разделки теплообменников</p>
              <p>Разделка радиаторов</p>
              <p>Запасные части</p>
              <p>Другое</p>
            </div>
          </div>

          <div>
            <h3>Информация</h3>
            <div>
              <p>Доставка и оплата</p>
              <p>Гарантия</p>
              <p>Служба контроля качества</p>
              <p>Наше производство</p>
              <p>О компании</p>
              <p>Контакты</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.FooterBottomText}>
        <p>Интернет магазин "Окопром" © 2021 Все права защищены</p>
        <p>Политика конфиденциальности</p>
      </div>
    </div>
  );
};

export default FooterContent;
