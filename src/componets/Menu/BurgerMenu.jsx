import { AiOutlineClose } from 'react-icons/ai';
import logo from './Images/Group 336871.png';
import styles from './BurgerMenu.module.css';
import { NavLink } from 'react-router-dom';

const BurgerMenu = ({ navigate, setBurgerMenu, handleRef }) => {
  return (
    <div className={styles.BurgerMenu}>
      <div className={styles.BurgerMenuContent}>
        <div className={styles.Header}>
          <div className={styles.Logo}>
            <img src={logo} alt="logo" />
            <h3>okorom</h3>
          </div>
          <AiOutlineClose onClick={() => setBurgerMenu(false)} />
        </div>
        <div className={styles.Navigate}>
          {navigate.map((el) => {
            return (
              <NavLink
                key={el.route}
                to={el.route}
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
