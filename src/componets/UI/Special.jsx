import Rush from '../01-Home/01-images/РФ.png';
import MKM from '../01-Home/01-images/MKM.png';
import Olimp from '../01-Home/01-images/Olimp.png';
import BTM from '../01-Home/01-images/BTM.png';
import YMC from '../01-Home/01-images/YMC.png';
import VTOR from '../01-Home/01-images/VTOR.png';
import styles from './Special.module.css';

const Special = () => {
  return (
    <div className={styles.Special}>
      <div className={styles.SpecialText}>
        <h1>Почему именно мы?</h1>
        <div className={styles.SpecialParagragh}>
          <p>
            За долгое время работы в этой области у нас более одной тысячи
            клиентов в базе в том числе и представленные выше. В основном это
            компании по переработке вторсырья.
          </p>
          <p>
            Мы уже прошли тот путь который вам предстоит пройти после
            приобретения нашей продукции и лучше подскажем: что вам лучше
            подойдет, чего надо избегать и как более эффективно использовать то
            что есть.
          </p>
        </div>
      </div>

      <div className={styles.AllImages}>
        <img src={Rush} alt="Rush" />
        <img src={MKM} alt="MKM" />
        <img src={Olimp} alt="Olimp" />

        <img src={BTM} alt="BTM" className={styles.ImgBottom} />
        <img src={YMC} alt="YMC" className={styles.ImgBottom} />
        <img src={VTOR} alt="VTOR" className={styles.ImgBottom} />
      </div>
    </div>
  );
};

export default Special;
