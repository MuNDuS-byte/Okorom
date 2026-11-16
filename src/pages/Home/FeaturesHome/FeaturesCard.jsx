import styles from './FeaturesCard.module.css';

const FeaturesCard = ({ data }) => {
  return (
    <div className={styles.FeaturesCard}>
      <div className={styles.CardImg}>
        <img src={data.img} alt={data.header} />
      </div>
      <div className={styles.Text}>
        <h3>{data.header}</h3>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
