import styles from './Logo.module.scss';
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <div className={styles.img}/>
      <div className={styles.border}></div>
    </Link>
  );
};

export default Logo;