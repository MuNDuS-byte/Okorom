import HeadingContact from './HeadingContact/HeadingContact';
import InfoContact from './InfoContact/InfoContact';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className="wrapper">
        <h1>Контакты</h1>
        <HeadingContact />
        <InfoContact />
      </div>
    </div>
  );
};

export default Contact;
