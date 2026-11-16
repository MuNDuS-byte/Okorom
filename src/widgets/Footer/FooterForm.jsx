import { useState } from 'react';
import { useConsultation } from '../../features/consultation';
import styles from './FooterForm.module.css';

const FooterForm = () => {
  const { ref, submitted, notifySubmitted } = useConsultation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7 ');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handlePhoneChange = (e) => {
    const raw = e.target.value;
    let digits = raw.replace(/\D/g, '');
    if (digits.startsWith('7') || digits.startsWith('8')) {
      digits = digits.slice(1);
    }
    digits = digits.slice(0, 10);
    setPhone('+7 ' + digits);
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const phoneDigits = phone.replace(/\D/g, '');
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName || phoneDigits.length <= 1 || !trimmedEmail) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    if (phoneDigits.length !== 11 || !phoneDigits.startsWith('7')) {
      setError('Введите корректный номер телефона (+7 и 10 цифр)');
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setError('Введите корректный адрес электронной почты');
      return;
    }

    setError('');
    setName('');
    setPhone('+7 ');
    setEmail('');
    notifySubmitted();
  };

  return (
    <div className={styles.FooterForm} ref={ref}>
      {submitted && (
        <div className={styles.SuccessToast}>Отправлено успешно</div>
      )}
      <div className={styles.FooterFormContent}>
        <div className={styles.Text}>
          <h1>Будем рады ответить на все интересующие вопросы</h1>
          <p>
            Оставьте заявку и мы вам вскоре позвоним и проконсультируем по всем
            интересующим вопросам
          </p>
        </div>

        <form className={styles.Form} onSubmit={handleSubmit} noValidate>
          <div>
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
            />
          </div>

          <div className={styles.InputPadding}>
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
            />
          </div>
          {error && <p className={styles.ErrorMessage}>{error}</p>}
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default FooterForm;
