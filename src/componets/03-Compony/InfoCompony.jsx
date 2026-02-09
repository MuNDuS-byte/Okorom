import styles from './InfoCompony.module.css';

const InfoCompony = ({ header, info, text }) => {
  return (
    <div className={styles.InfoCompony}>
      <p>{header}</p>
      <h1>{info}</h1>
      <p>{text}</p>
    </div>
  );
};

export default InfoCompony;
