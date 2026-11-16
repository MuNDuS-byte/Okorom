import styles from './Card.module.css';

const Card = ({ data }) => {
  return (
    <div className={styles.Card}>
      <div>
        <h2>{data.text}</h2>
        <img src={data.img} alt="" />
      </div>
    </div>
  );
};

export default Card;
