import { NavbarLinks } from "../../utils/constants.ts";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <>
      <ul className={styles.list}>
        {NavbarLinks.map(link => (
          <li key={link.id}>
            <NavLink
              to={`/${link.label}`}
              className={({ isActive }) => isActive ? styles.active : ''}
            >{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;