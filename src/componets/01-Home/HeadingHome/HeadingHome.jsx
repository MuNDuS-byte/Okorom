import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import Tool from '../01-images/4815img_3205-1960-2 1.png';
import styles from './HeadingHome.module.css';

const HeadingHome = () => {
  return (
    <div className={styles.Heading}>
      <div className={styles.HeadingContent}>
        <div className={styles.HeadingText}>
          <h1>
            Новый зверь
            <br /> для всех типов кабелей
          </h1>

          <div className={styles.Info}>
            <div className={styles.SmallInfo}>
              <p>Диаметр обработки</p>
              <p>от 1,5 до 130мм</p>
            </div>
            <div className={styles.Line}></div>
          </div>

          <div className={styles.Info}>
            <div className={styles.SmallInfo}>
              <p>Размеры</p>
              <p>90*68*120 см</p>
            </div>
            <div className={styles.Line}></div>
          </div>

          <div className={styles.Info}>
            <div className={styles.SmallInfo}>
              <p>Мощность</p>
              <p>о3 кВт 380 В</p>
            </div>
            <div className={styles.Line}></div>
          </div>

          <div className={styles.Price}>
            <h2>209 000 ₽</h2>
            <div className={styles.PriceLine}></div>
          </div>
          {/* Adaptive Buttons*/}
          <div className={styles.AddaptiveButtons}>
            <button>Подробнее</button>
            <div className={styles.Icons}>
              <div className={styles.DivIcon}>
                <AiOutlineLeft className={styles.Icon} />
              </div>
              <div className={styles.DivIcon}>
                <AiOutlineRight className={styles.Icon} />
              </div>
            </div>
          </div>
          {/* Over Adaptive Buttons */}
        </div>
        <div className={styles.Images}>
          <img src={Tool} alt="tool" />
        </div>
      </div>
      <div className={styles.Buttons}>
        <button>Подробнее</button>
        <div className={styles.Icons}>
          <div className={styles.DivIcon}>
            <AiOutlineLeft className={styles.Icon} />
          </div>
          <div className={styles.DivIcon}>
            <AiOutlineRight className={styles.Icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingHome;
