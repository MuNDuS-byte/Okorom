import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import navLinks from '../../shared/config/navLinks';
import logo from './Images/Group 336871.png';
import styles from './BurgerMenu.module.css';

const BurgerMenu = ({ setBurgerMenu }) => {
  const handleClose = () => setBurgerMenu(false);

  return (
    <div className={styles.BurgerMenu} onClick={handleClose}>
      <div
        className={styles.BurgerMenuContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.Header}>
          <div className={styles.Logo}>
            <img src={logo} alt="logo" />
            <h3>okorom</h3>
          </div>
          <button
            type="button"
            className={styles.CloseButton}
            onClick={handleClose}
            aria-label="Закрыть меню"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className={styles.Navigate}>
          {navLinks.map((el) => {
            return (
              <NavLink
                key={el.route}
                to={el.route}
                onClick={handleClose}
                className={({ isActive }) =>
                  isActive ? styles.active : styles.default
                }
              >
                {el.textRoute}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
