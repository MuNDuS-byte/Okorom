import FooterForm from './FooterForm';
import FooterContent from './FooterContent';
import styles from './Footer.module.css';

const Footer = ({ refConsultion }) => {
  return (
    <div className={styles.Footer}>
      <div className="wrapper">
        <FooterForm refConsultion={refConsultion} />
        <FooterContent />
      </div>
    </div>
  );
};

export default Footer;
