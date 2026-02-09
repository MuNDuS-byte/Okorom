import Info from './Info';
import styles from './InfoContact.module.css';

const InfoContact = () => {
  return (
    <div className={styles.InfoContact}>
      <h2>Юридическая информация</h2>
      <div className={styles.InfoContent}>
        <Info
          header="Производство"
          nick="Общество с ограниченной ответственностью «Окопром»"
          orgn="1205000045821"
          iin="5032318518"
          address="143072, Московская обл., р-н Одинцовский, п. ВНИИССОК, ул. Дружбы, д. 4"
        />
        <Info
          header="Продажи"
          nick="Общество с ограниченной ответственностью «Сином Групп»"
          orgn="1177746129010"
          iin="7726396387"
          address="115191, г. Москва, пер. Духовской, д. 17, пом. 1"
        />
      </div>
    </div>
  );
};

export default InfoContact;
