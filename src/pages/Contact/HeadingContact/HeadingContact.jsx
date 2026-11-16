import map from '../04-images/1280/Rectangle 4969.png';
import instagramm from '../04-images/Instagram.png';
import youtube from '../04-images/YouTube.png';
import mapAdaptive from '../04-images/mapAdaptiveImg.png';
import styles from './HeadingContact.module.css';

const HeadingContact = () => {
  return (
    <div className={styles.HeadingContact}>
      <div>
        <div>
          <p className={styles.Padding}>Адрес</p>
          <h4>
            Тураевское шоссе дом 17, д. Островцы, Раменский район,
            <br /> МО, Россия
          </h4>
        </div>

        <div>
          <p className={styles.Padding}>Рабочее время</p>
          <div className={styles.WorkTime}>
            <h4>Пн - Пт</h4>
            <h4>8:00 до 22:00</h4>
          </div>
          <br />
          <div className={styles.WorkTime}>
            <h4>Сб - Вс</h4>
            <h4>8:00 до 22:00</h4>
          </div>
        </div>

        <div>
          <p className={styles.Padding}>Email</p>
          <h4>okoprom@gmail.com</h4>
        </div>

        <div>
          <p className={styles.Padding}>Телефон</p>
          <h4>+7 (800) 707-31-01</h4>
        </div>

        <div>
          <p className={styles.Padding}>Мессенджеры</p>
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
        </div>

        <div>
          <p className={styles.Padding}>Мы в социальных сетях</p>
          <div className={styles.Images}>
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
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <img src={map} alt="map" className={styles.mapImg} />
        <img
          src={mapAdaptive}
          alt="map adaptive"
          className={styles.adaptiveMap}
        />
      </div>
    </div>
  );
};

export default HeadingContact;
