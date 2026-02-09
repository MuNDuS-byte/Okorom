import styles from './FooterForm.module.css';

const FooterForm = ({ refConsultion }) => {
  return (
    <div className={styles.FooterForm} ref={refConsultion}>
      <div className={styles.FooterFormContent}>
        <div className={styles.Text}>
          <h1>Будем рады ответить на все интересующие вопросы</h1>
          <p>
            Оставьте заявку и мы вам вскоре позвоним и проконсультируем по всем
            интересующим вопросам
          </p>
        </div>

        <div className={styles.Form}>
          <div>
            <input placeholder="name" />
          </div>

          <div className={styles.InputPadding}>
            <input placeholder="+ 7 (___) __ __" />
          </div>
          <div>
            <input placeholder="E-mail (необязательно)" />
          </div>
          <button>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default FooterForm;
