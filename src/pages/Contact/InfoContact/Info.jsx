import styles from './Info.module.css';

const Info = (props) => {
  const { header, nick, orgn, iin, address } = props;
  return (
    <div className={styles.Info}>
      <h4>{header}</h4>
      <div className={styles.SmallInfo}>
        <p className={styles.information}>Наименование компании</p>
        <p className={styles.infotik}>{nick}</p>
      </div>

      <div className={styles.SmallInfo}>
        <p className={styles.information}>ОГРН</p>
        <p className={styles.infotik}>{orgn}</p>
      </div>

      <div className={styles.SmallInfo}>
        <p className={styles.information}>ИНН</p>
        <p className={styles.infotik}>{iin}</p>
      </div>

      <div className={styles.SmallInfo}>
        <p className={styles.information}>Адрес производства</p>
        <p className={styles.infotik}>
          Россия, Московская область, д. Островцы, Тураевская улица, дом 58
        </p>
      </div>

      <div className={styles.SmallInfo}>
        <p className={styles.information}>Почтовый адрес</p>
        <p className={styles.infotik}>{address}</p>
      </div>
    </div>
  );
};

export default Info;
