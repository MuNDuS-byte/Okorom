import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { catalogProducts } from '../../../features/catalog';
import styles from './HeadingHome.module.css';

const HeadingHome = () => {
  const [index, setIndex] = useState(0);
  const current = catalogProducts[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? catalogProducts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === catalogProducts.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.Heading}>
      <div className={styles.HeadingContent}>
        <div className={styles.HeadingText}>
          <h1>{current.header}</h1>

          <div className={styles.Info}>
            <div className={styles.SmallInfo}>
              <p>Диаметр обработки</p>
              <p>{current.characteristics.diometer}</p>
            </div>
            <div className={styles.Line}></div>
          </div>

          <div className={styles.Info}>
            <div className={styles.SmallInfo}>
              <p>Размеры</p>
              <p>{current.characteristics.dimensions}</p>
            </div>
            <div className={styles.Line}></div>
          </div>

          <div className={styles.Info}>
            <div className={styles.SmallInfo}>
              <p>Мощность</p>
              <p>{current.characteristics.power}</p>
            </div>
            <div className={styles.Line}></div>
          </div>

          <div className={styles.Price}>
            <h2>{current.salePrice || current.price} ₽</h2>
            <div className={styles.PriceLine}></div>
          </div>
          <div className={styles.AddaptiveButtons}>
            <Link to={`/catalog/${current.slug}`}>
              <button>Подробнее</button>
            </Link>
            <div className={styles.Icons}>
              <div className={styles.DivIcon} onClick={handlePrev}>
                <AiOutlineLeft className={styles.Icon} />
              </div>
              <div className={styles.DivIcon} onClick={handleNext}>
                <AiOutlineRight className={styles.Icon} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Images}>
          <img src={current.cardImg} alt={current.header} />
        </div>
      </div>
      <div className={styles.Buttons}>
        <Link to={`/catalog/${current.slug}`}>
          <button>Подробнее</button>
        </Link>
        <div className={styles.Icons}>
          <div className={styles.DivIcon} onClick={handlePrev}>
            <AiOutlineLeft className={styles.Icon} />
          </div>
          <div className={styles.DivIcon} onClick={handleNext}>
            <AiOutlineRight className={styles.Icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingHome;
