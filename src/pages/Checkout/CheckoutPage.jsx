import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../features/cart';
import styles from './CheckoutPage.module.css';

export const DELIVERY_OPTIONS = [
  { key: 'pickup', name: 'Самовывоз со склада' },
  { key: 'courier', name: 'Доставка транспортной компанией' },
];

export const PAYMENT_OPTIONS = [
  { key: 'cash', name: 'Оплата при получении' },
  { key: 'invoice', name: 'Безналичный расчёт для юр. лиц' },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, total, clear, getUnitPrice } = useCart();
  const [form, setForm] = useState({
    name: '',
    phone: '+7 ',
    email: '',
    address: '',
    delivery: 'pickup',
    payment: 'cash',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handlePhoneChange = (e) => {
    let digits = e.target.value.replace(/\D/g, '');
    if (digits.startsWith('7') || digits.startsWith('8')) {
      digits = digits.slice(1);
    }
    setForm((prev) => ({ ...prev, phone: '+7 ' + digits.slice(0, 10) }));
    setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Укажите имя';
    if (form.phone.replace(/\D/g, '').length !== 11) {
      next.phone = 'Введите номер в формате +7 и 10 цифр';
    }
    if (!EMAIL_REGEX.test(form.email.trim())) {
      next.email = 'Введите корректный e-mail';
    }
    if (form.delivery === 'courier' && !form.address.trim()) {
      next.address = 'Укажите адрес доставки';
    }
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const order = {
      number: Math.floor(100000 + Math.random() * 900000),
      contact: {
        name: form.name.trim(),
        phone: form.phone,
        email: form.email.trim(),
      },
      address: form.delivery === 'courier' ? form.address.trim() : '',
      delivery: DELIVERY_OPTIONS.find((o) => o.key === form.delivery).name,
      payment: PAYMENT_OPTIONS.find((o) => o.key === form.payment).name,
      items: items.map((el) => ({
        slug: el.slug,
        header: el.header,
        count: el.count,
        price: getUnitPrice(el),
      })),
      total,
    };

    navigate('/order-success', { state: { order } });
    clear();
  };

  if (items.length === 0) {
    return (
      <div className="wrapper">
        <div className={styles.Page}>
          <h1>Оформление заказа</h1>
          <div className={styles.Empty}>
            <h3>В корзине нет товаров</h3>
            <Link to="/catalog" className={styles.Primary}>
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className={styles.Page}>
        <h1>Оформление заказа</h1>
        <form className={styles.Layout} onSubmit={handleSubmit} noValidate>
          <div className={styles.Fields}>
            <section className={styles.Section}>
              <h3>Контактные данные</h3>
              <label className={styles.Field}>
                Имя
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange('name')}
                />
                {errors.name && <span className={styles.Error}>{errors.name}</span>}
              </label>
              <label className={styles.Field}>
                Телефон
                <input
                  type="tel"
                  value={form.phone}
                  onChange={handlePhoneChange}
                />
                {errors.phone && (
                  <span className={styles.Error}>{errors.phone}</span>
                )}
              </label>
              <label className={styles.Field}>
                E-mail
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                />
                {errors.email && (
                  <span className={styles.Error}>{errors.email}</span>
                )}
              </label>
            </section>

            <section className={styles.Section}>
              <h3>Способ доставки</h3>
              {DELIVERY_OPTIONS.map((option) => (
                <label key={option.key} className={styles.Option}>
                  <input
                    type="radio"
                    name="delivery"
                    value={option.key}
                    checked={form.delivery === option.key}
                    onChange={handleChange('delivery')}
                  />
                  {option.name}
                </label>
              ))}
              {form.delivery === 'courier' && (
                <label className={styles.Field}>
                  Адрес доставки
                  <input
                    type="text"
                    value={form.address}
                    onChange={handleChange('address')}
                  />
                  {errors.address && (
                    <span className={styles.Error}>{errors.address}</span>
                  )}
                </label>
              )}
            </section>

            <section className={styles.Section}>
              <h3>Способ оплаты</h3>
              {PAYMENT_OPTIONS.map((option) => (
                <label key={option.key} className={styles.Option}>
                  <input
                    type="radio"
                    name="payment"
                    value={option.key}
                    checked={form.payment === option.key}
                    onChange={handleChange('payment')}
                  />
                  {option.name}
                </label>
              ))}
            </section>
          </div>

          <aside className={styles.Summary}>
            <h3>Ваш заказ</h3>
            {items.map((el) => (
              <div key={el.slug} className={styles.SummaryItem}>
                <span>
                  {el.header} × {el.count}
                </span>
                <span>{getUnitPrice(el) * el.count} ₽</span>
              </div>
            ))}
            <div className={`${styles.SummaryItem} ${styles.SummaryTotal}`}>
              <span>Итого</span>
              <span>{total} ₽</span>
            </div>
            <button type="submit" className={styles.Primary}>
              Подтвердить заказ
            </button>
            <Link to="/Order" className={styles.Back}>
              Вернуться в корзину
            </Link>
          </aside>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
