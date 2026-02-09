import HeadingHome from './HeadingHome/HeadingHome';
import CardHome from './CardHome/CardHome';
import FeaturesHome from './FeaturesHome/FeaturesHome';
import Special from '../UI/Special';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className="wrapper">
        <HeadingHome />
        <CardHome />
        <FeaturesHome />
        <Special />
      </div>
    </div>
  );
};

export default Home;
