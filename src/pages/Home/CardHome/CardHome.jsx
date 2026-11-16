import cardHomeData from '../model/cardHomeData';
import Card from './Card';
import styles from './CardHome.module.css';

const CardHome = () => {
  return (
    <div className={styles.CardHome}>
      <div className={styles.CardHomeText}>
        <h1>
          Сепараторы, конвейеры, шнековые транспортеры и линии для переработки
        </h1>
        <h3>
          Мы на связи всегда и разберемся с любыми вопросами возникшими во время
          эксплуатации нашего оборудования.
        </h3>
      </div>

      <div className={styles.Cards}>
        {cardHomeData.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default CardHome;
