import HeadingCompony from './HeadingCompony';
import InfoCompony from './InfoCompony';
import Special from '../UI/Special';
import Client from './Client';
import styles from './Compony.module.css';

const Compony = () => {
  return (
    <div className={styles.Compony}>
      <div className="wrapper">
        <HeadingCompony />
        <div className={styles.AllInfoCompony}>
          <InfoCompony
            header="Клиентов"
            info="1200+"
            text="За время работы в этой области у нас более одной тысячи клиентов в базе в том числе и представленные ниже"
          />
          <InfoCompony
            header="Лет в области"
            info="6"
            text="Что дает контакты и прямое общение с предпринимателями, выявление прямых потребностей."
          />
          <InfoCompony
            header="Пробуем новое"
            info="24/7"
            text="Всегда ищем новые решения, которые будут полезны нашим клиентам"
          />
        </div>
        <Special />
        <Client />
      </div>
    </div>
  );
};

export default Compony;
