import { useState } from 'react';
import ProductionCard from './ProductionCard';
import styles from './Production.module.css';

const Prudaction = ({ cardCatalogData }) => {
  const [data, setData] = useState(cardCatalogData);
  const [catager, setCatager] = useState([
    { key: 'all', name: 'Вся продукция', btn: true },
    { key: 'sale', name: 'Скидка', btn: false },
    { key: 'armor', name: 'Броня', btn: false },
    { key: 'press', name: 'Пресс', btn: false },
  ]);

  function filterCatalog(filtered) {
    if (filtered.key === 'all') {
      setData(cardCatalogData);
      return;
    }

    setData(
      cardCatalogData.filter((el) => {
        return (
          el.filter.sale === filtered.key ||
          el.filter.armor === filtered.key ||
          el.filter.press === filtered.key
        );
      })
    );
  }
  return (
    <div className={styles.Production}>
      <div className={styles.Header}>
        <h1>Вся продукция</h1>
        <p>{cardCatalogData.length} товара</p>
      </div>
      <div className={styles.ProductionContent}>
        <div className={styles.Filter}>
          {catager.map((el) => {
            return (
              <button key={el.key} onClick={() => filterCatalog(el)}>
                {el.name}
              </button>
            );
          })}
        </div>
        <div className={styles.PruductionCard}>
          {data.map((el) => {
            return <ProductionCard key={el.slug} info={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Prudaction;
