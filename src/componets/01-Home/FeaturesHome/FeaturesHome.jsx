import cardFeaturesData from '../../../data/cardFeaturesData';
import FeaturesCard from './FeaturesCard';
import styles from './FeaturesHome.module.css';

const FeaturesHome = () => {
  return (
    <div className={styles.FeaturesHome}>
      <h1>Ваша рост – наш интерес, ведь тогда нам будет к чему стремиться</h1>
      <div className={styles.Cards}>
        {cardFeaturesData.map((data) => {
          return <FeaturesCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default FeaturesHome;
