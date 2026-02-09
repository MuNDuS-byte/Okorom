import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ data }) => {
  return (
    <Link to="catalog" className={styles.Card}>
      <div>
        <h2>{data.text}</h2>
        <img src={data.img} />
      </div>
    </Link>
  );
};

export default Card;
