import FooterForm from './FooterForm';
import FooterContent from './FooterContent';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className="wrapper">
        <FooterForm />
        <FooterContent />
      </div>
    </div>
  );
};

export default Footer;
