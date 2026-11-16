import { Link } from 'react-router-dom';
import logo from '../Header/Images/Group 336871.png';
import instagramm from './Images/Instagram.png';
import youtube from './Images/YouTube.png';
import styles from './FooterContent.module.css';

const FooterContent = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.FooterContent}>
      <div className={styles.Logo}>
        <img src={logo} alt="logo" />
        <h3>okoprom</h3>
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
            <a
              href="https://wa.me/78007073101"
              target="_blank"
              rel="noreferrer"
              className={styles.SocialButton}
            >
              Whatsapp
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className={styles.SocialButton}
            >
              Telegram
            </a>
          </div>
          <div className={styles.social}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className={styles.SocialIconLink}
            >
              <img src={instagramm} alt="instagramm" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className={styles.SocialIconLink}
            >
              <img src={youtube} alt="youtube" />
            </a>
            <p>Подписывайтесь на нас в социальных сетях</p>
          </div>
        </div>

        <div className={styles.Info}>
          <div>
            <h3>Наша продукция</h3>
            <div className={styles.LinkList}>
              <Link to="/catalog" onClick={handleLinkClick}>
                Станки для разделки кабеля
              </Link>
              <Link to="/catalog" onClick={handleLinkClick}>
                Сепараторы
              </Link>
              <Link to="/catalog" onClick={handleLinkClick}>
                Станок для разделки теплообменников
              </Link>
              <Link to="/catalog" onClick={handleLinkClick}>
                Разделка радиаторов
              </Link>
              <Link to="/catalog" onClick={handleLinkClick}>
                Запасные части
              </Link>
              <Link to="/catalog" onClick={handleLinkClick}>
                Другое
              </Link>
            </div>
          </div>

          <div>
            <h3>Информация</h3>
            <div className={styles.LinkList}>
              <Link to="/shippingPayment" onClick={handleLinkClick}>
                Доставка и оплата
              </Link>
              <Link to="/guarantee" onClick={handleLinkClick}>
                Гарантия
              </Link>
              <Link to="/compony" onClick={handleLinkClick}>
                Служба контроля качества
              </Link>
              <Link to="/" onClick={handleLinkClick}>
                Наше производство
              </Link>
              <Link to="/compony" onClick={handleLinkClick}>
                О компании
              </Link>
              <Link to="/contact" onClick={handleLinkClick}>
                Контакты
              </Link>
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
