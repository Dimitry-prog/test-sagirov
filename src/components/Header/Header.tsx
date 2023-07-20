import Logo from "../Logo/Logo.tsx";
import Navbar from "../Navbar/Navbar.tsx";
import styles from './Header.module.scss';
import { useState } from "react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  console.log(isOpenMenu)
  const handleToggleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__wrap}>
        <div className={styles.header__bg}/>
        <nav>
          <Logo/>
          <div className={`${isOpenMenu
            ? [styles.header__menu, styles.header__menu_open].join(' ')
            : styles.header__menu}`}>
            <Navbar/>
            <button onClick={handleToggleOpenMenu} type='button' aria-label='toggle menu'
                    className={styles.header__close}>🚀
            </button>
          </div>
          <button onClick={handleToggleOpenMenu} type='button' aria-label='toggle menu'
                  className={styles.header__toggle}>🚀
          </button>
        </nav>
      </div>

    </header>
  );
};

export default Header;